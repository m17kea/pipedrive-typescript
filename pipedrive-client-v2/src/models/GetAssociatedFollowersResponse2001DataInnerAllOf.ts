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
 * @interface GetAssociatedFollowersResponse2001DataInnerAllOf
 */
export interface GetAssociatedFollowersResponse2001DataInnerAllOf {
    /**
     * The ID of the organization
     * @type {number}
     * @memberof GetAssociatedFollowersResponse2001DataInnerAllOf
     */
    org_id?: number;
}

/**
 * Check if a given object implements the GetAssociatedFollowersResponse2001DataInnerAllOf interface.
 */
export function instanceOfGetAssociatedFollowersResponse2001DataInnerAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAssociatedFollowersResponse2001DataInnerAllOfFromJSON(json: any): GetAssociatedFollowersResponse2001DataInnerAllOf {
    return GetAssociatedFollowersResponse2001DataInnerAllOfFromJSONTyped(json, false);
}

export function GetAssociatedFollowersResponse2001DataInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAssociatedFollowersResponse2001DataInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'org_id': !exists(json, 'org_id') ? undefined : json['org_id'],
    };
}

export function GetAssociatedFollowersResponse2001DataInnerAllOfToJSON(value?: GetAssociatedFollowersResponse2001DataInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'org_id': value.org_id,
    };
}

