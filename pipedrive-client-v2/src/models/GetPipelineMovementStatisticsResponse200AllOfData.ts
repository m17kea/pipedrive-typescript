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
import type { GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays } from './GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays';
import {
    GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysFromJSON,
    GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysFromJSONTyped,
    GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysToJSON,
} from './GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays';
import type { GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStages } from './GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStages';
import {
    GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStagesFromJSON,
    GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStagesFromJSONTyped,
    GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStagesToJSON,
} from './GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStages';
import type { GetPipelineMovementStatisticsResponse200AllOfDataNewDeals } from './GetPipelineMovementStatisticsResponse200AllOfDataNewDeals';
import {
    GetPipelineMovementStatisticsResponse200AllOfDataNewDealsFromJSON,
    GetPipelineMovementStatisticsResponse200AllOfDataNewDealsFromJSONTyped,
    GetPipelineMovementStatisticsResponse200AllOfDataNewDealsToJSON,
} from './GetPipelineMovementStatisticsResponse200AllOfDataNewDeals';

/**
 * The pipeline object
 * @export
 * @interface GetPipelineMovementStatisticsResponse200AllOfData
 */
export interface GetPipelineMovementStatisticsResponse200AllOfData {
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStages}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfData
     */
    movements_between_stages?: GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStages;
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfDataNewDeals}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfData
     */
    new_deals?: GetPipelineMovementStatisticsResponse200AllOfDataNewDeals;
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfDataNewDeals}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfData
     */
    deals_left_open?: GetPipelineMovementStatisticsResponse200AllOfDataNewDeals;
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfDataNewDeals}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfData
     */
    won_deals?: GetPipelineMovementStatisticsResponse200AllOfDataNewDeals;
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfDataNewDeals}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfData
     */
    lost_deals?: GetPipelineMovementStatisticsResponse200AllOfDataNewDeals;
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfData
     */
    average_age_in_days?: GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays;
}

/**
 * Check if a given object implements the GetPipelineMovementStatisticsResponse200AllOfData interface.
 */
export function instanceOfGetPipelineMovementStatisticsResponse200AllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPipelineMovementStatisticsResponse200AllOfDataFromJSON(json: any): GetPipelineMovementStatisticsResponse200AllOfData {
    return GetPipelineMovementStatisticsResponse200AllOfDataFromJSONTyped(json, false);
}

export function GetPipelineMovementStatisticsResponse200AllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineMovementStatisticsResponse200AllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'movements_between_stages': !exists(json, 'movements_between_stages') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStagesFromJSON(json['movements_between_stages']),
        'new_deals': !exists(json, 'new_deals') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataNewDealsFromJSON(json['new_deals']),
        'deals_left_open': !exists(json, 'deals_left_open') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataNewDealsFromJSON(json['deals_left_open']),
        'won_deals': !exists(json, 'won_deals') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataNewDealsFromJSON(json['won_deals']),
        'lost_deals': !exists(json, 'lost_deals') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataNewDealsFromJSON(json['lost_deals']),
        'average_age_in_days': !exists(json, 'average_age_in_days') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysFromJSON(json['average_age_in_days']),
    };
}

export function GetPipelineMovementStatisticsResponse200AllOfDataToJSON(value?: GetPipelineMovementStatisticsResponse200AllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'movements_between_stages': GetPipelineMovementStatisticsResponse200AllOfDataMovementsBetweenStagesToJSON(value.movements_between_stages),
        'new_deals': GetPipelineMovementStatisticsResponse200AllOfDataNewDealsToJSON(value.new_deals),
        'deals_left_open': GetPipelineMovementStatisticsResponse200AllOfDataNewDealsToJSON(value.deals_left_open),
        'won_deals': GetPipelineMovementStatisticsResponse200AllOfDataNewDealsToJSON(value.won_deals),
        'lost_deals': GetPipelineMovementStatisticsResponse200AllOfDataNewDealsToJSON(value.lost_deals),
        'average_age_in_days': GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysToJSON(value.average_age_in_days),
    };
}

