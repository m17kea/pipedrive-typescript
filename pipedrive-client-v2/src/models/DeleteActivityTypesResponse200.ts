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
import type { DeleteActivityTypesResponse200AllOfData } from './DeleteActivityTypesResponse200AllOfData';
import {
    DeleteActivityTypesResponse200AllOfDataFromJSON,
    DeleteActivityTypesResponse200AllOfDataFromJSONTyped,
    DeleteActivityTypesResponse200AllOfDataToJSON,
} from './DeleteActivityTypesResponse200AllOfData';

/**
 * 
 * @export
 * @interface DeleteActivityTypesResponse200
 */
export interface DeleteActivityTypesResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof DeleteActivityTypesResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DeleteActivityTypesResponse200AllOfData}
     * @memberof DeleteActivityTypesResponse200
     */
    data?: DeleteActivityTypesResponse200AllOfData;
}

/**
 * Check if a given object implements the DeleteActivityTypesResponse200 interface.
 */
export function instanceOfDeleteActivityTypesResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteActivityTypesResponse200FromJSON(json: any): DeleteActivityTypesResponse200 {
    return DeleteActivityTypesResponse200FromJSONTyped(json, false);
}

export function DeleteActivityTypesResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteActivityTypesResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DeleteActivityTypesResponse200AllOfDataFromJSON(json['data']),
    };
}

export function DeleteActivityTypesResponse200ToJSON(value?: DeleteActivityTypesResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DeleteActivityTypesResponse200AllOfDataToJSON(value.data),
    };
}
