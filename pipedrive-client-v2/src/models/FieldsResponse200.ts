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
import type { FieldsResponse200AllOfDataInner } from './FieldsResponse200AllOfDataInner';
import {
    FieldsResponse200AllOfDataInnerFromJSON,
    FieldsResponse200AllOfDataInnerFromJSONTyped,
    FieldsResponse200AllOfDataInnerToJSON,
} from './FieldsResponse200AllOfDataInner';

/**
 * 
 * @export
 * @interface FieldsResponse200
 */
export interface FieldsResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof FieldsResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {Array<FieldsResponse200AllOfDataInner>}
     * @memberof FieldsResponse200
     */
    data?: Array<FieldsResponse200AllOfDataInner>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof FieldsResponse200
     */
    additional_data?: FieldsResponse200AllOfAdditionalData;
}

/**
 * Check if a given object implements the FieldsResponse200 interface.
 */
export function instanceOfFieldsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FieldsResponse200FromJSON(json: any): FieldsResponse200 {
    return FieldsResponse200FromJSONTyped(json, false);
}

export function FieldsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(FieldsResponse200AllOfDataInnerFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : FieldsResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
    };
}

export function FieldsResponse200ToJSON(value?: FieldsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(FieldsResponse200AllOfDataInnerToJSON)),
        'additional_data': FieldsResponse200AllOfAdditionalDataToJSON(value.additional_data),
    };
}
