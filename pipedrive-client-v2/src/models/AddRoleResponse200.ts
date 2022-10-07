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
 * @interface AddRoleResponse200
 */
export interface AddRoleResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof AddRoleResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {AddRoleResponse200AllOfData}
     * @memberof AddRoleResponse200
     */
    data?: AddRoleResponse200AllOfData;
}

/**
 * Check if a given object implements the AddRoleResponse200 interface.
 */
export function instanceOfAddRoleResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddRoleResponse200FromJSON(json: any): AddRoleResponse200 {
    return AddRoleResponse200FromJSONTyped(json, false);
}

export function AddRoleResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddRoleResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : AddRoleResponse200AllOfDataFromJSON(json['data']),
    };
}

export function AddRoleResponse200ToJSON(value?: AddRoleResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': AddRoleResponse200AllOfDataToJSON(value.data),
    };
}

