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
import type { ActivityResponseObject } from './ActivityResponseObject';
import {
    ActivityResponseObjectFromJSON,
    ActivityResponseObjectFromJSONTyped,
    ActivityResponseObjectToJSON,
} from './ActivityResponseObject';

/**
 * 
 * @export
 * @interface GetRecentsResponse200DataInnerAnyOf
 */
export interface GetRecentsResponse200DataInnerAnyOf {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf
     */
    item?: GetRecentsResponse200DataInnerAnyOfItemEnum;
    /**
     * 
     * @type {number}
     * @memberof GetRecentsResponse200DataInnerAnyOf
     */
    id?: number;
    /**
     * 
     * @type {ActivityResponseObject}
     * @memberof GetRecentsResponse200DataInnerAnyOf
     */
    data?: ActivityResponseObject;
}

/**
* @export
* @enum {string}
*/
export enum GetRecentsResponse200DataInnerAnyOfItemEnum {
    Activity = 'activity'
}


/**
 * Check if a given object implements the GetRecentsResponse200DataInnerAnyOf interface.
 */
export function instanceOfGetRecentsResponse200DataInnerAnyOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRecentsResponse200DataInnerAnyOfFromJSON(json: any): GetRecentsResponse200DataInnerAnyOf {
    return GetRecentsResponse200DataInnerAnyOfFromJSONTyped(json, false);
}

export function GetRecentsResponse200DataInnerAnyOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRecentsResponse200DataInnerAnyOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': !exists(json, 'item') ? undefined : json['item'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'data': !exists(json, 'data') ? undefined : ActivityResponseObjectFromJSON(json['data']),
    };
}

export function GetRecentsResponse200DataInnerAnyOfToJSON(value?: GetRecentsResponse200DataInnerAnyOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': value.item,
        'id': value.id,
        'data': ActivityResponseObjectToJSON(value.data),
    };
}
