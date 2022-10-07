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
import type { AddOrUpdateGoalResponse200Data } from './AddOrUpdateGoalResponse200Data';
import {
    AddOrUpdateGoalResponse200DataFromJSON,
    AddOrUpdateGoalResponse200DataFromJSONTyped,
    AddOrUpdateGoalResponse200DataToJSON,
} from './AddOrUpdateGoalResponse200Data';

/**
 * 
 * @export
 * @interface AddOrUpdateGoalResponse200
 */
export interface AddOrUpdateGoalResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof AddOrUpdateGoalResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {AddOrUpdateGoalResponse200Data}
     * @memberof AddOrUpdateGoalResponse200
     */
    data?: AddOrUpdateGoalResponse200Data;
}

/**
 * Check if a given object implements the AddOrUpdateGoalResponse200 interface.
 */
export function instanceOfAddOrUpdateGoalResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddOrUpdateGoalResponse200FromJSON(json: any): AddOrUpdateGoalResponse200 {
    return AddOrUpdateGoalResponse200FromJSONTyped(json, false);
}

export function AddOrUpdateGoalResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrUpdateGoalResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : AddOrUpdateGoalResponse200DataFromJSON(json['data']),
    };
}

export function AddOrUpdateGoalResponse200ToJSON(value?: AddOrUpdateGoalResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': AddOrUpdateGoalResponse200DataToJSON(value.data),
    };
}

