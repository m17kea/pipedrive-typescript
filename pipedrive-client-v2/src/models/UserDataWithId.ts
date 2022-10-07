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
 * @interface UserDataWithId
 */
export interface UserDataWithId {
    /**
     * The ID of the user
     * @type {number}
     * @memberof UserDataWithId
     */
    id?: number;
    /**
     * The name of the user
     * @type {string}
     * @memberof UserDataWithId
     */
    name?: string;
    /**
     * The email of the user
     * @type {string}
     * @memberof UserDataWithId
     */
    email?: string;
    /**
     * Whether the user has picture or not. 0 = No picture, 1 = Has picture.
     * @type {number}
     * @memberof UserDataWithId
     */
    has_pic?: number;
    /**
     * The user picture hash
     * @type {string}
     * @memberof UserDataWithId
     */
    pic_hash?: string | null;
    /**
     * Whether the user is active or not
     * @type {boolean}
     * @memberof UserDataWithId
     */
    active_flag?: boolean;
}

/**
 * Check if a given object implements the UserDataWithId interface.
 */
export function instanceOfUserDataWithId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserDataWithIdFromJSON(json: any): UserDataWithId {
    return UserDataWithIdFromJSONTyped(json, false);
}

export function UserDataWithIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDataWithId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'has_pic': !exists(json, 'has_pic') ? undefined : json['has_pic'],
        'pic_hash': !exists(json, 'pic_hash') ? undefined : json['pic_hash'],
        'active_flag': !exists(json, 'active_flag') ? undefined : json['active_flag'],
    };
}

export function UserDataWithIdToJSON(value?: UserDataWithId | null): any {
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
        'has_pic': value.has_pic,
        'pic_hash': value.pic_hash,
        'active_flag': value.active_flag,
    };
}
