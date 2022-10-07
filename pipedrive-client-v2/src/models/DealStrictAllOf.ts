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
 * @interface DealStrictAllOf
 */
export interface DealStrictAllOf {
    /**
     * The ID of the deal
     * @type {number}
     * @memberof DealStrictAllOf
     */
    id?: number;
    /**
     * The ID of the deal creator
     * @type {number}
     * @memberof DealStrictAllOf
     */
    creator_user_id?: number;
    /**
     * The ID of the user
     * @type {number}
     * @memberof DealStrictAllOf
     */
    user_id?: number;
    /**
     * The ID of the person associated with the deal
     * @type {number}
     * @memberof DealStrictAllOf
     */
    person_id?: number;
    /**
     * The ID of the organization associated with the deal
     * @type {number}
     * @memberof DealStrictAllOf
     */
    org_id?: number;
}

/**
 * Check if a given object implements the DealStrictAllOf interface.
 */
export function instanceOfDealStrictAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealStrictAllOfFromJSON(json: any): DealStrictAllOf {
    return DealStrictAllOfFromJSONTyped(json, false);
}

export function DealStrictAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): DealStrictAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'creator_user_id': !exists(json, 'creator_user_id') ? undefined : json['creator_user_id'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'person_id': !exists(json, 'person_id') ? undefined : json['person_id'],
        'org_id': !exists(json, 'org_id') ? undefined : json['org_id'],
    };
}

export function DealStrictAllOfToJSON(value?: DealStrictAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'creator_user_id': value.creator_user_id,
        'user_id': value.user_id,
        'person_id': value.person_id,
        'org_id': value.org_id,
    };
}

