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
 * @interface ReceiveMessage400ResponseAdditionalData
 */
export interface ReceiveMessage400ResponseAdditionalData {
    /**
     * An error code sent by the API
     * @type {string}
     * @memberof ReceiveMessage400ResponseAdditionalData
     */
    code?: string;
}

/**
 * Check if a given object implements the ReceiveMessage400ResponseAdditionalData interface.
 */
export function instanceOfReceiveMessage400ResponseAdditionalData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReceiveMessage400ResponseAdditionalDataFromJSON(json: any): ReceiveMessage400ResponseAdditionalData {
    return ReceiveMessage400ResponseAdditionalDataFromJSONTyped(json, false);
}

export function ReceiveMessage400ResponseAdditionalDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiveMessage400ResponseAdditionalData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function ReceiveMessage400ResponseAdditionalDataToJSON(value?: ReceiveMessage400ResponseAdditionalData | null): any {
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
