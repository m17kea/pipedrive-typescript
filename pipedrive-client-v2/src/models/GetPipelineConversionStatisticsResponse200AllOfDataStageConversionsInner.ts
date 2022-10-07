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
 * 
 * @export
 * @interface GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner
 */
export interface GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner {
    /**
     * The stage ID from where conversion starts
     * @type {number}
     * @memberof GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner
     */
    from_stage_id?: number;
    /**
     * The stage ID to where conversion ends
     * @type {number}
     * @memberof GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner
     */
    to_stage_id?: number;
    /**
     * The conversion rate
     * @type {number}
     * @memberof GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner
     */
    conversion_rate?: number;
}

/**
 * Check if a given object implements the GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner interface.
 */
export function instanceOfGetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerFromJSON(json: any): GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner {
    return GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerFromJSONTyped(json, false);
}

export function GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from_stage_id': !exists(json, 'from_stage_id') ? undefined : json['from_stage_id'],
        'to_stage_id': !exists(json, 'to_stage_id') ? undefined : json['to_stage_id'],
        'conversion_rate': !exists(json, 'conversion_rate') ? undefined : json['conversion_rate'],
    };
}

export function GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInnerToJSON(value?: GetPipelineConversionStatisticsResponse200AllOfDataStageConversionsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from_stage_id': value.from_stage_id,
        'to_stage_id': value.to_stage_id,
        'conversion_rate': value.conversion_rate,
    };
}

