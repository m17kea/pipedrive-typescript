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
import type { SearchLeadsResponse200AllOfData } from './SearchLeadsResponse200AllOfData';
import {
    SearchLeadsResponse200AllOfDataFromJSON,
    SearchLeadsResponse200AllOfDataFromJSONTyped,
    SearchLeadsResponse200AllOfDataToJSON,
} from './SearchLeadsResponse200AllOfData';

/**
 * 
 * @export
 * @interface SearchLeadsResponse200AllOf
 */
export interface SearchLeadsResponse200AllOf {
    /**
     * 
     * @type {SearchLeadsResponse200AllOfData}
     * @memberof SearchLeadsResponse200AllOf
     */
    data?: SearchLeadsResponse200AllOfData;
    /**
     * 
     * @type {GetActivitiesResponse200AdditionalData}
     * @memberof SearchLeadsResponse200AllOf
     */
    additional_data?: GetActivitiesResponse200AdditionalData;
}

/**
 * Check if a given object implements the SearchLeadsResponse200AllOf interface.
 */
export function instanceOfSearchLeadsResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchLeadsResponse200AllOfFromJSON(json: any): SearchLeadsResponse200AllOf {
    return SearchLeadsResponse200AllOfFromJSONTyped(json, false);
}

export function SearchLeadsResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchLeadsResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : SearchLeadsResponse200AllOfDataFromJSON(json['data']),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetActivitiesResponse200AdditionalDataFromJSON(json['additional_data']),
    };
}

export function SearchLeadsResponse200AllOfToJSON(value?: SearchLeadsResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SearchLeadsResponse200AllOfDataToJSON(value.data),
        'additional_data': GetActivitiesResponse200AdditionalDataToJSON(value.additional_data),
    };
}

