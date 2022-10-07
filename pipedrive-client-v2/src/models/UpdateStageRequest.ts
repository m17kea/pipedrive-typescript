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
 * @interface UpdateStageRequest
 */
export interface UpdateStageRequest {
    /**
     * The name of the stage
     * @type {string}
     * @memberof UpdateStageRequest
     */
    name?: string;
    /**
     * The ID of the pipeline to add stage to
     * @type {number}
     * @memberof UpdateStageRequest
     */
    pipeline_id?: number;
    /**
     * The success probability percentage of the deal. Used/shown when deal weighted values are used.
     * @type {number}
     * @memberof UpdateStageRequest
     */
    deal_probability?: number;
    /**
     * Whether deals in this stage can become rotten
     * @type {boolean}
     * @memberof UpdateStageRequest
     */
    rotten_flag?: UpdateStageRequestRottenFlagEnum;
    /**
     * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
     * @type {number}
     * @memberof UpdateStageRequest
     */
    rotten_days?: number;
    /**
     * An order number for this stage. Order numbers should be used to order the stages in the pipeline.
     * @type {number}
     * @memberof UpdateStageRequest
     */
    order_nr?: number;
}

/**
* @export
* @enum {string}
*/
export enum UpdateStageRequestRottenFlagEnum {
    True = true,
    False = false
}


/**
 * Check if a given object implements the UpdateStageRequest interface.
 */
export function instanceOfUpdateStageRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateStageRequestFromJSON(json: any): UpdateStageRequest {
    return UpdateStageRequestFromJSONTyped(json, false);
}

export function UpdateStageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateStageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pipeline_id': !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
        'deal_probability': !exists(json, 'deal_probability') ? undefined : json['deal_probability'],
        'rotten_flag': !exists(json, 'rotten_flag') ? undefined : json['rotten_flag'],
        'rotten_days': !exists(json, 'rotten_days') ? undefined : json['rotten_days'],
        'order_nr': !exists(json, 'order_nr') ? undefined : json['order_nr'],
    };
}

export function UpdateStageRequestToJSON(value?: UpdateStageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'pipeline_id': value.pipeline_id,
        'deal_probability': value.deal_probability,
        'rotten_flag': value.rotten_flag,
        'rotten_days': value.rotten_days,
        'order_nr': value.order_nr,
    };
}

