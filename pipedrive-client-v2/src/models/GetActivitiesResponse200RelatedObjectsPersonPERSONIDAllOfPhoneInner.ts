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
 * @interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
 */
export interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner {
    /**
     * The type of the phone number
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
     */
    label?: string;
    /**
     * The phone number of the person associated with the item
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
     */
    value?: string;
    /**
     * Whether this is the primary phone number or not
     * @type {boolean}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner
     */
    primary?: boolean;
}

/**
 * Check if a given object implements the GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner interface.
 */
export function instanceOfGetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerFromJSON(json: any): GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner {
    return GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerFromJSONTyped(json, false);
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
    };
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerToJSON(value?: GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner | null): any {
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

