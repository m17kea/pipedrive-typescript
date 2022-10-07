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
import type { SearchPersonsResponse200AllOfDataItemsInnerItem } from './SearchPersonsResponse200AllOfDataItemsInnerItem';
import {
    SearchPersonsResponse200AllOfDataItemsInnerItemFromJSON,
    SearchPersonsResponse200AllOfDataItemsInnerItemFromJSONTyped,
    SearchPersonsResponse200AllOfDataItemsInnerItemToJSON,
} from './SearchPersonsResponse200AllOfDataItemsInnerItem';

/**
 * 
 * @export
 * @interface SearchPersonsResponse200AllOfDataItemsInner
 */
export interface SearchPersonsResponse200AllOfDataItemsInner {
    /**
     * Search result relevancy
     * @type {number}
     * @memberof SearchPersonsResponse200AllOfDataItemsInner
     */
    result_score?: number;
    /**
     * 
     * @type {SearchPersonsResponse200AllOfDataItemsInnerItem}
     * @memberof SearchPersonsResponse200AllOfDataItemsInner
     */
    item?: SearchPersonsResponse200AllOfDataItemsInnerItem;
}

/**
 * Check if a given object implements the SearchPersonsResponse200AllOfDataItemsInner interface.
 */
export function instanceOfSearchPersonsResponse200AllOfDataItemsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchPersonsResponse200AllOfDataItemsInnerFromJSON(json: any): SearchPersonsResponse200AllOfDataItemsInner {
    return SearchPersonsResponse200AllOfDataItemsInnerFromJSONTyped(json, false);
}

export function SearchPersonsResponse200AllOfDataItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPersonsResponse200AllOfDataItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result_score': !exists(json, 'result_score') ? undefined : json['result_score'],
        'item': !exists(json, 'item') ? undefined : SearchPersonsResponse200AllOfDataItemsInnerItemFromJSON(json['item']),
    };
}

export function SearchPersonsResponse200AllOfDataItemsInnerToJSON(value?: SearchPersonsResponse200AllOfDataItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result_score': value.result_score,
        'item': SearchPersonsResponse200AllOfDataItemsInnerItemToJSON(value.item),
    };
}
