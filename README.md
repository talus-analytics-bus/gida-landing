### BUILD COMMAND (preprocess scss)

npm install
npm run build

### TO RUN

open build/index.html

## TO DEPLOY

aws s3 sync . s3://gida-landing --acl public-read --delete; aws cloudfront create-invalidation \
--distribution-id E2APV01FSNEH6H \
--paths "/\*"
