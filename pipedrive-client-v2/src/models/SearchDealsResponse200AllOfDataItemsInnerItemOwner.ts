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
 * @interface SearchDealsResponse200AllOfDataItemsInnerItemOwner
 */
export interface SearchDealsResponse200AllOfDataItemsInnerItemOwner {
    /**
     * The ID of the owner of the deal
     * @type {number}
     * @memberof SearchDealsResponse200AllOfDataItemsInnerItemOwner
     */
    id?: number;
}

/**
 * Check if a given object implements the SearchDealsResponse200AllOfDataItemsInnerItemOwner interface.
 */
export function instanceOfSearchDealsResponse200AllOfDataItemsInnerItemOwner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchDealsResponse200AllOfDataItemsInnerItemOwnerFromJSON(json: any): SearchDealsResponse200AllOfDataItemsInnerItemOwner {
    return SearchDealsResponse200AllOfDataItemsInnerItemOwnerFromJSONTyped(json, false);
}

export function SearchDealsResponse200AllOfDataItemsInnerItemOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchDealsResponse200AllOfDataItemsInnerItemOwner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function SearchDealsResponse200AllOfDataItemsInnerItemOwnerToJSON(value?: SearchDealsResponse200AllOfDataItemsInnerItemOwner | null): any {
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

