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
 * @interface DealUserDataWithIdAllOf1
 */
export interface DealUserDataWithIdAllOf1 {
    /**
     * The ID of the user
     * @type {number}
     * @memberof DealUserDataWithIdAllOf1
     */
    value?: number;
}

/**
 * Check if a given object implements the DealUserDataWithIdAllOf1 interface.
 */
export function instanceOfDealUserDataWithIdAllOf1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealUserDataWithIdAllOf1FromJSON(json: any): DealUserDataWithIdAllOf1 {
    return DealUserDataWithIdAllOf1FromJSONTyped(json, false);
}

export function DealUserDataWithIdAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DealUserDataWithIdAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function DealUserDataWithIdAllOf1ToJSON(value?: DealUserDataWithIdAllOf1 | null): any {
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

