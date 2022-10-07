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
import type { GetGoalResultResponse200Data } from './GetGoalResultResponse200Data';
import {
    GetGoalResultResponse200DataFromJSON,
    GetGoalResultResponse200DataFromJSONTyped,
    GetGoalResultResponse200DataToJSON,
} from './GetGoalResultResponse200Data';

/**
 * 
 * @export
 * @interface GetGoalResultResponse200
 */
export interface GetGoalResultResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetGoalResultResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetGoalResultResponse200Data}
     * @memberof GetGoalResultResponse200
     */
    data?: GetGoalResultResponse200Data;
}

/**
 * Check if a given object implements the GetGoalResultResponse200 interface.
 */
export function instanceOfGetGoalResultResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetGoalResultResponse200FromJSON(json: any): GetGoalResultResponse200 {
    return GetGoalResultResponse200FromJSONTyped(json, false);
}

export function GetGoalResultResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetGoalResultResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetGoalResultResponse200DataFromJSON(json['data']),
    };
}

export function GetGoalResultResponse200ToJSON(value?: GetGoalResultResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetGoalResultResponse200DataToJSON(value.data),
    };
}
