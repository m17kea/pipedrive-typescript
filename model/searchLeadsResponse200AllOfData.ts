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
import { SearchLeadsResponse200AllOfDataItemsInner } from './searchLeadsResponse200AllOfDataItemsInner';

export class SearchLeadsResponse200AllOfData {
    /**
    * The array of leads
    */
    'items'?: Array<SearchLeadsResponse200AllOfDataItemsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SearchLeadsResponse200AllOfDataItemsInner>"
        }    ];

    static getAttributeTypeMap() {
        return SearchLeadsResponse200AllOfData.attributeTypeMap;
    }
}

