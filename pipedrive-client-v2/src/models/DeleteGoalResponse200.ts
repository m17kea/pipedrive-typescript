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
/**
 * 
 * @export
 * @interface DeleteGoalResponse200
 */
export interface DeleteGoalResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof DeleteGoalResponse200
     */
    success?: boolean;
}

/**
 * Check if a given object implements the DeleteGoalResponse200 interface.
 */
export function instanceOfDeleteGoalResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteGoalResponse200FromJSON(json: any): DeleteGoalResponse200 {
    return DeleteGoalResponse200FromJSONTyped(json, false);
}

export function DeleteGoalResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteGoalResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function DeleteGoalResponse200ToJSON(value?: DeleteGoalResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}

