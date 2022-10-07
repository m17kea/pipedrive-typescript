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
import type { GetLeadLabelsResponse200DataInner } from './GetLeadLabelsResponse200DataInner';
import {
    GetLeadLabelsResponse200DataInnerFromJSON,
    GetLeadLabelsResponse200DataInnerFromJSONTyped,
    GetLeadLabelsResponse200DataInnerToJSON,
} from './GetLeadLabelsResponse200DataInner';

/**
 * 
 * @export
 * @interface AddOrUpdateLeadLabelResponse200
 */
export interface AddOrUpdateLeadLabelResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof AddOrUpdateLeadLabelResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetLeadLabelsResponse200DataInner}
     * @memberof AddOrUpdateLeadLabelResponse200
     */
    data?: GetLeadLabelsResponse200DataInner;
}

/**
 * Check if a given object implements the AddOrUpdateLeadLabelResponse200 interface.
 */
export function instanceOfAddOrUpdateLeadLabelResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddOrUpdateLeadLabelResponse200FromJSON(json: any): AddOrUpdateLeadLabelResponse200 {
    return AddOrUpdateLeadLabelResponse200FromJSONTyped(json, false);
}

export function AddOrUpdateLeadLabelResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrUpdateLeadLabelResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetLeadLabelsResponse200DataInnerFromJSON(json['data']),
    };
}

export function AddOrUpdateLeadLabelResponse200ToJSON(value?: AddOrUpdateLeadLabelResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetLeadLabelsResponse200DataInnerToJSON(value.data),
    };
}
