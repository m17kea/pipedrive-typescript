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
import type { GetFiltersResponse200AllOfDataInner } from './GetFiltersResponse200AllOfDataInner';
import {
    GetFiltersResponse200AllOfDataInnerFromJSON,
    GetFiltersResponse200AllOfDataInnerFromJSONTyped,
    GetFiltersResponse200AllOfDataInnerToJSON,
} from './GetFiltersResponse200AllOfDataInner';

/**
 * 
 * @export
 * @interface GetFiltersResponse200AllOf
 */
export interface GetFiltersResponse200AllOf {
    /**
     * The array of filters
     * @type {Array<GetFiltersResponse200AllOfDataInner>}
     * @memberof GetFiltersResponse200AllOf
     */
    data?: Array<GetFiltersResponse200AllOfDataInner>;
}

/**
 * Check if a given object implements the GetFiltersResponse200AllOf interface.
 */
export function instanceOfGetFiltersResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFiltersResponse200AllOfFromJSON(json: any): GetFiltersResponse200AllOf {
    return GetFiltersResponse200AllOfFromJSONTyped(json, false);
}

export function GetFiltersResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFiltersResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetFiltersResponse200AllOfDataInnerFromJSON)),
    };
}

export function GetFiltersResponse200AllOfToJSON(value?: GetFiltersResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetFiltersResponse200AllOfDataInnerToJSON)),
    };
}
