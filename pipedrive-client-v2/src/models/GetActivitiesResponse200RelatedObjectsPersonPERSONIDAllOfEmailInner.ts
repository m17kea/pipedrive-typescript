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
 * @interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner
 */
export interface GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner {
    /**
     * The type of the email
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner
     */
    label?: string;
    /**
     * The email of the associated person
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner
     */
    value?: string;
    /**
     * Whether this is the primary email or not
     * @type {boolean}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner
     */
    primary?: boolean;
}

/**
 * Check if a given object implements the GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner interface.
 */
export function instanceOfGetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerFromJSON(json: any): GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner {
    return GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerFromJSONTyped(json, false);
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
    };
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerToJSON(value?: GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner | null): any {
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
