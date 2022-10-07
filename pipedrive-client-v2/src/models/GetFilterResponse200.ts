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
 * @interface GetFilterResponse200
 */
export interface GetFilterResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetFilterResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetFiltersResponse200AllOfDataInner}
     * @memberof GetFilterResponse200
     */
    data?: GetFiltersResponse200AllOfDataInner;
}

/**
 * Check if a given object implements the GetFilterResponse200 interface.
 */
export function instanceOfGetFilterResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFilterResponse200FromJSON(json: any): GetFilterResponse200 {
    return GetFilterResponse200FromJSONTyped(json, false);
}

export function GetFilterResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFilterResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetFiltersResponse200AllOfDataInnerFromJSON(json['data']),
    };
}

export function GetFilterResponse200ToJSON(value?: GetFilterResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetFiltersResponse200AllOfDataInnerToJSON(value.data),
    };
}
