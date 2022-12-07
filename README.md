<h1 align="center">
  GHSS Idea
</h1>

## 📈 Analytics

- [Plausible Dashboard](https://plausible.io/ghssidea.org)
- [Google Search Console](https://search.google.com/search-console?resource_id=sc-domain%3Aghssidea.org)

## 🚀 Deployment Status

| Branch  | CI/CD Status                                                                                                                                                                                                                                                                 | Url                                                   |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Prod    | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/talus-analytics-bus/gida-landing/tree/prod.svg?style=svg&circle-token=5725dc9620302bd1d4d0dc29bc9db0e47f893efd)](https://dl.circleci.com/status-badge/redirect/gh/talus-analytics-bus/gida-landing/tree/prod)       | [ghssidea.org](https://ghssidea.org/)                 |
| Staging | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/talus-analytics-bus/gida-landing/tree/staging.svg?style=svg&circle-token=5725dc9620302bd1d4d0dc29bc9db0e47f893efd)](https://dl.circleci.com/status-badge/redirect/gh/talus-analytics-bus/gida-landing/tree/staging) | [staging.ghssidea.org](https://staging.ghssidea.org/) |

Automated builds are scheduled to ingest all data to the `staging` site on the first of each month at midnight UTC.

## ⚙️ CMS Airtable

[Idea Landing Page CMS](https://airtable.com/appVIQlFfFn7aqzMh/tblCSS611oqtOTf3f/viwg5AsPFKKFCbOLe?blocks=hide)

## 📄 Ingest Latest Data from Airtable

1. Click the "CI/CD Status" badge above next to the site where you want to update data
2. Click "Trigger Pipeline" button on the top right section of that page.

## 👩‍💻 Local Development Quick start

1. [Install](https://bit.dev/docs/getting-started/installing-bit/installing-bit) & [log in](https://bit.dev/reference/reference/cli-reference/#login) to Bit

2. Install dependencies

```
yarn
```

3. Start development server

```
yarn start
```

## 🖥 Deployment Infrastructure

All GHSS IDEA Infrastructure is managed using the CloudFormation template within
the `/CloudFormation/` directory. All changes to hosting, domain names, alternate domain
names, and access control must be made in the template and deployed using the update script.

Infrastructure updates must be made with care as they can cause site downtime.

Remember to update site passwords before running deployment command, and don't commit them to github.
