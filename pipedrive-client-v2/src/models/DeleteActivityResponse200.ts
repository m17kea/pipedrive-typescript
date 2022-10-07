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
import type { DeleteActivityResponse200Data } from './DeleteActivityResponse200Data';
import {
    DeleteActivityResponse200DataFromJSON,
    DeleteActivityResponse200DataFromJSONTyped,
    DeleteActivityResponse200DataToJSON,
} from './DeleteActivityResponse200Data';

/**
 * 
 * @export
 * @interface DeleteActivityResponse200
 */
export interface DeleteActivityResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteActivityResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DeleteActivityResponse200Data}
     * @memberof DeleteActivityResponse200
     */
    data?: DeleteActivityResponse200Data;
}

/**
 * Check if a given object implements the DeleteActivityResponse200 interface.
 */
export function instanceOfDeleteActivityResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteActivityResponse200FromJSON(json: any): DeleteActivityResponse200 {
    return DeleteActivityResponse200FromJSONTyped(json, false);
}

export function DeleteActivityResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteActivityResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DeleteActivityResponse200DataFromJSON(json['data']),
    };
}

export function DeleteActivityResponse200ToJSON(value?: DeleteActivityResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DeleteActivityResponse200DataToJSON(value.data),
    };
}
