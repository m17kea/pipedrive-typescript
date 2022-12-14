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

/**
* The user ID of the follower
*/
export class GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID {
    /**
    * The ID of the follower associated with the item
    */
    'id'?: number;
    /**
    * The name of the follower
    */
    'name'?: string;
    /**
    * The email of the follower
    */
    'email'?: string;
    /**
    * The user ID of the follower
    */
    'userId'?: number;
    /**
    * The follower picture hash
    */
    'picHash'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "picHash",
            "baseName": "pic_hash",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID.attributeTypeMap;
    }
}

