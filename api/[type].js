const { default: fetch } = require('node-fetch');
const card = require('../components/card');
const themes = require('../utils/themes.json')
/**
 * @param  {import('@vercel/node').VercelRequest} req
 * @param  {import('@vercel/node').VercelResponse} res
 */
module.exports = async (req, res) => {
  let query = {...req.query}
  let { user, repo, type, theme, title_color, icon_color, text_color, bg_color } = query
  query.theme = {
    ...themes[theme] && { ...themes[theme] },
    ...title_color && { title_color },
    ...icon_color && { icon_color },
    ...text_color && { text_color },
    ...bg_color && { bg_color }
  }
  if (!user || !repo) {
    query.type = "Error"
    query.theme.icon_color = "var(--color-text-danger)"
    query.theme.title_color = "var(--color-icon-danger)"
  } else {
    try {
      const PAT = process.env.PAT
      if (!PAT) {
        throw new Error("PAT NOT FOUND")
      }
      const requestInit = { headers: { Authorization: `token ${PAT}` }}
      const { content } = await (await fetch(`https://api.github.com/repos/${user}/${repo}/contents/hits.json`, requestInit)).json()
      const hits = JSON.parse(Buffer.from(content, 'base64').toString('utf8'))
      const { Total, Unique, initialDate } = hits[type]
      query = { ...query, Total, Unique, initialDate }
    } catch (error) {
      console.log(error)
      query.type = "Not Found"
      query.theme.icon_color = "var(--color-text-warning)"
      query.theme.title_color = "var(--color-icon-warning)"
    }
  }
  res.setHeader('Cache-Control', 'public, max-age=86400s')
  res.setHeader('Content-Type', 'image/svg+xml')
  res.status(200).send(card(query))
};
