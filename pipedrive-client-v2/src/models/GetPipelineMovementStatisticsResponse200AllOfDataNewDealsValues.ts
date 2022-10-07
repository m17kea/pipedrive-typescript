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
 * The values of the deals
 * @export
 * @interface GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues
 */
export interface GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues {
    /**
     * The value of the deals
     * @type {number}
     * @memberof GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues
     */
    CURRENCY_ID?: number;
}

/**
 * Check if a given object implements the GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues interface.
 */
export function instanceOfGetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValuesFromJSON(json: any): GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues {
    return GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValuesFromJSONTyped(json, false);
}

export function GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'CURRENCY_ID': !exists(json, 'CURRENCY_ID') ? undefined : json['CURRENCY_ID'],
    };
}

export function GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValuesToJSON(value?: GetPipelineMovementStatisticsResponse200AllOfDataNewDealsValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CURRENCY_ID': value.CURRENCY_ID,
    };
}
