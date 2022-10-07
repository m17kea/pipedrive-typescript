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

export class UpdateUserRequest {
    /**
    * Whether the user is active or not. `false` = Not activated, `true` = Activated
    */
    'activeFlag': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserRequest.attributeTypeMap;
    }
}

