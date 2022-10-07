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
import type { GetAssociatedFollowersResponse2001DataInner } from './GetAssociatedFollowersResponse2001DataInner';
import {
    GetAssociatedFollowersResponse2001DataInnerFromJSON,
    GetAssociatedFollowersResponse2001DataInnerFromJSONTyped,
    GetAssociatedFollowersResponse2001DataInnerToJSON,
} from './GetAssociatedFollowersResponse2001DataInner';

/**
 * 
 * @export
 * @interface AddOrganizationFollowerResponse200
 */
export interface AddOrganizationFollowerResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof AddOrganizationFollowerResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetAssociatedFollowersResponse2001DataInner}
     * @memberof AddOrganizationFollowerResponse200
     */
    data?: GetAssociatedFollowersResponse2001DataInner;
}

/**
 * Check if a given object implements the AddOrganizationFollowerResponse200 interface.
 */
export function instanceOfAddOrganizationFollowerResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddOrganizationFollowerResponse200FromJSON(json: any): AddOrganizationFollowerResponse200 {
    return AddOrganizationFollowerResponse200FromJSONTyped(json, false);
}

export function AddOrganizationFollowerResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrganizationFollowerResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetAssociatedFollowersResponse2001DataInnerFromJSON(json['data']),
    };
}

export function AddOrganizationFollowerResponse200ToJSON(value?: AddOrganizationFollowerResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetAssociatedFollowersResponse2001DataInnerToJSON(value.data),
    };
}
