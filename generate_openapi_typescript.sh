export JAVA_OPTS="-Dio.swagger.parser.util.RemoteUrl.trustAll=true -Dio.swagger.v3.parser.util.RemoteUrl.trustAll=true" 
echo $JAVA_OPTS
openapi-generator generate \
-i https://developers.pipedrive.com/docs/api/v1/openapi.json \
-g typescript-fetch \
-c openapi_typescript_config.json \
-o ./pipedrive-client-v2 \
--skip-validate-spec
