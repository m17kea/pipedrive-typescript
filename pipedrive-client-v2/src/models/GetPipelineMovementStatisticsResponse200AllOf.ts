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
import type { GetPipelineMovementStatisticsResponse200AllOfData } from './GetPipelineMovementStatisticsResponse200AllOfData';
import {
    GetPipelineMovementStatisticsResponse200AllOfDataFromJSON,
    GetPipelineMovementStatisticsResponse200AllOfDataFromJSONTyped,
    GetPipelineMovementStatisticsResponse200AllOfDataToJSON,
} from './GetPipelineMovementStatisticsResponse200AllOfData';

/**
 * 
 * @export
 * @interface GetPipelineMovementStatisticsResponse200AllOf
 */
export interface GetPipelineMovementStatisticsResponse200AllOf {
    /**
     * 
     * @type {GetPipelineMovementStatisticsResponse200AllOfData}
     * @memberof GetPipelineMovementStatisticsResponse200AllOf
     */
    data?: GetPipelineMovementStatisticsResponse200AllOfData;
}

/**
 * Check if a given object implements the GetPipelineMovementStatisticsResponse200AllOf interface.
 */
export function instanceOfGetPipelineMovementStatisticsResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPipelineMovementStatisticsResponse200AllOfFromJSON(json: any): GetPipelineMovementStatisticsResponse200AllOf {
    return GetPipelineMovementStatisticsResponse200AllOfFromJSONTyped(json, false);
}

export function GetPipelineMovementStatisticsResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineMovementStatisticsResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GetPipelineMovementStatisticsResponse200AllOfDataFromJSON(json['data']),
    };
}

export function GetPipelineMovementStatisticsResponse200AllOfToJSON(value?: GetPipelineMovementStatisticsResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetPipelineMovementStatisticsResponse200AllOfDataToJSON(value.data),
    };
}

