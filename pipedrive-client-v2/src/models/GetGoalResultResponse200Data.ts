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
import type { AddOrUpdateGoalResponse200DataGoal } from './AddOrUpdateGoalResponse200DataGoal';
import {
    AddOrUpdateGoalResponse200DataGoalFromJSON,
    AddOrUpdateGoalResponse200DataGoalFromJSONTyped,
    AddOrUpdateGoalResponse200DataGoalToJSON,
} from './AddOrUpdateGoalResponse200DataGoal';

/**
 * 
 * @export
 * @interface GetGoalResultResponse200Data
 */
export interface GetGoalResultResponse200Data {
    /**
     * The numeric progress of the goal
     * @type {number}
     * @memberof GetGoalResultResponse200Data
     */
    progress?: number;
    /**
     * 
     * @type {AddOrUpdateGoalResponse200DataGoal}
     * @memberof GetGoalResultResponse200Data
     */
    goal?: AddOrUpdateGoalResponse200DataGoal;
}

/**
 * Check if a given object implements the GetGoalResultResponse200Data interface.
 */
export function instanceOfGetGoalResultResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetGoalResultResponse200DataFromJSON(json: any): GetGoalResultResponse200Data {
    return GetGoalResultResponse200DataFromJSONTyped(json, false);
}

export function GetGoalResultResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetGoalResultResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'progress': !exists(json, 'progress') ? undefined : json['progress'],
        'goal': !exists(json, 'goal') ? undefined : AddOrUpdateGoalResponse200DataGoalFromJSON(json['goal']),
    };
}

export function GetGoalResultResponse200DataToJSON(value?: GetGoalResultResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'progress': value.progress,
        'goal': AddOrUpdateGoalResponse200DataGoalToJSON(value.goal),
    };
}
