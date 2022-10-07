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
import type { GetFilesResponse200AdditionalData } from './GetFilesResponse200AdditionalData';
import {
    GetFilesResponse200AdditionalDataFromJSON,
    GetFilesResponse200AdditionalDataFromJSONTyped,
    GetFilesResponse200AdditionalDataToJSON,
} from './GetFilesResponse200AdditionalData';
import type { GetFilesResponse200DataInner } from './GetFilesResponse200DataInner';
import {
    GetFilesResponse200DataInnerFromJSON,
    GetFilesResponse200DataInnerFromJSONTyped,
    GetFilesResponse200DataInnerToJSON,
} from './GetFilesResponse200DataInner';

/**
 * 
 * @export
 * @interface GetFilesResponse200
 */
export interface GetFilesResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetFilesResponse200
     */
    success?: boolean;
    /**
     * The array of all uploaded files
     * @type {Array<GetFilesResponse200DataInner>}
     * @memberof GetFilesResponse200
     */
    data?: Array<GetFilesResponse200DataInner>;
    /**
     * 
     * @type {GetFilesResponse200AdditionalData}
     * @memberof GetFilesResponse200
     */
    additional_data?: GetFilesResponse200AdditionalData;
}

/**
 * Check if a given object implements the GetFilesResponse200 interface.
 */
export function instanceOfGetFilesResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFilesResponse200FromJSON(json: any): GetFilesResponse200 {
    return GetFilesResponse200FromJSONTyped(json, false);
}

export function GetFilesResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFilesResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetFilesResponse200DataInnerFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetFilesResponse200AdditionalDataFromJSON(json['additional_data']),
    };
}

export function GetFilesResponse200ToJSON(value?: GetFilesResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetFilesResponse200DataInnerToJSON)),
        'additional_data': GetFilesResponse200AdditionalDataToJSON(value.additional_data),
    };
}
