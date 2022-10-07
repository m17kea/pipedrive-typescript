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
import type { MergePersonItem } from './MergePersonItem';
import {
    MergePersonItemFromJSON,
    MergePersonItemFromJSONTyped,
    MergePersonItemToJSON,
} from './MergePersonItem';

/**
 * 
 * @export
 * @interface MergePersonsResponse200
 */
export interface MergePersonsResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof MergePersonsResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {MergePersonItem}
     * @memberof MergePersonsResponse200
     */
    data?: MergePersonItem;
}

/**
 * Check if a given object implements the MergePersonsResponse200 interface.
 */
export function instanceOfMergePersonsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MergePersonsResponse200FromJSON(json: any): MergePersonsResponse200 {
    return MergePersonsResponse200FromJSONTyped(json, false);
}

export function MergePersonsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): MergePersonsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : MergePersonItemFromJSON(json['data']),
    };
}

export function MergePersonsResponse200ToJSON(value?: MergePersonsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': MergePersonItemToJSON(value.data),
    };
}

