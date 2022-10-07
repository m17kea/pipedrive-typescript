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
import type { GetCommentsResponse200DataInner } from './GetCommentsResponse200DataInner';
import {
    GetCommentsResponse200DataInnerFromJSON,
    GetCommentsResponse200DataInnerFromJSONTyped,
    GetCommentsResponse200DataInnerToJSON,
} from './GetCommentsResponse200DataInner';
import type { GetNotesResponse200AdditionalData } from './GetNotesResponse200AdditionalData';
import {
    GetNotesResponse200AdditionalDataFromJSON,
    GetNotesResponse200AdditionalDataFromJSONTyped,
    GetNotesResponse200AdditionalDataToJSON,
} from './GetNotesResponse200AdditionalData';

/**
 * 
 * @export
 * @interface GetCommentsResponse200
 */
export interface GetCommentsResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetCommentsResponse200
     */
    success?: boolean;
    /**
     * The array of comments
     * @type {Array<GetCommentsResponse200DataInner>}
     * @memberof GetCommentsResponse200
     */
    data?: Array<GetCommentsResponse200DataInner>;
    /**
     * 
     * @type {GetNotesResponse200AdditionalData}
     * @memberof GetCommentsResponse200
     */
    additional_data?: GetNotesResponse200AdditionalData;
}

/**
 * Check if a given object implements the GetCommentsResponse200 interface.
 */
export function instanceOfGetCommentsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCommentsResponse200FromJSON(json: any): GetCommentsResponse200 {
    return GetCommentsResponse200FromJSONTyped(json, false);
}

export function GetCommentsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCommentsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetCommentsResponse200DataInnerFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetNotesResponse200AdditionalDataFromJSON(json['additional_data']),
    };
}

export function GetCommentsResponse200ToJSON(value?: GetCommentsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetCommentsResponse200DataInnerToJSON)),
        'additional_data': GetNotesResponse200AdditionalDataToJSON(value.additional_data),
    };
}
