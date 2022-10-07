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
import type { PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID } from './PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID';
import {
    PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDFromJSON,
    PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDFromJSONTyped,
    PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDToJSON,
} from './PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID';

/**
 * Full currency summaries
 * @export
 * @interface PipelineDetailsAllOfDealsSummaryPerCurrencyFull
 */
export interface PipelineDetailsAllOfDealsSummaryPerCurrencyFull {
    /**
     * 
     * @type {PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID}
     * @memberof PipelineDetailsAllOfDealsSummaryPerCurrencyFull
     */
    CURRENCY_ID?: PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYID;
}

/**
 * Check if a given object implements the PipelineDetailsAllOfDealsSummaryPerCurrencyFull interface.
 */
export function instanceOfPipelineDetailsAllOfDealsSummaryPerCurrencyFull(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PipelineDetailsAllOfDealsSummaryPerCurrencyFullFromJSON(json: any): PipelineDetailsAllOfDealsSummaryPerCurrencyFull {
    return PipelineDetailsAllOfDealsSummaryPerCurrencyFullFromJSONTyped(json, false);
}

export function PipelineDetailsAllOfDealsSummaryPerCurrencyFullFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineDetailsAllOfDealsSummaryPerCurrencyFull {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'CURRENCY_ID': !exists(json, 'CURRENCY_ID') ? undefined : PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDFromJSON(json['CURRENCY_ID']),
    };
}

export function PipelineDetailsAllOfDealsSummaryPerCurrencyFullToJSON(value?: PipelineDetailsAllOfDealsSummaryPerCurrencyFull | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CURRENCY_ID': PipelineDetailsAllOfDealsSummaryPerCurrencyFullCURRENCYIDToJSON(value.CURRENCY_ID),
    };
}
