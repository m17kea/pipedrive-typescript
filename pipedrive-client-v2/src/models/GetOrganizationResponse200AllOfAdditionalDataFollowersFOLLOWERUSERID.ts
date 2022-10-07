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
 * The user ID of the follower
 * @export
 * @interface GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID
 */
export interface GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID {
    /**
     * The ID of the follower associated with the item
     * @type {number}
     * @memberof GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID
     */
    id?: number;
    /**
     * The name of the follower
     * @type {string}
     * @memberof GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID
     */
    name?: string;
    /**
     * The email of the follower
     * @type {string}
     * @memberof GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID
     */
    email?: string;
    /**
     * The user ID of the follower
     * @type {number}
     * @memberof GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID
     */
    user_id?: number;
    /**
     * The follower picture hash
     * @type {string}
     * @memberof GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID
     */
    pic_hash?: string;
}

/**
 * Check if a given object implements the GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID interface.
 */
export function instanceOfGetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERIDFromJSON(json: any): GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID {
    return GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERIDFromJSONTyped(json, false);
}

export function GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'pic_hash': !exists(json, 'pic_hash') ? undefined : json['pic_hash'],
    };
}

export function GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERIDToJSON(value?: GetOrganizationResponse200AllOfAdditionalDataFollowersFOLLOWERUSERID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'email': value.email,
        'user_id': value.user_id,
        'pic_hash': value.pic_hash,
    };
}
