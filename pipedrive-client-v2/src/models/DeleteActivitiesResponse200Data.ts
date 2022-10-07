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
 * @interface DeleteActivitiesResponse200Data
 */
export interface DeleteActivitiesResponse200Data {
    /**
     * An array of the IDs of activities that were deleted
     * @type {Array<number>}
     * @memberof DeleteActivitiesResponse200Data
     */
    id?: Array<number>;
}

/**
 * Check if a given object implements the DeleteActivitiesResponse200Data interface.
 */
export function instanceOfDeleteActivitiesResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteActivitiesResponse200DataFromJSON(json: any): DeleteActivitiesResponse200Data {
    return DeleteActivitiesResponse200DataFromJSONTyped(json, false);
}

export function DeleteActivitiesResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteActivitiesResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function DeleteActivitiesResponse200DataToJSON(value?: DeleteActivitiesResponse200Data | null): any {
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
