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
import { SearchLeadsResponse200AllOfData } from './searchLeadsResponse200AllOfData';

export class SearchLeadsResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: SearchLeadsResponse200AllOfData;
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
            "type": "SearchLeadsResponse200AllOfData"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "GetActivitiesResponse200AdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return SearchLeadsResponse200.attributeTypeMap;
    }
}
