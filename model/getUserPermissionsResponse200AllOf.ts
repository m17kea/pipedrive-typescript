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
import { GetUserPermissionsResponse200AllOfData } from './getUserPermissionsResponse200AllOfData';

export class GetUserPermissionsResponse200AllOf {
    'data'?: GetUserPermissionsResponse200AllOfData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetUserPermissionsResponse200AllOfData"
        }    ];

    static getAttributeTypeMap() {
        return GetUserPermissionsResponse200AllOf.attributeTypeMap;
    }
}

