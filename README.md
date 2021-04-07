# GitHitServer

Server-side SVG rendering for GitHub Traffic Analytics. Uses the traffic data fetched by GitHits GitHub Action from the `Insights/Traffic` section of your repository.

# Testing and self-hosting
- Run `npm i` or `yarn` in the cloned directory
- Install vercel cli globally using `npm i -g vercel` or `yarn global add vercel` and login using `vercel login` (one-time setup only)
- Run `vercel` to setup your project locally
- Generate a Personal Access Token `(PAT)` from GitHub's developer settings
- Run `vercel secrets add <secret-name> <PAT>`. This secret can be used in all of your Vercel projects.
- Run `vercel env add secret <secret-name>`
- Create a `.env` file and add `<secret-name>:<PAT>`
- Run `vercel dev` to start the `localhost` server
- Run `vercel` again to deploy

*Replace `<secret-name>` with any name of your choice and `<PAT>` with the 40 character PAT (All without angular brackets)*

# Usage

Check out [GitHits](https://github.com/kausko/GitHits) for detailed information about usage.