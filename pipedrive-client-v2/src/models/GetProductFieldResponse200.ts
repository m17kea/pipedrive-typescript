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
import type { GetProductFieldResponse200Data } from './GetProductFieldResponse200Data';
import {
    GetProductFieldResponse200DataFromJSON,
    GetProductFieldResponse200DataFromJSONTyped,
    GetProductFieldResponse200DataToJSON,
} from './GetProductFieldResponse200Data';

/**
 * 
 * @export
 * @interface GetProductFieldResponse200
 */
export interface GetProductFieldResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetProductFieldResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetProductFieldResponse200Data}
     * @memberof GetProductFieldResponse200
     */
    data?: GetProductFieldResponse200Data;
}

/**
 * Check if a given object implements the GetProductFieldResponse200 interface.
 */
export function instanceOfGetProductFieldResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetProductFieldResponse200FromJSON(json: any): GetProductFieldResponse200 {
    return GetProductFieldResponse200FromJSONTyped(json, false);
}

export function GetProductFieldResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProductFieldResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetProductFieldResponse200DataFromJSON(json['data']),
    };
}

export function GetProductFieldResponse200ToJSON(value?: GetProductFieldResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetProductFieldResponse200DataToJSON(value.data),
    };
}
