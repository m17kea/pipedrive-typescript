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
import type { GetRoleResponse200AllOfAdditionalData } from './GetRoleResponse200AllOfAdditionalData';
import {
    GetRoleResponse200AllOfAdditionalDataFromJSON,
    GetRoleResponse200AllOfAdditionalDataFromJSONTyped,
    GetRoleResponse200AllOfAdditionalDataToJSON,
} from './GetRoleResponse200AllOfAdditionalData';
import type { SubRole } from './SubRole';
import {
    SubRoleFromJSON,
    SubRoleFromJSONTyped,
    SubRoleToJSON,
} from './SubRole';

/**
 * 
 * @export
 * @interface GetRoleResponse200
 */
export interface GetRoleResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetRoleResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {SubRole}
     * @memberof GetRoleResponse200
     */
    data?: SubRole;
    /**
     * 
     * @type {GetRoleResponse200AllOfAdditionalData}
     * @memberof GetRoleResponse200
     */
    additional_data?: GetRoleResponse200AllOfAdditionalData;
}

/**
 * Check if a given object implements the GetRoleResponse200 interface.
 */
export function instanceOfGetRoleResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRoleResponse200FromJSON(json: any): GetRoleResponse200 {
    return GetRoleResponse200FromJSONTyped(json, false);
}

export function GetRoleResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRoleResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : SubRoleFromJSON(json['data']),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetRoleResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
    };
}

export function GetRoleResponse200ToJSON(value?: GetRoleResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': SubRoleToJSON(value.data),
        'additional_data': GetRoleResponse200AllOfAdditionalDataToJSON(value.additional_data),
    };
}

