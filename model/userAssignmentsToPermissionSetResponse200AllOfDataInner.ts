/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class UserAssignmentsToPermissionSetResponse200AllOfDataInner {
    /**
    * The ID of the user in the permission set
    */
    'userId'?: number;
    /**
    * The ID of the permission set
    */
    'permissionSetId'?: string;
    /**
    * The name of the permission set
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "permissionSetId",
            "baseName": "permission_set_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserAssignmentsToPermissionSetResponse200AllOfDataInner.attributeTypeMap;
    }
}
