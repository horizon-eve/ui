/* eslint-disable camelcase */
const fs = require('fs')

const generate_function_template = require('./templates/generate_function')
const generate_esi_template = require('./templates/generate_esi')

let output_dir = process.argv[2]
if (!output_dir) {
  output_dir = '../../src/vuex/api/services/'
}

if (!fs.existsSync(output_dir)) {
  fs.mkdirSync(output_dir)
}

ready(JSON.parse(fs.readFileSync('../../../esi/swagger.json')))
// request({
//   url: swagger_url,
//   json: true
// }, function (error, response, body) {
//   if (error) {
//     console.log(error)
//     process.exit(-1)
//     ready(body)
//   }
// })

function ready (swagger) {
  let files = {}
  let modules = []
  Object.keys(swagger.paths).forEach(path => {
    Object.keys(swagger.paths[path]).forEach(method => {
      const api = swagger.paths[path][method]
      if (!api) {
        throw new Error(`did not find api for ${path}`)
      }
      const tag = api.tags[0].toLowerCase().replace(/\s+/ig, '_')
      if (!files[tag]) {
        files[tag] = {
          security: false,
          functions: []
        }
        modules.push(tag)
      }
      files[tag].security |= api.security !== undefined
      files[tag].functions.push(generate_function_template(swagger, method, path, api))
    })
  })
  Object.keys(files).forEach(f => {
    const content =
`/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
${files[f].security ? 'import store from \'src/vuex/store\'\n' : ''}
export default {${files[f].functions.join(',\n')}
}
`

    fs.writeFileSync(`${output_dir}/esi/${f}.js`, content)
  })
  fs.writeFileSync(`${output_dir}/esi.js`,
    generate_esi_template(modules))
}
