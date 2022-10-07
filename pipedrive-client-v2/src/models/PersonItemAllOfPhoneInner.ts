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
 * @interface PersonItemAllOfPhoneInner
 */
export interface PersonItemAllOfPhoneInner {
    /**
     * The phone number
     * @type {string}
     * @memberof PersonItemAllOfPhoneInner
     */
    value?: string;
    /**
     * Boolean that indicates if phone number is primary for the person or not
     * @type {boolean}
     * @memberof PersonItemAllOfPhoneInner
     */
    primary?: boolean;
    /**
     * The label that indicates the type of the phone number. (Possible values - work, home, mobile or other)
     * @type {string}
     * @memberof PersonItemAllOfPhoneInner
     */
    label?: string;
}

/**
 * Check if a given object implements the PersonItemAllOfPhoneInner interface.
 */
export function instanceOfPersonItemAllOfPhoneInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonItemAllOfPhoneInnerFromJSON(json: any): PersonItemAllOfPhoneInner {
    return PersonItemAllOfPhoneInnerFromJSONTyped(json, false);
}

export function PersonItemAllOfPhoneInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonItemAllOfPhoneInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function PersonItemAllOfPhoneInnerToJSON(value?: PersonItemAllOfPhoneInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'primary': value.primary,
        'label': value.label,
    };
}

