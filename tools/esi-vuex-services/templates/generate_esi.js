function generate (modules) {
  let l = ['/* eslint-disable camelcase */']
  modules.forEach(m => l.push(`import ${m} from './esi/${m}'`))
  l.push('')
  l.push('export default {')
  let list = []
  modules.forEach(m => list.push(`  ${m}`))
  l.push(list.join(',\n'))
  l.push('}')
  l.push('')
  return l.join('\n')
}

module.exports = generate
