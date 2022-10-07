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
 * @interface PipelineRequest1
 */
export interface PipelineRequest1 {
    /**
     * The name of the pipeline
     * @type {string}
     * @memberof PipelineRequest1
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PipelineRequest1
     */
    deal_probability?: PipelineRequest1DealProbabilityEnum;
    /**
     * Defines the order of pipelines. First order (`order_nr=0`) is the default pipeline.
     * @type {number}
     * @memberof PipelineRequest1
     */
    order_nr?: number;
    /**
     * 
     * @type {number}
     * @memberof PipelineRequest1
     */
    active?: PipelineRequest1ActiveEnum;
}

/**
* @export
* @enum {string}
*/
export enum PipelineRequest1DealProbabilityEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
* @export
* @enum {string}
*/
export enum PipelineRequest1ActiveEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}


/**
 * Check if a given object implements the PipelineRequest1 interface.
 */
export function instanceOfPipelineRequest1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PipelineRequest1FromJSON(json: any): PipelineRequest1 {
    return PipelineRequest1FromJSONTyped(json, false);
}

export function PipelineRequest1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineRequest1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'deal_probability': !exists(json, 'deal_probability') ? undefined : json['deal_probability'],
        'order_nr': !exists(json, 'order_nr') ? undefined : json['order_nr'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function PipelineRequest1ToJSON(value?: PipelineRequest1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'deal_probability': value.deal_probability,
        'order_nr': value.order_nr,
        'active': value.active,
    };
}

