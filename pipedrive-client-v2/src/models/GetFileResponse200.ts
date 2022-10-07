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
import type { GetFilesResponse200DataInner } from './GetFilesResponse200DataInner';
import {
    GetFilesResponse200DataInnerFromJSON,
    GetFilesResponse200DataInnerFromJSONTyped,
    GetFilesResponse200DataInnerToJSON,
} from './GetFilesResponse200DataInner';

/**
 * 
 * @export
 * @interface GetFileResponse200
 */
export interface GetFileResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetFileResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetFilesResponse200DataInner}
     * @memberof GetFileResponse200
     */
    data?: GetFilesResponse200DataInner;
}

/**
 * Check if a given object implements the GetFileResponse200 interface.
 */
export function instanceOfGetFileResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFileResponse200FromJSON(json: any): GetFileResponse200 {
    return GetFileResponse200FromJSONTyped(json, false);
}

export function GetFileResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFileResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetFilesResponse200DataInnerFromJSON(json['data']),
    };
}

export function GetFileResponse200ToJSON(value?: GetFileResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetFilesResponse200DataInnerToJSON(value.data),
    };
}
