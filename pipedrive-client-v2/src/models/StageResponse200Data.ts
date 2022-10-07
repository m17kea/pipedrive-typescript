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
 * Updated stage object
 * @export
 * @interface StageResponse200Data
 */
export interface StageResponse200Data {
    /**
     * The ID of the stage
     * @type {number}
     * @memberof StageResponse200Data
     */
    id?: number;
    /**
     * Defines the order of the stage
     * @type {number}
     * @memberof StageResponse200Data
     */
    order_nr?: number;
    /**
     * The name of the stage
     * @type {string}
     * @memberof StageResponse200Data
     */
    name?: string;
    /**
     * Whether the stage is active or deleted
     * @type {boolean}
     * @memberof StageResponse200Data
     */
    active_flag?: boolean;
    /**
     * The success probability percentage of the deal. Used/shown when the deal weighted values are used.
     * @type {number}
     * @memberof StageResponse200Data
     */
    deal_probability?: number;
    /**
     * The ID of the pipeline to add the stage to
     * @type {number}
     * @memberof StageResponse200Data
     */
    pipeline_id?: number;
    /**
     * Whether deals in this stage can become rotten
     * @type {boolean}
     * @memberof StageResponse200Data
     */
    rotten_flag?: StageResponse200DataRottenFlagEnum;
    /**
     * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
     * @type {number}
     * @memberof StageResponse200Data
     */
    rotten_days?: number;
    /**
     * The stage creation time. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof StageResponse200Data
     */
    add_time?: string;
    /**
     * The stage update time. Format: YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof StageResponse200Data
     */
    update_time?: string;
}

/**
* @export
* @enum {string}
*/
export enum StageResponse200DataRottenFlagEnum {
    True = true,
    False = false
}


/**
 * Check if a given object implements the StageResponse200Data interface.
 */
export function instanceOfStageResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StageResponse200DataFromJSON(json: any): StageResponse200Data {
    return StageResponse200DataFromJSONTyped(json, false);
}

export function StageResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageResponse200Data {
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
    };
}

export function StageResponse200DataToJSON(value?: StageResponse200Data | null): any {
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
    };
}

