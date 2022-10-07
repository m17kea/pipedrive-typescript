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
import type { ReceiveMessage400ResponseAdditionalData } from './ReceiveMessage400ResponseAdditionalData';
import {
    ReceiveMessage400ResponseAdditionalDataFromJSON,
    ReceiveMessage400ResponseAdditionalDataFromJSONTyped,
    ReceiveMessage400ResponseAdditionalDataToJSON,
} from './ReceiveMessage400ResponseAdditionalData';

/**
 * 
 * @export
 * @interface ReceiveMessage400Response
 */
export interface ReceiveMessage400Response {
    /**
     * 
     * @type {boolean}
     * @memberof ReceiveMessage400Response
     */
    success?: boolean;
    /**
     * The error description
     * @type {string}
     * @memberof ReceiveMessage400Response
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof ReceiveMessage400Response
     */
    error_info?: string;
    /**
     * 
     * @type {ReceiveMessage400ResponseAdditionalData}
     * @memberof ReceiveMessage400Response
     */
    additional_data?: ReceiveMessage400ResponseAdditionalData;
}

/**
 * Check if a given object implements the ReceiveMessage400Response interface.
 */
export function instanceOfReceiveMessage400Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReceiveMessage400ResponseFromJSON(json: any): ReceiveMessage400Response {
    return ReceiveMessage400ResponseFromJSONTyped(json, false);
}

export function ReceiveMessage400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiveMessage400Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'error_info': !exists(json, 'error_info') ? undefined : json['error_info'],
        'additional_data': !exists(json, 'additional_data') ? undefined : ReceiveMessage400ResponseAdditionalDataFromJSON(json['additional_data']),
    };
}

export function ReceiveMessage400ResponseToJSON(value?: ReceiveMessage400Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'error': value.error,
        'error_info': value.error_info,
        'additional_data': ReceiveMessage400ResponseAdditionalDataToJSON(value.additional_data),
    };
}

