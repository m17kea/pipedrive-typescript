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
import type { GetLeadsResponse200DataInner } from './GetLeadsResponse200DataInner';
import {
    GetLeadsResponse200DataInnerFromJSON,
    GetLeadsResponse200DataInnerFromJSONTyped,
    GetLeadsResponse200DataInnerToJSON,
} from './GetLeadsResponse200DataInner';

/**
 * 
 * @export
 * @interface OneLeadResponse200
 */
export interface OneLeadResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof OneLeadResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetLeadsResponse200DataInner}
     * @memberof OneLeadResponse200
     */
    data?: GetLeadsResponse200DataInner;
}

/**
 * Check if a given object implements the OneLeadResponse200 interface.
 */
export function instanceOfOneLeadResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OneLeadResponse200FromJSON(json: any): OneLeadResponse200 {
    return OneLeadResponse200FromJSONTyped(json, false);
}

export function OneLeadResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): OneLeadResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetLeadsResponse200DataInnerFromJSON(json['data']),
    };
}

export function OneLeadResponse200ToJSON(value?: OneLeadResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetLeadsResponse200DataInnerToJSON(value.data),
    };
}

