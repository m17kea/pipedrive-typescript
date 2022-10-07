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
import type { GetDealsTimelineResponse200DataTotals } from './GetDealsTimelineResponse200DataTotals';
import {
    GetDealsTimelineResponse200DataTotalsFromJSON,
    GetDealsTimelineResponse200DataTotalsFromJSONTyped,
    GetDealsTimelineResponse200DataTotalsToJSON,
} from './GetDealsTimelineResponse200DataTotals';

/**
 * Open and won deals grouped into periods by defined interval, amount and date-type dealField (`field_key`)
 * @export
 * @interface GetDealsTimelineResponse200Data
 */
export interface GetDealsTimelineResponse200Data {
    /**
     * The start date and time of the period
     * @type {string}
     * @memberof GetDealsTimelineResponse200Data
     */
    period_start?: string;
    /**
     * The end date and time of the period
     * @type {string}
     * @memberof GetDealsTimelineResponse200Data
     */
    period_end?: string;
    /**
     * 
     * @type {Array<DealStrict>}
     * @memberof GetDealsTimelineResponse200Data
     */
    deals?: Array<DealStrict>;
    /**
     * 
     * @type {GetDealsTimelineResponse200DataTotals}
     * @memberof GetDealsTimelineResponse200Data
     */
    totals?: GetDealsTimelineResponse200DataTotals;
}

/**
 * Check if a given object implements the GetDealsTimelineResponse200Data interface.
 */
export function instanceOfGetDealsTimelineResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDealsTimelineResponse200DataFromJSON(json: any): GetDealsTimelineResponse200Data {
    return GetDealsTimelineResponse200DataFromJSONTyped(json, false);
}

export function GetDealsTimelineResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDealsTimelineResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'period_start': !exists(json, 'period_start') ? undefined : json['period_start'],
        'period_end': !exists(json, 'period_end') ? undefined : json['period_end'],
        'deals': !exists(json, 'deals') ? undefined : ((json['deals'] as Array<any>).map(DealStrictFromJSON)),
        'totals': !exists(json, 'totals') ? undefined : GetDealsTimelineResponse200DataTotalsFromJSON(json['totals']),
    };
}

export function GetDealsTimelineResponse200DataToJSON(value?: GetDealsTimelineResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'period_start': value.period_start,
        'period_end': value.period_end,
        'deals': value.deals === undefined ? undefined : ((value.deals as Array<any>).map(DealStrictToJSON)),
        'totals': GetDealsTimelineResponse200DataTotalsToJSON(value.totals),
    };
}

