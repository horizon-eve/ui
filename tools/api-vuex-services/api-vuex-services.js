/* eslint-disable camelcase */
const fs = require('fs')
const handlebars = require('handlebars')
const https = require('https')

require('./js/helpers.js')

let output_dir = process.argv[2]
if (!output_dir) {
  output_dir = '../../src/vuex/api/services/'
}
if (!fs.existsSync(output_dir)) {
  fs.mkdirSync(output_dir)
}

const options = {
  hostname: 'api.racopub.com',
  port: 443,
  path: '/',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  let data = ''

  res.on('data', d => {
    data += d.toString()
  })

  res.on('end', d => {
    ready(JSON.parse(data))
  })
})
req.on('error', error => {
  console.error(error)
})
req.end()

function ready (allspec) {
  Object.keys(allspec).forEach(prefix => {
    const spec = allspec[prefix]
    Object.keys(spec.paths).forEach(apiname => {
      const api = spec.paths[apiname]
      let ctx = {prefix: (prefix === '/' ? '' : prefix + '/'), api: api}
      generate_api(ctx)
    })
  })
  generate_index(allspec)
}

const api_service_template = handlebars.compile(fs.readFileSync('templates/api-service.hbs', 'UTF-8'))
const service_module_template = handlebars.compile(fs.readFileSync('templates/service-module.hbs', 'UTF-8'))

function generate_api (ctx) {
  const data = api_service_template(ctx)
  const filename = `${output_dir}/${ctx.prefix}${ctx.api.path}.js`
  if (ctx.prefix && !fs.existsSync(`${output_dir}/${ctx.prefix}`)) {
    fs.mkdirSync(`${output_dir}/${ctx.prefix}`)
  }
  fs.writeFileSync(filename, data)
}

function generate_index (allspec) {
  // Generate modules
  const root_imports = []
  Object.keys(allspec).filter(p => p !== '/').forEach(prefix => {
    const spec = allspec[prefix]
    const imports = []
    Object.keys(spec.paths).forEach(apiname => {
      const api = spec.paths[apiname]
      imports.push({module: api.path, path: `./${prefix}/${api.path}`})
    })
    const data = service_module_template(imports)
    fs.writeFileSync(`${output_dir}/${prefix}.js`, data)
    root_imports.push({module: prefix, path: `./${prefix}`})
  })
  // Generate index
  const spec = allspec['/']
  Object.keys(spec.paths).forEach(apiname => {
    const api = spec.paths[apiname]
    root_imports.push({module: api.path, path: `./${api.path}`})
  })
  const data = service_module_template(root_imports)
  fs.writeFileSync(`${output_dir}/index.js`, data)
}
