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
import type { GetActivitiesResponse200AdditionalData } from './GetActivitiesResponse200AdditionalData';
import {
    GetActivitiesResponse200AdditionalDataFromJSON,
    GetActivitiesResponse200AdditionalDataFromJSONTyped,
    GetActivitiesResponse200AdditionalDataToJSON,
} from './GetActivitiesResponse200AdditionalData';
import type { SearchProductsResponse200AllOfData } from './SearchProductsResponse200AllOfData';
import {
    SearchProductsResponse200AllOfDataFromJSON,
    SearchProductsResponse200AllOfDataFromJSONTyped,
    SearchProductsResponse200AllOfDataToJSON,
} from './SearchProductsResponse200AllOfData';

/**
 * 
 * @export
 * @interface SearchProductsResponse200AllOf
 */
export interface SearchProductsResponse200AllOf {
    /**
     * 
     * @type {SearchProductsResponse200AllOfData}
     * @memberof SearchProductsResponse200AllOf
     */
    data?: SearchProductsResponse200AllOfData;
    /**
     * 
     * @type {GetActivitiesResponse200AdditionalData}
     * @memberof SearchProductsResponse200AllOf
     */
    additional_data?: GetActivitiesResponse200AdditionalData;
}

/**
 * Check if a given object implements the SearchProductsResponse200AllOf interface.
 */
export function instanceOfSearchProductsResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchProductsResponse200AllOfFromJSON(json: any): SearchProductsResponse200AllOf {
    return SearchProductsResponse200AllOfFromJSONTyped(json, false);
}

export function SearchProductsResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchProductsResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : SearchProductsResponse200AllOfDataFromJSON(json['data']),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetActivitiesResponse200AdditionalDataFromJSON(json['additional_data']),
    };
}

export function SearchProductsResponse200AllOfToJSON(value?: SearchProductsResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SearchProductsResponse200AllOfDataToJSON(value.data),
        'additional_data': GetActivitiesResponse200AdditionalDataToJSON(value.additional_data),
    };
}
