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
import type { BaseMailThread } from './BaseMailThread';
import {
    BaseMailThreadFromJSON,
    BaseMailThreadFromJSONTyped,
    BaseMailThreadToJSON,
} from './BaseMailThread';

/**
 * 
 * @export
 * @interface GetMailThreadsResponse200
 */
export interface GetMailThreadsResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetMailThreadsResponse200
     */
    success?: boolean;
    /**
     * The array of mail threads
     * @type {Array<BaseMailThread>}
     * @memberof GetMailThreadsResponse200
     */
    data?: Array<BaseMailThread>;
}

/**
 * Check if a given object implements the GetMailThreadsResponse200 interface.
 */
export function instanceOfGetMailThreadsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetMailThreadsResponse200FromJSON(json: any): GetMailThreadsResponse200 {
    return GetMailThreadsResponse200FromJSONTyped(json, false);
}

export function GetMailThreadsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMailThreadsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BaseMailThreadFromJSON)),
    };
}

export function GetMailThreadsResponse200ToJSON(value?: GetMailThreadsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BaseMailThreadToJSON)),
    };
}

