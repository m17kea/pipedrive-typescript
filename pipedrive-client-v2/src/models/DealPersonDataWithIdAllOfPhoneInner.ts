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
 * @interface DealPersonDataWithIdAllOfPhoneInner
 */
export interface DealPersonDataWithIdAllOfPhoneInner {
    /**
     * The type of the phone number
     * @type {string}
     * @memberof DealPersonDataWithIdAllOfPhoneInner
     */
    label?: string;
    /**
     * The phone number of the person associated with the deal
     * @type {string}
     * @memberof DealPersonDataWithIdAllOfPhoneInner
     */
    value?: string;
    /**
     * If this is the primary phone number or not
     * @type {boolean}
     * @memberof DealPersonDataWithIdAllOfPhoneInner
     */
    primary?: boolean;
}

/**
 * Check if a given object implements the DealPersonDataWithIdAllOfPhoneInner interface.
 */
export function instanceOfDealPersonDataWithIdAllOfPhoneInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealPersonDataWithIdAllOfPhoneInnerFromJSON(json: any): DealPersonDataWithIdAllOfPhoneInner {
    return DealPersonDataWithIdAllOfPhoneInnerFromJSONTyped(json, false);
}

export function DealPersonDataWithIdAllOfPhoneInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DealPersonDataWithIdAllOfPhoneInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
    };
}

export function DealPersonDataWithIdAllOfPhoneInnerToJSON(value?: DealPersonDataWithIdAllOfPhoneInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value': value.value,
        'primary': value.primary,
    };
}

