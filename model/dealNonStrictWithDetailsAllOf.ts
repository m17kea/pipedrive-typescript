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
import { DealNonStrictWithDetailsAllOfAge } from './dealNonStrictWithDetailsAllOfAge';
import { DealNonStrictWithDetailsAllOfAverageTimeToWon } from './dealNonStrictWithDetailsAllOfAverageTimeToWon';
import { DealNonStrictWithDetailsAllOfStayInPipelineStages } from './dealNonStrictWithDetailsAllOfStayInPipelineStages';

export class DealNonStrictWithDetailsAllOf {
    'averageTimeToWon'?: DealNonStrictWithDetailsAllOfAverageTimeToWon;
    /**
    * The average of the deal stage progression
    */
    'averageStageProgress'?: number;
    'age'?: DealNonStrictWithDetailsAllOfAge;
    'stayInPipelineStages'?: DealNonStrictWithDetailsAllOfStayInPipelineStages;
    /**
    * The details of the last activity associated with the deal
    */
    'lastActivity'?: object | null;
    /**
    * The details of the next activity associated with the deal
    */
    'nextActivity'?: object | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "averageTimeToWon",
            "baseName": "average_time_to_won",
            "type": "DealNonStrictWithDetailsAllOfAverageTimeToWon"
        },
        {
            "name": "averageStageProgress",
            "baseName": "average_stage_progress",
            "type": "number"
        },
        {
            "name": "age",
            "baseName": "age",
            "type": "DealNonStrictWithDetailsAllOfAge"
        },
        {
            "name": "stayInPipelineStages",
            "baseName": "stay_in_pipeline_stages",
            "type": "DealNonStrictWithDetailsAllOfStayInPipelineStages"
        },
        {
            "name": "lastActivity",
            "baseName": "last_activity",
            "type": "object"
        },
        {
            "name": "nextActivity",
            "baseName": "next_activity",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return DealNonStrictWithDetailsAllOf.attributeTypeMap;
    }
}
