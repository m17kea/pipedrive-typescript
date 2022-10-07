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
import type { DeleteFieldResponse200AllOfData } from './DeleteFieldResponse200AllOfData';
import {
    DeleteFieldResponse200AllOfDataFromJSON,
    DeleteFieldResponse200AllOfDataFromJSONTyped,
    DeleteFieldResponse200AllOfDataToJSON,
} from './DeleteFieldResponse200AllOfData';

/**
 * 
 * @export
 * @interface DeleteFieldResponse200AllOf
 */
export interface DeleteFieldResponse200AllOf {
    /**
     * 
     * @type {DeleteFieldResponse200AllOfData}
     * @memberof DeleteFieldResponse200AllOf
     */
    data?: DeleteFieldResponse200AllOfData;
}

/**
 * Check if a given object implements the DeleteFieldResponse200AllOf interface.
 */
export function instanceOfDeleteFieldResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteFieldResponse200AllOfFromJSON(json: any): DeleteFieldResponse200AllOf {
    return DeleteFieldResponse200AllOfFromJSONTyped(json, false);
}

export function DeleteFieldResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFieldResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : DeleteFieldResponse200AllOfDataFromJSON(json['data']),
    };
}

export function DeleteFieldResponse200AllOfToJSON(value?: DeleteFieldResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': DeleteFieldResponse200AllOfDataToJSON(value.data),
    };
}

