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
import type { SearchProductsResponse200AllOfDataItemsInnerItemOwner } from './SearchProductsResponse200AllOfDataItemsInnerItemOwner';
import {
    SearchProductsResponse200AllOfDataItemsInnerItemOwnerFromJSON,
    SearchProductsResponse200AllOfDataItemsInnerItemOwnerFromJSONTyped,
    SearchProductsResponse200AllOfDataItemsInnerItemOwnerToJSON,
} from './SearchProductsResponse200AllOfDataItemsInnerItemOwner';

/**
 * 
 * @export
 * @interface SearchProductsResponse200AllOfDataItemsInnerItem
 */
export interface SearchProductsResponse200AllOfDataItemsInnerItem {
    /**
     * The ID of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    id?: number;
    /**
     * The type of the item
     * @type {string}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    type?: string;
    /**
     * The name of the product
     * @type {string}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    name?: string;
    /**
     * The code of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    code?: number;
    /**
     * The visibility of the product
     * @type {number}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    visible_to?: number;
    /**
     * 
     * @type {SearchProductsResponse200AllOfDataItemsInnerItemOwner}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    owner?: SearchProductsResponse200AllOfDataItemsInnerItemOwner;
    /**
     * The custom fields
     * @type {Array<string>}
     * @memberof SearchProductsResponse200AllOfDataItemsInnerItem
     */
    custom_fields?: Array<string>;
}

/**
 * Check if a given object implements the SearchProductsResponse200AllOfDataItemsInnerItem interface.
 */
export function instanceOfSearchProductsResponse200AllOfDataItemsInnerItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchProductsResponse200AllOfDataItemsInnerItemFromJSON(json: any): SearchProductsResponse200AllOfDataItemsInnerItem {
    return SearchProductsResponse200AllOfDataItemsInnerItemFromJSONTyped(json, false);
}

export function SearchProductsResponse200AllOfDataItemsInnerItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchProductsResponse200AllOfDataItemsInnerItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
        'owner': !exists(json, 'owner') ? undefined : SearchProductsResponse200AllOfDataItemsInnerItemOwnerFromJSON(json['owner']),
        'custom_fields': !exists(json, 'custom_fields') ? undefined : json['custom_fields'],
    };
}

export function SearchProductsResponse200AllOfDataItemsInnerItemToJSON(value?: SearchProductsResponse200AllOfDataItemsInnerItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'name': value.name,
        'code': value.code,
        'visible_to': value.visible_to,
        'owner': SearchProductsResponse200AllOfDataItemsInnerItemOwnerToJSON(value.owner),
        'custom_fields': value.custom_fields,
    };
}

