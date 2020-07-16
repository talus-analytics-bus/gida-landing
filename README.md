### BUILD COMMAND (preprocess scss)

npm install
npm run build

### TO RUN

open build/index.html

## TO DEPLOY FROM BUILD DIRECTORY

aws s3 sync . s3://gida-landing --acl public-read --delete; aws cloudfront create-invalidation \
--distribution-id E3EBPTUIIJ9IOB \
--paths "/\*"

## TO UPDATE AMP XSLX DATA FROM LOCAL API SERVER
curl -X POST "http://localhost:8001/post/export?class_name=all" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"filters\":{}}" > "COVID AMP - Policy and Plan Data Export.xlsx"
