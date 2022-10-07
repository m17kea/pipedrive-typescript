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
import type { DeleteFilterResponse200AllOfData } from './DeleteFilterResponse200AllOfData';
import {
    DeleteFilterResponse200AllOfDataFromJSON,
    DeleteFilterResponse200AllOfDataFromJSONTyped,
    DeleteFilterResponse200AllOfDataToJSON,
} from './DeleteFilterResponse200AllOfData';

/**
 * 
 * @export
 * @interface DeleteFilterResponse200
 */
export interface DeleteFilterResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof DeleteFilterResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DeleteFilterResponse200AllOfData}
     * @memberof DeleteFilterResponse200
     */
    data?: DeleteFilterResponse200AllOfData;
}

/**
 * Check if a given object implements the DeleteFilterResponse200 interface.
 */
export function instanceOfDeleteFilterResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteFilterResponse200FromJSON(json: any): DeleteFilterResponse200 {
    return DeleteFilterResponse200FromJSONTyped(json, false);
}

export function DeleteFilterResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFilterResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DeleteFilterResponse200AllOfDataFromJSON(json['data']),
    };
}

export function DeleteFilterResponse200ToJSON(value?: DeleteFilterResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DeleteFilterResponse200AllOfDataToJSON(value.data),
    };
}

