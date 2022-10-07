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
 * The details of the role
 * @export
 * @interface BaseRoleRequest
 */
export interface BaseRoleRequest {
    /**
     * The ID of the parent role
     * @type {number}
     * @memberof BaseRoleRequest
     */
    parent_role_id?: number;
    /**
     * The name of the role
     * @type {string}
     * @memberof BaseRoleRequest
     */
    name?: string;
}

/**
 * Check if a given object implements the BaseRoleRequest interface.
 */
export function instanceOfBaseRoleRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaseRoleRequestFromJSON(json: any): BaseRoleRequest {
    return BaseRoleRequestFromJSONTyped(json, false);
}

export function BaseRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseRoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parent_role_id': !exists(json, 'parent_role_id') ? undefined : json['parent_role_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BaseRoleRequestToJSON(value?: BaseRoleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent_role_id': value.parent_role_id,
        'name': value.name,
    };
}

