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
import { GetActivitiesResponse200AdditionalDataPagination } from './getActivitiesResponse200AdditionalDataPagination';

export class GetActivitiesResponse200AdditionalData {
    'pagination'?: GetActivitiesResponse200AdditionalDataPagination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "GetActivitiesResponse200AdditionalDataPagination"
        }    ];

    static getAttributeTypeMap() {
        return GetActivitiesResponse200AdditionalData.attributeTypeMap;
    }
}

