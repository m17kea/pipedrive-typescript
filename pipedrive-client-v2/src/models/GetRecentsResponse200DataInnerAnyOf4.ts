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
 * @interface GetRecentsResponse200DataInnerAnyOf4
 */
export interface GetRecentsResponse200DataInnerAnyOf4 {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf4
     */
    item?: GetRecentsResponse200DataInnerAnyOf4ItemEnum;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponse200DataInnerAnyOf4
     */
    id?: number;
    /**
     * 
     * @type {GetFiltersResponse200AllOfDataInner}
     * @memberof GetRecentsResponse200DataInnerAnyOf4
     */
    data?: GetFiltersResponse200AllOfDataInner;
}

/**
* @export
* @enum {string}
*/
export enum GetRecentsResponse200DataInnerAnyOf4ItemEnum {
    Filter = 'filter'
}


/**
 * Check if a given object implements the GetRecentsResponse200DataInnerAnyOf4 interface.
 */
export function instanceOfGetRecentsResponse200DataInnerAnyOf4(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRecentsResponse200DataInnerAnyOf4FromJSON(json: any): GetRecentsResponse200DataInnerAnyOf4 {
    return GetRecentsResponse200DataInnerAnyOf4FromJSONTyped(json, false);
}

export function GetRecentsResponse200DataInnerAnyOf4FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRecentsResponse200DataInnerAnyOf4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': !exists(json, 'item') ? undefined : json['item'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'data': !exists(json, 'data') ? undefined : GetFiltersResponse200AllOfDataInnerFromJSON(json['data']),
    };
}

export function GetRecentsResponse200DataInnerAnyOf4ToJSON(value?: GetRecentsResponse200DataInnerAnyOf4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': value.item,
        'id': value.id,
        'data': GetFiltersResponse200AllOfDataInnerToJSON(value.data),
    };
}

