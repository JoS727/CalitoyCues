# CalitoyCues

Static marketing site for Calitoy Cues.

## Deploy to Cloudflare Pages

This repository is set up to deploy directly to Cloudflare Pages from GitHub Actions.

### 1) Create a Cloudflare Pages project

- In Cloudflare, create a Pages project (for example: `calitoycues`).
- The site is static, so the publish directory is the repository root (`.`).

### 2) Configure GitHub repository secrets/variables

Add these in **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN` (secret): API token with Cloudflare Pages edit permissions
- `CLOUDFLARE_ACCOUNT_ID` (secret): Cloudflare account ID
- `CLOUDFLARE_PAGES_PROJECT_NAME` (variable): your Pages project name

### 3) Deploy

- Push to `main` to trigger production deployment.
- Use **Run workflow** on `Deploy to Cloudflare Pages` for manual deployment.