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
/**
 * The total values of the deals grouped by deal currency
 * @export
 * @interface GetDealsSummaryResponse200DataValuesTotal
 */
export interface GetDealsSummaryResponse200DataValuesTotal {
    /**
     * The total value of deals in the deal currency group
     * @type {number}
     * @memberof GetDealsSummaryResponse200DataValuesTotal
     */
    value?: number;
    /**
     * The number of deals in the deal currency group
     * @type {number}
     * @memberof GetDealsSummaryResponse200DataValuesTotal
     */
    count?: number;
    /**
     * The total value of deals converted into the company default currency
     * @type {number}
     * @memberof GetDealsSummaryResponse200DataValuesTotal
     */
    value_converted?: number;
    /**
     * The total value of deals formatted with deal currency. E.g. €50
     * @type {string}
     * @memberof GetDealsSummaryResponse200DataValuesTotal
     */
    value_formatted?: string;
    /**
     * The value_converted formatted with deal currency. E.g. US$50.10
     * @type {string}
     * @memberof GetDealsSummaryResponse200DataValuesTotal
     */
    value_converted_formatted?: string;
}

/**
 * Check if a given object implements the GetDealsSummaryResponse200DataValuesTotal interface.
 */
export function instanceOfGetDealsSummaryResponse200DataValuesTotal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDealsSummaryResponse200DataValuesTotalFromJSON(json: any): GetDealsSummaryResponse200DataValuesTotal {
    return GetDealsSummaryResponse200DataValuesTotalFromJSONTyped(json, false);
}

export function GetDealsSummaryResponse200DataValuesTotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDealsSummaryResponse200DataValuesTotal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'value_converted': !exists(json, 'value_converted') ? undefined : json['value_converted'],
        'value_formatted': !exists(json, 'value_formatted') ? undefined : json['value_formatted'],
        'value_converted_formatted': !exists(json, 'value_converted_formatted') ? undefined : json['value_converted_formatted'],
    };
}

export function GetDealsSummaryResponse200DataValuesTotalToJSON(value?: GetDealsSummaryResponse200DataValuesTotal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'count': value.count,
        'value_converted': value.value_converted,
        'value_formatted': value.value_formatted,
        'value_converted_formatted': value.value_converted_formatted,
    };
}

