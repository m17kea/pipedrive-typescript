openapi-generator generate \
-i https://developers.pipedrive.com/docs/api/v1/openapi.json \
-g typescript-node \
-c openapi_typescript_config.json \
-o . \
--git-repo-id pipedrive-typescript \
--git-user-id m17kea \
--skip-validate-spec
