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
 * @interface DeleteFilterResponse200AllOfData
 */
export interface DeleteFilterResponse200AllOfData {
    /**
     * The ID of the deleted filter
     * @type {number}
     * @memberof DeleteFilterResponse200AllOfData
     */
    id?: number;
}

/**
 * Check if a given object implements the DeleteFilterResponse200AllOfData interface.
 */
export function instanceOfDeleteFilterResponse200AllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteFilterResponse200AllOfDataFromJSON(json: any): DeleteFilterResponse200AllOfData {
    return DeleteFilterResponse200AllOfDataFromJSONTyped(json, false);
}

export function DeleteFilterResponse200AllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFilterResponse200AllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function DeleteFilterResponse200AllOfDataToJSON(value?: DeleteFilterResponse200AllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

