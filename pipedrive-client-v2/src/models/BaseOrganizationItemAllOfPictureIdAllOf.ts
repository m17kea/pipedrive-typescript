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
 * @interface BaseOrganizationItemAllOfPictureIdAllOf
 */
export interface BaseOrganizationItemAllOfPictureIdAllOf {
    /**
     * The ID of the picture associated with the item
     * @type {number}
     * @memberof BaseOrganizationItemAllOfPictureIdAllOf
     */
    value?: number;
}

/**
 * Check if a given object implements the BaseOrganizationItemAllOfPictureIdAllOf interface.
 */
export function instanceOfBaseOrganizationItemAllOfPictureIdAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaseOrganizationItemAllOfPictureIdAllOfFromJSON(json: any): BaseOrganizationItemAllOfPictureIdAllOf {
    return BaseOrganizationItemAllOfPictureIdAllOfFromJSONTyped(json, false);
}

export function BaseOrganizationItemAllOfPictureIdAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseOrganizationItemAllOfPictureIdAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BaseOrganizationItemAllOfPictureIdAllOfToJSON(value?: BaseOrganizationItemAllOfPictureIdAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}

