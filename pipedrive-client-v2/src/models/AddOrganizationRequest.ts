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
 * @interface AddOrganizationRequest
 */
export interface AddOrganizationRequest {
    /**
     * The name of the organization
     * @type {string}
     * @memberof AddOrganizationRequest
     */
    name: string;
    /**
     * The optional creation date & time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof AddOrganizationRequest
     */
    add_time?: string;
    /**
     * The ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used.
     * @type {number}
     * @memberof AddOrganizationRequest
     */
    owner_id?: number;
    /**
     * 
     * @type {string}
     * @memberof AddOrganizationRequest
     */
    visible_to?: AddOrganizationRequestVisibleToEnum;
}

/**
* @export
* @enum {string}
*/
export enum AddOrganizationRequestVisibleToEnum {
    _1 = '1',
    _3 = '3',
    _5 = '5',
    _7 = '7'
}


/**
 * Check if a given object implements the AddOrganizationRequest interface.
 */
export function instanceOfAddOrganizationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AddOrganizationRequestFromJSON(json: any): AddOrganizationRequest {
    return AddOrganizationRequestFromJSONTyped(json, false);
}

export function AddOrganizationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrganizationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
        'owner_id': !exists(json, 'owner_id') ? undefined : json['owner_id'],
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
    };
}

export function AddOrganizationRequestToJSON(value?: AddOrganizationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'add_time': value.add_time,
        'owner_id': value.owner_id,
        'visible_to': value.visible_to,
    };
}
