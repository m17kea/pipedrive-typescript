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
import type { NewFollowerResponse200Data } from './NewFollowerResponse200Data';
import {
    NewFollowerResponse200DataFromJSON,
    NewFollowerResponse200DataFromJSONTyped,
    NewFollowerResponse200DataToJSON,
} from './NewFollowerResponse200Data';

/**
 * 
 * @export
 * @interface NewFollowerResponse200
 */
export interface NewFollowerResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof NewFollowerResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {NewFollowerResponse200Data}
     * @memberof NewFollowerResponse200
     */
    data?: NewFollowerResponse200Data;
}

/**
 * Check if a given object implements the NewFollowerResponse200 interface.
 */
export function instanceOfNewFollowerResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewFollowerResponse200FromJSON(json: any): NewFollowerResponse200 {
    return NewFollowerResponse200FromJSONTyped(json, false);
}

export function NewFollowerResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): NewFollowerResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : NewFollowerResponse200DataFromJSON(json['data']),
    };
}

export function NewFollowerResponse200ToJSON(value?: NewFollowerResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': NewFollowerResponse200DataToJSON(value.data),
    };
}
