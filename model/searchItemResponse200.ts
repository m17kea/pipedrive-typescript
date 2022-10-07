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
import { GetActivitiesResponse200AdditionalData } from './getActivitiesResponse200AdditionalData';
import { SearchItemResponse200AllOfData } from './searchItemResponse200AllOfData';

export class SearchItemResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: SearchItemResponse200AllOfData;
    'additionalData'?: GetActivitiesResponse200AdditionalData;

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
            "type": "SearchItemResponse200AllOfData"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "GetActivitiesResponse200AdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return SearchItemResponse200.attributeTypeMap;
    }
}

