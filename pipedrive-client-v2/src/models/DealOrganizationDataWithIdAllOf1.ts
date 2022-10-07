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
 * @interface DealOrganizationDataWithIdAllOf1
 */
export interface DealOrganizationDataWithIdAllOf1 {
    /**
     * The ID of the organization associated with the deal
     * @type {number}
     * @memberof DealOrganizationDataWithIdAllOf1
     */
    value?: number;
}

/**
 * Check if a given object implements the DealOrganizationDataWithIdAllOf1 interface.
 */
export function instanceOfDealOrganizationDataWithIdAllOf1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealOrganizationDataWithIdAllOf1FromJSON(json: any): DealOrganizationDataWithIdAllOf1 {
    return DealOrganizationDataWithIdAllOf1FromJSONTyped(json, false);
}

export function DealOrganizationDataWithIdAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DealOrganizationDataWithIdAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function DealOrganizationDataWithIdAllOf1ToJSON(value?: DealOrganizationDataWithIdAllOf1 | null): any {
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

