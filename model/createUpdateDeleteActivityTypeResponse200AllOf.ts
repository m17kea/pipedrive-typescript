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
import { GetActivityTypesResponse200AllOfDataInner } from './getActivityTypesResponse200AllOfDataInner';

export class CreateUpdateDeleteActivityTypeResponse200AllOf {
    'data'?: GetActivityTypesResponse200AllOfDataInner;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetActivityTypesResponse200AllOfDataInner"
        }    ];

    static getAttributeTypeMap() {
        return CreateUpdateDeleteActivityTypeResponse200AllOf.attributeTypeMap;
    }
}

