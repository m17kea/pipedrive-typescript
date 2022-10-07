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

import { RequestFile } from './models';
import { GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner } from './getPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner';

/**
* The moved deals average age in days
*/
export class GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays {
    /**
    * The moved deals average age across all stages
    */
    'acrossAllStages'?: number;
    /**
    * The moved deals average age by stages
    */
    'byStages'?: Array<GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acrossAllStages",
            "baseName": "across_all_stages",
            "type": "number"
        },
        {
            "name": "byStages",
            "baseName": "by_stages",
            "type": "Array<GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDaysByStagesInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetPipelineMovementStatisticsResponse200AllOfDataAverageAgeInDays.attributeTypeMap;
    }
}

