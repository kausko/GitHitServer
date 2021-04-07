# GitHitServer

Server-side SVG renderer for displaying README cards containing GitHub's Traffic Insights. It uses the traffic data fetched by [GitHits](https://github.com/kausko/GitHits) GitHub Action from the `Insights/Traffic` section of your repository.

# Usage

## Adding a card to markdown
`![<image-description>](https://githits.vercel.app/api/<route>?param_n=value_n&...)`

## Routes
- views
- clones

## Parameters
| Name         | Description |
| --           | -- |
| user         | `REQUIRED` Your GitHub username |
| repo         | `REQUIRED` Your repository name |
| mode         | `DEFAULT=light` Can be `light` or `dark`. Applies GitHub's colour scheme |
| theme        | A pre-defined [theme](https://github.com/anuraghazra/github-readme-stats/tree/master/themes). Overrides `mode` parameter |
| disable      | `Total` or `Unique`. Hides the chosen statistic |
| icon_color   | `%23<6-character-hex>`-color value for card's icon |
| title_color  | `%23<6-character-hex>`-color value for card's title |
| text_color   | `%23<6-character-hex>`-color value for card's body text |
| bg_color     | `%23<6-character-hex>`-color value for card's background |
|              | |

## Example
![Example](https://githits.vercel.app/api/views?user=kausko&repo=Chogay&theme=react&disable=Unique&bg_color=%23000)

# Testing and self-hosting
- Run `npm i` or `yarn` in the cloned directory
- Install vercel cli globally using `npm i -g vercel` or `yarn global add vercel` and login using `vercel login` (one-time setup only)
- Run `vercel` to setup your project locally
- Generate a Personal Access Token `(PAT)` from GitHub's developer settings
- Run `vercel secrets add <secret-name> <PAT>`. This secret can be used in all of your Vercel projects.
- Run `vercel env add secret <secret-name>`
- Create a `.env` file and add `<secret-name>=<PAT>`
- Run `vercel dev` to start the `localhost` server
- Run `vercel` again to deploy

*Replace `<secret-name>` with any name of your choice and `<PAT>` with the 40 character PAT (All without angular brackets)*

*Inspired by [GitHub-Readme-Stats](https://github.com/anuraghazra/github-readme-stats) - [Anurag Hazra](https://github.com/anuraghazra)*