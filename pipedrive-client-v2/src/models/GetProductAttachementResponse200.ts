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
import type { GetProductAttachementResponse200Data } from './GetProductAttachementResponse200Data';
import {
    GetProductAttachementResponse200DataFromJSON,
    GetProductAttachementResponse200DataFromJSONTyped,
    GetProductAttachementResponse200DataToJSON,
} from './GetProductAttachementResponse200Data';

/**
 * 
 * @export
 * @interface GetProductAttachementResponse200
 */
export interface GetProductAttachementResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetProductAttachementResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetProductAttachementResponse200Data}
     * @memberof GetProductAttachementResponse200
     */
    data?: GetProductAttachementResponse200Data;
}

/**
 * Check if a given object implements the GetProductAttachementResponse200 interface.
 */
export function instanceOfGetProductAttachementResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetProductAttachementResponse200FromJSON(json: any): GetProductAttachementResponse200 {
    return GetProductAttachementResponse200FromJSONTyped(json, false);
}

export function GetProductAttachementResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProductAttachementResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetProductAttachementResponse200DataFromJSON(json['data']),
    };
}

export function GetProductAttachementResponse200ToJSON(value?: GetProductAttachementResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetProductAttachementResponse200DataToJSON(value.data),
    };
}
