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
 * The currency summary. This parameter is dynamic and changes according to `currency_id` value.
 * @export
 * @interface PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID
 */
export interface PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID {
    /**
     * Deals count per currency
     * @type {number}
     * @memberof PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID
     */
    count?: number;
    /**
     * Deals value per currency
     * @type {number}
     * @memberof PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID
     */
    value?: number;
}

/**
 * Check if a given object implements the PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID interface.
 */
export function instanceOfPipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDFromJSON(json: any): PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID {
    return PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDFromJSONTyped(json, false);
}

export function PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDToJSON(value?: PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'value': value.value,
    };
}
