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
 * @interface AddDealRequest
 */
export interface AddDealRequest {
    /**
     * The title of the deal
     * @type {string}
     * @memberof AddDealRequest
     */
    title: string;
    /**
     * The value of the deal. If omitted, value will be set to 0.
     * @type {string}
     * @memberof AddDealRequest
     */
    value?: string;
    /**
     * The currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user.
     * @type {string}
     * @memberof AddDealRequest
     */
    currency?: string;
    /**
     * The ID of the user which will be the owner of the created deal. If not provided, the user making the request will be used.
     * @type {number}
     * @memberof AddDealRequest
     */
    user_id?: number;
    /**
     * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `org_id` is specified.
     * @type {number}
     * @memberof AddDealRequest
     */
    person_id?: number;
    /**
     * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
     * @type {number}
     * @memberof AddDealRequest
     */
    org_id?: number;
    /**
     * The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that `pipeline_id` and `stage_id` should not be used together as `pipeline_id` will be ignored.
     * @type {number}
     * @memberof AddDealRequest
     */
    pipeline_id?: number;
    /**
     * The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the `stage_id`. If omitted, the deal will be placed in the first stage of the default pipeline.
     * @type {number}
     * @memberof AddDealRequest
     */
    stage_id?: number;
    /**
     * open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open.
     * @type {string}
     * @memberof AddDealRequest
     */
    status?: AddDealRequestStatusEnum;
    /**
     * The expected close date of the deal. In ISO 8601 format: YYYY-MM-DD.
     * @type {Date}
     * @memberof AddDealRequest
     */
    expected_close_date?: Date;
    /**
     * The success probability percentage of the deal. Used/shown only when `deal_probability` for the pipeline of the deal is enabled.
     * @type {number}
     * @memberof AddDealRequest
     */
    probability?: number;
    /**
     * The optional message about why the deal was lost (to be used when status = lost)
     * @type {string}
     * @memberof AddDealRequest
     */
    lost_reason?: string;
    /**
     * 
     * @type {string}
     * @memberof AddDealRequest
     */
    visible_to?: AddDealRequestVisibleToEnum;
    /**
     * The optional creation date & time of the deal in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof AddDealRequest
     */
    add_time?: string;
}

/**
* @export
* @enum {string}
*/
export enum AddDealRequestStatusEnum {
    Open = 'open',
    Won = 'won',
    Lost = 'lost',
    Deleted = 'deleted'
}
/**
* @export
* @enum {string}
*/
export enum AddDealRequestVisibleToEnum {
    _1 = '1',
    _3 = '3',
    _5 = '5',
    _7 = '7'
}


/**
 * Check if a given object implements the AddDealRequest interface.
 */
export function instanceOfAddDealRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function AddDealRequestFromJSON(json: any): AddDealRequest {
    return AddDealRequestFromJSONTyped(json, false);
}

export function AddDealRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDealRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'person_id': !exists(json, 'person_id') ? undefined : json['person_id'],
        'org_id': !exists(json, 'org_id') ? undefined : json['org_id'],
        'pipeline_id': !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
        'stage_id': !exists(json, 'stage_id') ? undefined : json['stage_id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'expected_close_date': !exists(json, 'expected_close_date') ? undefined : (new Date(json['expected_close_date'])),
        'probability': !exists(json, 'probability') ? undefined : json['probability'],
        'lost_reason': !exists(json, 'lost_reason') ? undefined : json['lost_reason'],
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
    };
}

export function AddDealRequestToJSON(value?: AddDealRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'value': value.value,
        'currency': value.currency,
        'user_id': value.user_id,
        'person_id': value.person_id,
        'org_id': value.org_id,
        'pipeline_id': value.pipeline_id,
        'stage_id': value.stage_id,
        'status': value.status,
        'expected_close_date': value.expected_close_date === undefined ? undefined : (value.expected_close_date.toISOString().substr(0,10)),
        'probability': value.probability,
        'lost_reason': value.lost_reason,
        'visible_to': value.visible_to,
        'add_time': value.add_time,
    };
}
