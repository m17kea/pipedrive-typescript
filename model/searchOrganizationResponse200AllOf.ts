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
import { SearchOrganizationResponse200AllOfData } from './searchOrganizationResponse200AllOfData';

export class SearchOrganizationResponse200AllOf {
    'data'?: SearchOrganizationResponse200AllOfData;
    'additionalData'?: GetActivitiesResponse200AdditionalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SearchOrganizationResponse200AllOfData"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "GetActivitiesResponse200AdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return SearchOrganizationResponse200AllOf.attributeTypeMap;
    }
}

