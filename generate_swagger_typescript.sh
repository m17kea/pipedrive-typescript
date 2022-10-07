export JAVA_OPTS="-Dio.swagger.parser.util.RemoteUrl.trustAll=true -Dio.swagger.v3.parser.util.RemoteUrl.trustAll=true" 
echo $JAVA_OPTS
swagger-codegen generate \
-i https://developers.pipedrive.com/docs/api/v1/openapi.json \
-l typescript-fetch \
-c ./swagger_typescript_config.json \
-o ./pipedrive-client \
-Dio.swagger.parser.util.RemoteUrl.trustAll=true \
-Dio.swagger.v3.parser.util.RemoteUrl.trustAll=true

