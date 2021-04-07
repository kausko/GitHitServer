/**
 * @param  {String} str
 * @param  {String} locale
 */
const pascalCase = ([first, ...rest], locale = 'en') => first.toLocaleUpperCase(locale) + rest.join('')

/**
 * @param  {string[]} static
 * @param  {...string} dynamic
 */
const conditional = (static, ...dynamic) => (!dynamic || !dynamic.length || dynamic.some(v => !v)) ? '' :
  static.map((v, i) => i === dynamic.length ? v : v + dynamic[i]).join('')

module.exports = {
  pascalCase,
  conditional
}