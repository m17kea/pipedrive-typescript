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
import type { FieldsResponse200AllOfAdditionalData } from './FieldsResponse200AllOfAdditionalData';
import {
    FieldsResponse200AllOfAdditionalDataFromJSON,
    FieldsResponse200AllOfAdditionalDataFromJSONTyped,
    FieldsResponse200AllOfAdditionalDataToJSON,
} from './FieldsResponse200AllOfAdditionalData';
import type { GetAssociatedFilesResponse200AllOfDataInner } from './GetAssociatedFilesResponse200AllOfDataInner';
import {
    GetAssociatedFilesResponse200AllOfDataInnerFromJSON,
    GetAssociatedFilesResponse200AllOfDataInnerFromJSONTyped,
    GetAssociatedFilesResponse200AllOfDataInnerToJSON,
} from './GetAssociatedFilesResponse200AllOfDataInner';

/**
 * 
 * @export
 * @interface GetAssociatedFilesResponse200
 */
export interface GetAssociatedFilesResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetAssociatedFilesResponse200
     */
    success?: boolean;
    /**
     * The array of files
     * @type {Array<GetAssociatedFilesResponse200AllOfDataInner>}
     * @memberof GetAssociatedFilesResponse200
     */
    data?: Array<GetAssociatedFilesResponse200AllOfDataInner>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof GetAssociatedFilesResponse200
     */
    additional_data?: FieldsResponse200AllOfAdditionalData;
}

/**
 * Check if a given object implements the GetAssociatedFilesResponse200 interface.
 */
export function instanceOfGetAssociatedFilesResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAssociatedFilesResponse200FromJSON(json: any): GetAssociatedFilesResponse200 {
    return GetAssociatedFilesResponse200FromJSONTyped(json, false);
}

export function GetAssociatedFilesResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAssociatedFilesResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetAssociatedFilesResponse200AllOfDataInnerFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : FieldsResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
    };
}

export function GetAssociatedFilesResponse200ToJSON(value?: GetAssociatedFilesResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetAssociatedFilesResponse200AllOfDataInnerToJSON)),
        'additional_data': FieldsResponse200AllOfAdditionalDataToJSON(value.additional_data),
    };
}

