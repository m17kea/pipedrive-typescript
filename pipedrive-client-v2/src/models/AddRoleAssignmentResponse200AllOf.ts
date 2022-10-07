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
import type { AddRoleAssignmentResponse200AllOfData } from './AddRoleAssignmentResponse200AllOfData';
import {
    AddRoleAssignmentResponse200AllOfDataFromJSON,
    AddRoleAssignmentResponse200AllOfDataFromJSONTyped,
    AddRoleAssignmentResponse200AllOfDataToJSON,
} from './AddRoleAssignmentResponse200AllOfData';

/**
 * 
 * @export
 * @interface AddRoleAssignmentResponse200AllOf
 */
export interface AddRoleAssignmentResponse200AllOf {
    /**
     * 
     * @type {AddRoleAssignmentResponse200AllOfData}
     * @memberof AddRoleAssignmentResponse200AllOf
     */
    data?: AddRoleAssignmentResponse200AllOfData;
}

/**
 * Check if a given object implements the AddRoleAssignmentResponse200AllOf interface.
 */
export function instanceOfAddRoleAssignmentResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddRoleAssignmentResponse200AllOfFromJSON(json: any): AddRoleAssignmentResponse200AllOf {
    return AddRoleAssignmentResponse200AllOfFromJSONTyped(json, false);
}

export function AddRoleAssignmentResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRoleAssignmentResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AddRoleAssignmentResponse200AllOfDataFromJSON(json['data']),
    };
}

export function AddRoleAssignmentResponse200AllOfToJSON(value?: AddRoleAssignmentResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AddRoleAssignmentResponse200AllOfDataToJSON(value.data),
    };
}
