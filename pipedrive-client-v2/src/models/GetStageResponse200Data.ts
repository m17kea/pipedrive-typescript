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
import type { PipelineDetailsAllOfDealsSummary } from './PipelineDetailsAllOfDealsSummary';
import {
    PipelineDetailsAllOfDealsSummaryFromJSON,
    PipelineDetailsAllOfDealsSummaryFromJSONTyped,
    PipelineDetailsAllOfDealsSummaryToJSON,
} from './PipelineDetailsAllOfDealsSummary';

/**
 * The stage object
 * @export
 * @interface GetStageResponse200Data
 */
export interface GetStageResponse200Data {
    /**
     * The ID of the stage
     * @type {number}
     * @memberof GetStageResponse200Data
     */
    id?: number;
    /**
     * Defines the order of the stage
     * @type {number}
     * @memberof GetStageResponse200Data
     */
    order_nr?: number;
    /**
     * The name of the stage
     * @type {string}
     * @memberof GetStageResponse200Data
     */
    name?: string;
    /**
     * Whether the stage is active or deleted
     * @type {boolean}
     * @memberof GetStageResponse200Data
     */
    active_flag?: boolean;
    /**
     * The success probability percentage of the deal. Used/shown when the deal weighted values are used.
     * @type {number}
     * @memberof GetStageResponse200Data
     */
    deal_probability?: number;
    /**
     * The ID of the pipeline to add the stage to
     * @type {number}
     * @memberof GetStageResponse200Data
     */
    pipeline_id?: number;
    /**
     * Whether deals in this stage can become rotten
     * @type {boolean}
     * @memberof GetStageResponse200Data
     */
    rotten_flag?: GetStageResponse200DataRottenFlagEnum;
    /**
     * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
     * @type {number}
     * @memberof GetStageResponse200Data
     */
    rotten_days?: number;
    /**
     * The stage creation time. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetStageResponse200Data
     */
    add_time?: string;
    /**
     * The stage update time. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof GetStageResponse200Data
     */
    update_time?: string;
    /**
     * 
     * @type {PipelineDetailsAllOfDealsSummary}
     * @memberof GetStageResponse200Data
     */
    deals_summary?: PipelineDetailsAllOfDealsSummary;
}

/**
* @export
* @enum {string}
*/
export enum GetStageResponse200DataRottenFlagEnum {
    True = true,
    False = false
}


/**
 * Check if a given object implements the GetStageResponse200Data interface.
 */
export function instanceOfGetStageResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetStageResponse200DataFromJSON(json: any): GetStageResponse200Data {
    return GetStageResponse200DataFromJSONTyped(json, false);
}

export function GetStageResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStageResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'order_nr': !exists(json, 'order_nr') ? undefined : json['order_nr'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'active_flag': !exists(json, 'active_flag') ? undefined : json['active_flag'],
        'deal_probability': !exists(json, 'deal_probability') ? undefined : json['deal_probability'],
        'pipeline_id': !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
        'rotten_flag': !exists(json, 'rotten_flag') ? undefined : json['rotten_flag'],
        'rotten_days': !exists(json, 'rotten_days') ? undefined : json['rotten_days'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
        'update_time': !exists(json, 'update_time') ? undefined : json['update_time'],
        'deals_summary': !exists(json, 'deals_summary') ? undefined : PipelineDetailsAllOfDealsSummaryFromJSON(json['deals_summary']),
    };
}

export function GetStageResponse200DataToJSON(value?: GetStageResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order_nr': value.order_nr,
        'name': value.name,
        'active_flag': value.active_flag,
        'deal_probability': value.deal_probability,
        'pipeline_id': value.pipeline_id,
        'rotten_flag': value.rotten_flag,
        'rotten_days': value.rotten_days,
        'add_time': value.add_time,
        'update_time': value.update_time,
        'deals_summary': PipelineDetailsAllOfDealsSummaryToJSON(value.deals_summary),
    };
}

