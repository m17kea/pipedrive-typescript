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
 * @interface DealsCountAndActivityInfo
 */
export interface DealsCountAndActivityInfo {
    /**
     * The count of open deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    open_deals_count?: number;
    /**
     * The count of related open deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    related_open_deals_count?: number;
    /**
     * The count of closed deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    closed_deals_count?: number;
    /**
     * The count of related closed deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    related_closed_deals_count?: number;
    /**
     * The count of won deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    won_deals_count?: number;
    /**
     * The count of related won deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    related_won_deals_count?: number;
    /**
     * The count of lost deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    lost_deals_count?: number;
    /**
     * The count of related lost deals related with the item
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    related_lost_deals_count?: number;
    /**
     * The date of the next activity associated with the deal
     * @type {string}
     * @memberof DealsCountAndActivityInfo
     */
    next_activity_date?: string;
    /**
     * The time of the next activity associated with the deal
     * @type {string}
     * @memberof DealsCountAndActivityInfo
     */
    next_activity_time?: string;
    /**
     * The ID of the next activity associated with the deal
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    next_activity_id?: number | null;
    /**
     * The ID of the last activity associated with the deal
     * @type {number}
     * @memberof DealsCountAndActivityInfo
     */
    last_activity_id?: number | null;
    /**
     * The date of the last activity associated with the deal
     * @type {string}
     * @memberof DealsCountAndActivityInfo
     */
    last_activity_date?: string | null;
}

/**
 * Check if a given object implements the DealsCountAndActivityInfo interface.
 */
export function instanceOfDealsCountAndActivityInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealsCountAndActivityInfoFromJSON(json: any): DealsCountAndActivityInfo {
    return DealsCountAndActivityInfoFromJSONTyped(json, false);
}

export function DealsCountAndActivityInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DealsCountAndActivityInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'open_deals_count': !exists(json, 'open_deals_count') ? undefined : json['open_deals_count'],
        'related_open_deals_count': !exists(json, 'related_open_deals_count') ? undefined : json['related_open_deals_count'],
        'closed_deals_count': !exists(json, 'closed_deals_count') ? undefined : json['closed_deals_count'],
        'related_closed_deals_count': !exists(json, 'related_closed_deals_count') ? undefined : json['related_closed_deals_count'],
        'won_deals_count': !exists(json, 'won_deals_count') ? undefined : json['won_deals_count'],
        'related_won_deals_count': !exists(json, 'related_won_deals_count') ? undefined : json['related_won_deals_count'],
        'lost_deals_count': !exists(json, 'lost_deals_count') ? undefined : json['lost_deals_count'],
        'related_lost_deals_count': !exists(json, 'related_lost_deals_count') ? undefined : json['related_lost_deals_count'],
        'next_activity_date': !exists(json, 'next_activity_date') ? undefined : json['next_activity_date'],
        'next_activity_time': !exists(json, 'next_activity_time') ? undefined : json['next_activity_time'],
        'next_activity_id': !exists(json, 'next_activity_id') ? undefined : json['next_activity_id'],
        'last_activity_id': !exists(json, 'last_activity_id') ? undefined : json['last_activity_id'],
        'last_activity_date': !exists(json, 'last_activity_date') ? undefined : json['last_activity_date'],
    };
}

export function DealsCountAndActivityInfoToJSON(value?: DealsCountAndActivityInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'open_deals_count': value.open_deals_count,
        'related_open_deals_count': value.related_open_deals_count,
        'closed_deals_count': value.closed_deals_count,
        'related_closed_deals_count': value.related_closed_deals_count,
        'won_deals_count': value.won_deals_count,
        'related_won_deals_count': value.related_won_deals_count,
        'lost_deals_count': value.lost_deals_count,
        'related_lost_deals_count': value.related_lost_deals_count,
        'next_activity_date': value.next_activity_date,
        'next_activity_time': value.next_activity_time,
        'next_activity_id': value.next_activity_id,
        'last_activity_id': value.last_activity_id,
        'last_activity_date': value.last_activity_date,
    };
}

