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
 * @interface UpdateFileResponse200
 */
export interface UpdateFileResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof UpdateFileResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetFilesResponse200DataInner}
     * @memberof UpdateFileResponse200
     */
    data?: GetFilesResponse200DataInner;
}

/**
 * Check if a given object implements the UpdateFileResponse200 interface.
 */
export function instanceOfUpdateFileResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFileResponse200FromJSON(json: any): UpdateFileResponse200 {
    return UpdateFileResponse200FromJSONTyped(json, false);
}

export function UpdateFileResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFileResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetFilesResponse200DataInnerFromJSON(json['data']),
    };
}

export function UpdateFileResponse200ToJSON(value?: UpdateFileResponse200 | null): any {
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
