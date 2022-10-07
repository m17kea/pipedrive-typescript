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
 * @interface FieldsResponse200AllOf
 */
export interface FieldsResponse200AllOf {
    /**
     * 
     * @type {Array<FieldsResponse200AllOfDataInner>}
     * @memberof FieldsResponse200AllOf
     */
    data?: Array<FieldsResponse200AllOfDataInner>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof FieldsResponse200AllOf
     */
    additional_data?: FieldsResponse200AllOfAdditionalData;
}

/**
 * Check if a given object implements the FieldsResponse200AllOf interface.
 */
export function instanceOfFieldsResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FieldsResponse200AllOfFromJSON(json: any): FieldsResponse200AllOf {
    return FieldsResponse200AllOfFromJSONTyped(json, false);
}

export function FieldsResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldsResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(FieldsResponse200AllOfDataInnerFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : FieldsResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
    };
}

export function FieldsResponse200AllOfToJSON(value?: FieldsResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(FieldsResponse200AllOfDataInnerToJSON)),
        'additional_data': FieldsResponse200AllOfAdditionalDataToJSON(value.additional_data),
    };
}
