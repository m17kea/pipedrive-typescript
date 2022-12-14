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
* The total weighted values of the deals grouped by deal currency. The weighted value is calculated as probability times deal value.
*/
export class GetDealsSummaryResponse200DataWeightedValuesTotal {
    /**
    * The total weighted value of the deals in the deal currency group
    */
    'value'?: number;
    /**
    * The number of deals in the deal currency group
    */
    'count'?: number;
    /**
    * The total weighted value of the deals formatted with deal currency. E.g. €50
    */
    'valueFormatted'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "valueFormatted",
            "baseName": "value_formatted",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetDealsSummaryResponse200DataWeightedValuesTotal.attributeTypeMap;
    }
}

