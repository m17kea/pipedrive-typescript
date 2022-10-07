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
import { GetPermissionSetsResponse200AllOfDataInner } from './getPermissionSetsResponse200AllOfDataInner';

export class GetPermissionSetsResponse200AllOf {
    /**
    * The array of permission set
    */
    'data'?: Array<GetPermissionSetsResponse200AllOfDataInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetPermissionSetsResponse200AllOfDataInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetPermissionSetsResponse200AllOf.attributeTypeMap;
    }
}
