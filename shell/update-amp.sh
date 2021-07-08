# Update AMP XLSX download and push everything live
echo Updating AMP XLSX download, please ensure AMP API server is running locally first...;
cd ./src/downloads;
curl -X POST "http://localhost:8002/post/export?class_name=All_data_recreate" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"filters\":{}}" -o "COVID AMP - Policy and Plan Data Export.xlsx";
open "COVID AMP - Policy and Plan Data Export.xlsx";
echo "Review and save XLSX file, then do 'npm run deploy' to update site";
