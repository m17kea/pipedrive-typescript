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
 * @interface AddChannel400ResponseAdditionalData
 */
export interface AddChannel400ResponseAdditionalData {
    /**
     * An error code sent by the API
     * @type {string}
     * @memberof AddChannel400ResponseAdditionalData
     */
    code?: string;
}

/**
 * Check if a given object implements the AddChannel400ResponseAdditionalData interface.
 */
export function instanceOfAddChannel400ResponseAdditionalData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddChannel400ResponseAdditionalDataFromJSON(json: any): AddChannel400ResponseAdditionalData {
    return AddChannel400ResponseAdditionalDataFromJSONTyped(json, false);
}

export function AddChannel400ResponseAdditionalDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddChannel400ResponseAdditionalData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function AddChannel400ResponseAdditionalDataToJSON(value?: AddChannel400ResponseAdditionalData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
    };
}
