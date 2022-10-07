/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { SearchDealsResponse200AllOfDataItemsInner } from './SearchDealsResponse200AllOfDataItemsInner';
import {
    SearchDealsResponse200AllOfDataItemsInnerFromJSON,
    SearchDealsResponse200AllOfDataItemsInnerFromJSONTyped,
    SearchDealsResponse200AllOfDataItemsInnerToJSON,
} from './SearchDealsResponse200AllOfDataItemsInner';

/**
 * 
 * @export
 * @interface SearchDealsResponse200AllOfData
 */
export interface SearchDealsResponse200AllOfData {
    /**
     * The array of deals
     * @type {Array<SearchDealsResponse200AllOfDataItemsInner>}
     * @memberof SearchDealsResponse200AllOfData
     */
    items?: Array<SearchDealsResponse200AllOfDataItemsInner>;
}

/**
 * Check if a given object implements the SearchDealsResponse200AllOfData interface.
 */
export function instanceOfSearchDealsResponse200AllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchDealsResponse200AllOfDataFromJSON(json: any): SearchDealsResponse200AllOfData {
    return SearchDealsResponse200AllOfDataFromJSONTyped(json, false);
}

export function SearchDealsResponse200AllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchDealsResponse200AllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(SearchDealsResponse200AllOfDataItemsInnerFromJSON)),
    };
}

export function SearchDealsResponse200AllOfDataToJSON(value?: SearchDealsResponse200AllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(SearchDealsResponse200AllOfDataItemsInnerToJSON)),
    };
}

