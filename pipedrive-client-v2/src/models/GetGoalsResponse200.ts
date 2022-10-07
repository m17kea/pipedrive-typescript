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
import type { GetGoalsResponse200Data } from './GetGoalsResponse200Data';
import {
    GetGoalsResponse200DataFromJSON,
    GetGoalsResponse200DataFromJSONTyped,
    GetGoalsResponse200DataToJSON,
} from './GetGoalsResponse200Data';

/**
 * 
 * @export
 * @interface GetGoalsResponse200
 */
export interface GetGoalsResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetGoalsResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetGoalsResponse200Data}
     * @memberof GetGoalsResponse200
     */
    data?: GetGoalsResponse200Data;
}

/**
 * Check if a given object implements the GetGoalsResponse200 interface.
 */
export function instanceOfGetGoalsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetGoalsResponse200FromJSON(json: any): GetGoalsResponse200 {
    return GetGoalsResponse200FromJSONTyped(json, false);
}

export function GetGoalsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetGoalsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetGoalsResponse200DataFromJSON(json['data']),
    };
}

export function GetGoalsResponse200ToJSON(value?: GetGoalsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetGoalsResponse200DataToJSON(value.data),
    };
}

