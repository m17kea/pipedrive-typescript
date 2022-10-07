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
import type { DealStrict } from './DealStrict';
import {
    DealStrictFromJSON,
    DealStrictFromJSONTyped,
    DealStrictToJSON,
} from './DealStrict';
import type { FieldsResponse200AllOfAdditionalData } from './FieldsResponse200AllOfAdditionalData';
import {
    FieldsResponse200AllOfAdditionalDataFromJSON,
    FieldsResponse200AllOfAdditionalDataFromJSONTyped,
    FieldsResponse200AllOfAdditionalDataToJSON,
} from './FieldsResponse200AllOfAdditionalData';

/**
 * 
 * @export
 * @interface GetStageDealsResponse200
 */
export interface GetStageDealsResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetStageDealsResponse200
     */
    success?: boolean;
    /**
     * The array of deals
     * @type {Array<DealStrict>}
     * @memberof GetStageDealsResponse200
     */
    data?: Array<DealStrict>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof GetStageDealsResponse200
     */
    additional_data?: FieldsResponse200AllOfAdditionalData;
}

/**
 * Check if a given object implements the GetStageDealsResponse200 interface.
 */
export function instanceOfGetStageDealsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetStageDealsResponse200FromJSON(json: any): GetStageDealsResponse200 {
    return GetStageDealsResponse200FromJSONTyped(json, false);
}

export function GetStageDealsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStageDealsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(DealStrictFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : FieldsResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
    };
}

export function GetStageDealsResponse200ToJSON(value?: GetStageDealsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(DealStrictToJSON)),
        'additional_data': FieldsResponse200AllOfAdditionalDataToJSON(value.additional_data),
    };
}

