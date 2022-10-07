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
 * @interface GetAssociatedFollowersResponse200AllOfDataInner
 */
export interface GetAssociatedFollowersResponse200AllOfDataInner {
    /**
     * The ID of the user
     * @type {number}
     * @memberof GetAssociatedFollowersResponse200AllOfDataInner
     */
    user_id?: number;
    /**
     * The ID of the user follower
     * @type {number}
     * @memberof GetAssociatedFollowersResponse200AllOfDataInner
     */
    id?: number;
    /**
     * The ID of the person
     * @type {number}
     * @memberof GetAssociatedFollowersResponse200AllOfDataInner
     */
    person_id?: number;
    /**
     * The date and time when the follower was added to the person
     * @type {string}
     * @memberof GetAssociatedFollowersResponse200AllOfDataInner
     */
    add_time?: string;
}

/**
 * Check if a given object implements the GetAssociatedFollowersResponse200AllOfDataInner interface.
 */
export function instanceOfGetAssociatedFollowersResponse200AllOfDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAssociatedFollowersResponse200AllOfDataInnerFromJSON(json: any): GetAssociatedFollowersResponse200AllOfDataInner {
    return GetAssociatedFollowersResponse200AllOfDataInnerFromJSONTyped(json, false);
}

export function GetAssociatedFollowersResponse200AllOfDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAssociatedFollowersResponse200AllOfDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'person_id': !exists(json, 'person_id') ? undefined : json['person_id'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
    };
}

export function GetAssociatedFollowersResponse200AllOfDataInnerToJSON(value?: GetAssociatedFollowersResponse200AllOfDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.user_id,
        'id': value.id,
        'person_id': value.person_id,
        'add_time': value.add_time,
    };
}

