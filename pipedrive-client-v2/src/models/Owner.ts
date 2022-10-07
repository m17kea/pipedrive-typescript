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
 * @interface Owner
 */
export interface Owner {
    /**
     * The ID of the user
     * @type {number}
     * @memberof Owner
     */
    id?: number;
    /**
     * The name of the user
     * @type {string}
     * @memberof Owner
     */
    name?: string;
    /**
     * The email of the user
     * @type {string}
     * @memberof Owner
     */
    email?: string;
    /**
     * Whether the user has picture or not. 0 = No picture, 1 = Has picture.
     * @type {number}
     * @memberof Owner
     */
    has_pic?: number;
    /**
     * The user picture hash
     * @type {string}
     * @memberof Owner
     */
    pic_hash?: string | null;
    /**
     * Whether the user is active or not
     * @type {boolean}
     * @memberof Owner
     */
    active_flag?: boolean;
    /**
     * The ID of the owner
     * @type {number}
     * @memberof Owner
     */
    value?: number;
}

/**
 * Check if a given object implements the Owner interface.
 */
export function instanceOfOwner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OwnerFromJSON(json: any): Owner {
    return OwnerFromJSONTyped(json, false);
}

export function OwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Owner {
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
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function OwnerToJSON(value?: Owner | null): any {
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
        'value': value.value,
    };
}
