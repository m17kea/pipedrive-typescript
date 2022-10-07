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
 * @interface MergePersonsRequest
 */
export interface MergePersonsRequest {
    /**
     * The ID of the person that will not be overwritten. This person’s data will be prioritized in case of conflict with the other person.
     * @type {number}
     * @memberof MergePersonsRequest
     */
    merge_with_id: number;
}

/**
 * Check if a given object implements the MergePersonsRequest interface.
 */
export function instanceOfMergePersonsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "merge_with_id" in value;

    return isInstance;
}

export function MergePersonsRequestFromJSON(json: any): MergePersonsRequest {
    return MergePersonsRequestFromJSONTyped(json, false);
}

export function MergePersonsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MergePersonsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merge_with_id': json['merge_with_id'],
    };
}

export function MergePersonsRequestToJSON(value?: MergePersonsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merge_with_id': value.merge_with_id,
    };
}

