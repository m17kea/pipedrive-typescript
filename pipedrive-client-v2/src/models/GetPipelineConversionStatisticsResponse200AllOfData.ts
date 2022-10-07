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
import type { GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner } from './GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner';
import {
    GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerFromJSON,
    GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerFromJSONTyped,
    GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerToJSON,
} from './GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner';

/**
 * The pipeline object
 * @export
 * @interface GetPipelineConversionStatisticsResponse200AllOfData
 */
export interface GetPipelineConversionStatisticsResponse200AllOfData {
    /**
     * The stage conversions
     * @type {Array<GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner>}
     * @memberof GetPipelineConversionStatisticsResponse200AllOfData
     */
    stage_conversions?: Array<GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner>;
    /**
     * The won conversion
     * @type {number}
     * @memberof GetPipelineConversionStatisticsResponse200AllOfData
     */
    won_conversion?: number;
    /**
     * The lost conversion
     * @type {number}
     * @memberof GetPipelineConversionStatisticsResponse200AllOfData
     */
    lost_conversion?: number;
}

/**
 * Check if a given object implements the GetPipelineConversionStatisticsResponse200AllOfData interface.
 */
export function instanceOfGetPipelineConversionStatisticsResponse200AllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPipelineConversionStatisticsResponse200AllOfDataFromJSON(json: any): GetPipelineConversionStatisticsResponse200AllOfData {
    return GetPipelineConversionStatisticsResponse200AllOfDataFromJSONTyped(json, false);
}

export function GetPipelineConversionStatisticsResponse200AllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineConversionStatisticsResponse200AllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stage_conversions': !exists(json, 'stage_conversions') ? undefined : ((json['stage_conversions'] as Array<any>).map(GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerFromJSON)),
        'won_conversion': !exists(json, 'won_conversion') ? undefined : json['won_conversion'],
        'lost_conversion': !exists(json, 'lost_conversion') ? undefined : json['lost_conversion'],
    };
}

export function GetPipelineConversionStatisticsResponse200AllOfDataToJSON(value?: GetPipelineConversionStatisticsResponse200AllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stage_conversions': value.stage_conversions === undefined ? undefined : ((value.stage_conversions as Array<any>).map(GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerToJSON)),
        'won_conversion': value.won_conversion,
        'lost_conversion': value.lost_conversion,
    };
}

