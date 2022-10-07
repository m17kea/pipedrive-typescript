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
 * @interface AddOrUpdateGoalResponse200Data
 */
export interface AddOrUpdateGoalResponse200Data {
    /**
     * 
     * @type {AddOrUpdateGoalResponse200DataGoal}
     * @memberof AddOrUpdateGoalResponse200Data
     */
    goal?: AddOrUpdateGoalResponse200DataGoal;
}

/**
 * Check if a given object implements the AddOrUpdateGoalResponse200Data interface.
 */
export function instanceOfAddOrUpdateGoalResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddOrUpdateGoalResponse200DataFromJSON(json: any): AddOrUpdateGoalResponse200Data {
    return AddOrUpdateGoalResponse200DataFromJSONTyped(json, false);
}

export function AddOrUpdateGoalResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrUpdateGoalResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'goal': !exists(json, 'goal') ? undefined : AddOrUpdateGoalResponse200DataGoalFromJSON(json['goal']),
    };
}

export function AddOrUpdateGoalResponse200DataToJSON(value?: AddOrUpdateGoalResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'goal': AddOrUpdateGoalResponse200DataGoalToJSON(value.goal),
    };
}

