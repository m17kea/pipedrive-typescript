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
/**
 * 
 * @export
 * @interface SearchProductsResponse200AllOfDataItemsInnerItemOwner
 */
export interface SearchProductsResponse200AllOfDataItemsInnerItemOwner {
    /**
     * The ID of the owner of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItemOwner
     */
    id?: number;
}

/**
 * Check if a given object implements the SearchProductsResponse200AllOfDataItemsInnerItemOwner interface.
 */
export function instanceOfSearchProductsResponse200AllOfDataItemsInnerItemOwner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchProductsResponse200AllOfDataItemsInnerItemOwnerFromJSON(json: any): SearchProductsResponse200AllOfDataItemsInnerItemOwner {
    return SearchProductsResponse200AllOfDataItemsInnerItemOwnerFromJSONTyped(json, false);
}

export function SearchProductsResponse200AllOfDataItemsInnerItemOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchProductsResponse200AllOfDataItemsInnerItemOwner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function SearchProductsResponse200AllOfDataItemsInnerItemOwnerToJSON(value?: SearchProductsResponse200AllOfDataItemsInnerItemOwner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

