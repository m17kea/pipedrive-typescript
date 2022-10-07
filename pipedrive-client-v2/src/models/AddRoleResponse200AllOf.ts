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
import type { AddRoleResponse200AllOfData } from './AddRoleResponse200AllOfData';
import {
    AddRoleResponse200AllOfDataFromJSON,
    AddRoleResponse200AllOfDataFromJSONTyped,
    AddRoleResponse200AllOfDataToJSON,
} from './AddRoleResponse200AllOfData';

/**
 * 
 * @export
 * @interface AddRoleResponse200AllOf
 */
export interface AddRoleResponse200AllOf {
    /**
     * 
     * @type {AddRoleResponse200AllOfData}
     * @memberof AddRoleResponse200AllOf
     */
    data?: AddRoleResponse200AllOfData;
}

/**
 * Check if a given object implements the AddRoleResponse200AllOf interface.
 */
export function instanceOfAddRoleResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddRoleResponse200AllOfFromJSON(json: any): AddRoleResponse200AllOf {
    return AddRoleResponse200AllOfFromJSONTyped(json, false);
}

export function AddRoleResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRoleResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AddRoleResponse200AllOfDataFromJSON(json['data']),
    };
}

export function AddRoleResponse200AllOfToJSON(value?: AddRoleResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AddRoleResponse200AllOfDataToJSON(value.data),
    };
}

