/* eslint-disable camelcase */
function generate (spec, method, path, api) {
  let fun =
`
  /**
   * ${api.description.replace(/\n.*/ig, '')}
   * ${response_comment(api) || '.'}
   */
  ${api.operationId} (${function_params(spec, api)}) {
    return axios.${method}(\`\${config.ESI_BASE_URL}/${api.operationId}${query_params(spec, api)}\`${auth_header(api)}
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }`
  return fun
}

function auth_header (api) {
  if (api.security && api.security.length > 0) {
    return `, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })`
  } else {
    return ')'
  }
}

function response_comment (api) {
  if (api.responses[200] && api.responses[200].examples) {
    return JSON.stringify(api.responses[200].examples, null, 2)
      .replace(/\n/ig, '\n   * ').trim()
  }
  return ''
}

const ignore_params = [
  '#/parameters/datasource',
  '#/parameters/If-None-Match',
  '#/parameters/Accept-Language',
  '#/parameters/token',
  '#/parameters/language']
function function_params (spec, api) {
  let params = []
  api.parameters.filter(p => !ignore_params.includes(p.$ref) && !ignore_params.includes(p.name)).forEach(p => {
    if (p.$ref) {
      params.push(p.$ref.replace(/.+\//ig, ''))
    } else if (p.in !== 'body') {
      params.push(p.name)
    }
  })
  params.push('done')
  return params.join(', ')
}

function query_params (spec, api) {
  let params = []
  api.parameters.filter(p => !ignore_params.includes(p.$ref) && !ignore_params.includes(p.name)).forEach(p => {
    let pname = null
    if (p.$ref) {
      pname = p.$ref.replace(/.+\//ig, '')
    } else if (p.in !== 'body') {
      pname = p.name
    }
    if (pname) {
      params.push(`${pname}=\${${pname}}`)
    }
  })
  return params.length ? `?${params.join('&')}` : ''
}

module.exports = generate
