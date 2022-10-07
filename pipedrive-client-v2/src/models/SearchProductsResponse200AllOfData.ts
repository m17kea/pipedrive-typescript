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
import type { SearchProductsResponse200AllOfDataItemsInner } from './SearchProductsResponse200AllOfDataItemsInner';
import {
    SearchProductsResponse200AllOfDataItemsInnerFromJSON,
    SearchProductsResponse200AllOfDataItemsInnerFromJSONTyped,
    SearchProductsResponse200AllOfDataItemsInnerToJSON,
} from './SearchProductsResponse200AllOfDataItemsInner';

/**
 * 
 * @export
 * @interface SearchProductsResponse200AllOfData
 */
export interface SearchProductsResponse200AllOfData {
    /**
     * The array of found items
     * @type {Array<SearchProductsResponse200AllOfDataItemsInner>}
     * @memberof SearchProductsResponse200AllOfData
     */
    items?: Array<SearchProductsResponse200AllOfDataItemsInner>;
}

/**
 * Check if a given object implements the SearchProductsResponse200AllOfData interface.
 */
export function instanceOfSearchProductsResponse200AllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchProductsResponse200AllOfDataFromJSON(json: any): SearchProductsResponse200AllOfData {
    return SearchProductsResponse200AllOfDataFromJSONTyped(json, false);
}

export function SearchProductsResponse200AllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchProductsResponse200AllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(SearchProductsResponse200AllOfDataItemsInnerFromJSON)),
    };
}

export function SearchProductsResponse200AllOfDataToJSON(value?: SearchProductsResponse200AllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(SearchProductsResponse200AllOfDataItemsInnerToJSON)),
    };
}
