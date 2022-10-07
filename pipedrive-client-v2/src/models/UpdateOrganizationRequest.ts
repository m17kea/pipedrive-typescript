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
 * @interface UpdateOrganizationRequest
 */
export interface UpdateOrganizationRequest {
    /**
     * The name of the organization
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    name?: string;
    /**
     * The ID of the user who will be marked as the owner of this organization. When omitted, the authorized user ID will be used.
     * @type {number}
     * @memberof UpdateOrganizationRequest
     */
    owner_id?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    visible_to?: UpdateOrganizationRequestVisibleToEnum;
}

/**
* @export
* @enum {string}
*/
export enum UpdateOrganizationRequestVisibleToEnum {
    _1 = '1',
    _3 = '3',
    _5 = '5',
    _7 = '7'
}


/**
 * Check if a given object implements the UpdateOrganizationRequest interface.
 */
export function instanceOfUpdateOrganizationRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateOrganizationRequestFromJSON(json: any): UpdateOrganizationRequest {
    return UpdateOrganizationRequestFromJSONTyped(json, false);
}

export function UpdateOrganizationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrganizationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner_id': !exists(json, 'owner_id') ? undefined : json['owner_id'],
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
    };
}

export function UpdateOrganizationRequestToJSON(value?: UpdateOrganizationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'owner_id': value.owner_id,
        'visible_to': value.visible_to,
    };
}

