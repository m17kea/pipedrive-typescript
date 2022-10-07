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
import type { PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID } from './PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID';
import {
    PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYIDFromJSON,
    PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYIDFromJSONTyped,
    PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYIDToJSON,
} from './PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID';

/**
 * The currency summaries per stage. This parameter is dynamic and changes according to `stage_id` value.
 * @export
 * @interface PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID
 */
export interface PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID {
    /**
     * 
     * @type {PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID}
     * @memberof PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID
     */
    CURRENCY_ID?: PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYID;
}

/**
 * Check if a given object implements the PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID interface.
 */
export function instanceOfPipelineDetailsAllOfDealsSummaryPerStagesSTAGEID(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDFromJSON(json: any): PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID {
    return PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDFromJSONTyped(json, false);
}

export function PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'CURRENCY_ID': !exists(json, 'CURRENCY_ID') ? undefined : PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYIDFromJSON(json['CURRENCY_ID']),
    };
}

export function PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDToJSON(value?: PipelineDetailsAllOfDealsSummaryPerStagesSTAGEID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CURRENCY_ID': PipelineDetailsAllOfDealsSummaryPerStagesSTAGEIDCURRENCYIDToJSON(value.CURRENCY_ID),
    };
}
