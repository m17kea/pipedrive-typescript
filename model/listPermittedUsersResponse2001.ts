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

export class ListPermittedUsersResponse2001 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    /**
    * The list of permitted user IDs
    */
    'data'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return ListPermittedUsersResponse2001.attributeTypeMap;
    }
}

