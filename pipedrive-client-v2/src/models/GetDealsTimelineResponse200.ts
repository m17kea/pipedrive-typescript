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
import type { GetDealsTimelineResponse200Data } from './GetDealsTimelineResponse200Data';
import {
    GetDealsTimelineResponse200DataFromJSON,
    GetDealsTimelineResponse200DataFromJSONTyped,
    GetDealsTimelineResponse200DataToJSON,
} from './GetDealsTimelineResponse200Data';

/**
 * 
 * @export
 * @interface GetDealsTimelineResponse200
 */
export interface GetDealsTimelineResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetDealsTimelineResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetDealsTimelineResponse200Data}
     * @memberof GetDealsTimelineResponse200
     */
    data?: GetDealsTimelineResponse200Data;
}

/**
 * Check if a given object implements the GetDealsTimelineResponse200 interface.
 */
export function instanceOfGetDealsTimelineResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDealsTimelineResponse200FromJSON(json: any): GetDealsTimelineResponse200 {
    return GetDealsTimelineResponse200FromJSONTyped(json, false);
}

export function GetDealsTimelineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDealsTimelineResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetDealsTimelineResponse200DataFromJSON(json['data']),
    };
}

export function GetDealsTimelineResponse200ToJSON(value?: GetDealsTimelineResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetDealsTimelineResponse200DataToJSON(value.data),
    };
}

