const handlebars = require('handlebars')

handlebars.registerHelper('contains', function (value, source, options) {
  if (typeof source === 'string') {
    return source.includes(value) ? options.fn(this) : options.inverse(this)
  }
  if (Array.isArray(source)) {
    return source.find(e => e === source) ? options.fn(this) : options.inverse(this)
  }
  return options.inverse(this)
})
