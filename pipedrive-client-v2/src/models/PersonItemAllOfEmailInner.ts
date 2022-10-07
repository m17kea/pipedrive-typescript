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
 * @interface PersonItemAllOfEmailInner
 */
export interface PersonItemAllOfEmailInner {
    /**
     * Email
     * @type {string}
     * @memberof PersonItemAllOfEmailInner
     */
    value?: string;
    /**
     * Boolean that indicates if email is primary for the person or not
     * @type {boolean}
     * @memberof PersonItemAllOfEmailInner
     */
    primary?: boolean;
    /**
     * The label that indicates the type of the email. (Possible values - work, home or other)
     * @type {string}
     * @memberof PersonItemAllOfEmailInner
     */
    label?: string;
}

/**
 * Check if a given object implements the PersonItemAllOfEmailInner interface.
 */
export function instanceOfPersonItemAllOfEmailInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonItemAllOfEmailInnerFromJSON(json: any): PersonItemAllOfEmailInner {
    return PersonItemAllOfEmailInnerFromJSONTyped(json, false);
}

export function PersonItemAllOfEmailInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonItemAllOfEmailInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function PersonItemAllOfEmailInnerToJSON(value?: PersonItemAllOfEmailInner | null): any {
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
