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
import type { DeleteFiltersResponse200AllOfData } from './DeleteFiltersResponse200AllOfData';
import {
    DeleteFiltersResponse200AllOfDataFromJSON,
    DeleteFiltersResponse200AllOfDataFromJSONTyped,
    DeleteFiltersResponse200AllOfDataToJSON,
} from './DeleteFiltersResponse200AllOfData';

/**
 * 
 * @export
 * @interface DeleteFiltersResponse200
 */
export interface DeleteFiltersResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof DeleteFiltersResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DeleteFiltersResponse200AllOfData}
     * @memberof DeleteFiltersResponse200
     */
    data?: DeleteFiltersResponse200AllOfData;
}

/**
 * Check if a given object implements the DeleteFiltersResponse200 interface.
 */
export function instanceOfDeleteFiltersResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteFiltersResponse200FromJSON(json: any): DeleteFiltersResponse200 {
    return DeleteFiltersResponse200FromJSONTyped(json, false);
}

export function DeleteFiltersResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFiltersResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DeleteFiltersResponse200AllOfDataFromJSON(json['data']),
    };
}

export function DeleteFiltersResponse200ToJSON(value?: DeleteFiltersResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DeleteFiltersResponse200AllOfDataToJSON(value.data),
    };
}

