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
import type { DealStrict } from './DealStrict';
import {
    DealStrictFromJSON,
    DealStrictFromJSONTyped,
    DealStrictToJSON,
} from './DealStrict';

/**
 * 
 * @export
 * @interface GetRecentsResponse200DataInnerAnyOf2
 */
export interface GetRecentsResponse200DataInnerAnyOf2 {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf2
     */
    item?: GetRecentsResponse200DataInnerAnyOf2ItemEnum;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponse200DataInnerAnyOf2
     */
    id?: number;
    /**
     * 
     * @type {DealStrict}
     * @memberof GetRecentsResponse200DataInnerAnyOf2
     */
    data?: DealStrict;
}

/**
* @export
* @enum {string}
*/
export enum GetRecentsResponse200DataInnerAnyOf2ItemEnum {
    Deal = 'deal'
}


/**
 * Check if a given object implements the GetRecentsResponse200DataInnerAnyOf2 interface.
 */
export function instanceOfGetRecentsResponse200DataInnerAnyOf2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRecentsResponse200DataInnerAnyOf2FromJSON(json: any): GetRecentsResponse200DataInnerAnyOf2 {
    return GetRecentsResponse200DataInnerAnyOf2FromJSONTyped(json, false);
}

export function GetRecentsResponse200DataInnerAnyOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRecentsResponse200DataInnerAnyOf2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': !exists(json, 'item') ? undefined : json['item'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'data': !exists(json, 'data') ? undefined : DealStrictFromJSON(json['data']),
    };
}

export function GetRecentsResponse200DataInnerAnyOf2ToJSON(value?: GetRecentsResponse200DataInnerAnyOf2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': value.item,
        'id': value.id,
        'data': DealStrictToJSON(value.data),
    };
}

