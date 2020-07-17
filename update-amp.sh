# Update AMP XLSX download and push everything live
echo Updating AMP XLSX download, please ensure AMP API server is running locally first...;
cd .src/downloads;
curl -X POST "http://localhost:8001/post/export?class_name=all" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"filters\":{}}" > "COVID AMP - Policy and Plan Data Export.xlsx";

# Rebuild
echo Rebuilding project...;
cd ../../;
npm run build;

# Sync to S3
echo Syncing to S3...;
cd ./build;
aws s3 sync . s3://gida-landing --acl public-read --delete; aws cloudfront create-invalidation \
--distribution-id E3EBPTUIIJ9IOB \
--paths "/*";

echo Update complete!
