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
 * @interface BaseDeal
 */
export interface BaseDeal {
    /**
     * The ID of the deal stage
     * @type {number}
     * @memberof BaseDeal
     */
    stage_id?: number;
    /**
     * The title of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    title?: string;
    /**
     * The value of the deal
     * @type {number}
     * @memberof BaseDeal
     */
    value?: number;
    /**
     * The currency associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    currency?: string;
    /**
     * The creation date and time of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    add_time?: string;
    /**
     * The last updated date and time of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    update_time?: string;
    /**
     * The last updated date and time of the deal stage
     * @type {string}
     * @memberof BaseDeal
     */
    stage_change_time?: string;
    /**
     * Whether the deal is active or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    active?: boolean;
    /**
     * Whether the deal is deleted or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    deleted?: boolean;
    /**
     * The status of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    status?: string;
    /**
     * The success probability percentage of the deal
     * @type {number}
     * @memberof BaseDeal
     */
    probability?: number | null;
    /**
     * The date of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    next_activity_date?: string;
    /**
     * The time of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    next_activity_time?: string;
    /**
     * The ID of the next activity associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    next_activity_id?: number | null;
    /**
     * The ID of the last activity associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    last_activity_id?: number | null;
    /**
     * The date of the last activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    last_activity_date?: string | null;
    /**
     * The reason for losing the deal
     * @type {string}
     * @memberof BaseDeal
     */
    lost_reason?: string | null;
    /**
     * The visibility of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    visible_to?: string;
    /**
     * The date and time of closing the deal
     * @type {string}
     * @memberof BaseDeal
     */
    close_time?: string | null;
    /**
     * The ID of pipeline associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    pipeline_id?: number;
    /**
     * The date and time of changing the deal status as won
     * @type {string}
     * @memberof BaseDeal
     */
    won_time?: string;
    /**
     * The date and time of the first time changing the deal status as won
     * @type {string}
     * @memberof BaseDeal
     */
    first_won_time?: string;
    /**
     * The date and time of changing the deal status as lost
     * @type {string}
     * @memberof BaseDeal
     */
    lost_time?: string;
    /**
     * The number of products associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    products_count?: number;
    /**
     * The number of files associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    files_count?: number;
    /**
     * The number of notes associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    notes_count?: number;
    /**
     * The number of followers associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    followers_count?: number;
    /**
     * The number of emails associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    email_messages_count?: number;
    /**
     * The number of activities associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    activities_count?: number;
    /**
     * The number of completed activities associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    done_activities_count?: number;
    /**
     * The number of incomplete activities associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    undone_activities_count?: number;
    /**
     * The number of participants associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    participants_count?: number;
    /**
     * The expected close date of the deal
     * @type {Date}
     * @memberof BaseDeal
     */
    expected_close_date?: Date;
    /**
     * The date and time of the last incoming email associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    last_incoming_mail_time?: string;
    /**
     * The date and time of the last outgoing email associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    last_outgoing_mail_time?: string;
    /**
     * The label assigned to the deal
     * @type {string}
     * @memberof BaseDeal
     */
    label?: string;
    /**
     * The order number of the deal stage associated with the deal
     * @type {number}
     * @memberof BaseDeal
     */
    stage_order_nr?: number;
    /**
     * The name of the person associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    person_name?: string;
    /**
     * The name of the organization associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    org_name?: string;
    /**
     * The subject of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    next_activity_subject?: string;
    /**
     * The type of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    next_activity_type?: string;
    /**
     * The duration of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    next_activity_duration?: string;
    /**
     * The note of the next activity associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    next_activity_note?: string;
    /**
     * The deal value formatted with selected currency. E.g. US$500
     * @type {string}
     * @memberof BaseDeal
     */
    formatted_value?: string;
    /**
     * Probability times deal value. Probability can either be deal probability or if not set, then stage probability.
     * @type {number}
     * @memberof BaseDeal
     */
    weighted_value?: number;
    /**
     * The weighted_value formatted with selected currency. E.g. US$500
     * @type {string}
     * @memberof BaseDeal
     */
    formatted_weighted_value?: string;
    /**
     * The currency associated with the deal
     * @type {string}
     * @memberof BaseDeal
     */
    weighted_value_currency?: string;
    /**
     * The date and time of changing the deal status as rotten
     * @type {string}
     * @memberof BaseDeal
     */
    rotten_time?: string | null;
    /**
     * The name of the deal owner
     * @type {string}
     * @memberof BaseDeal
     */
    owner_name?: string;
    /**
     * The BCC email of the deal
     * @type {string}
     * @memberof BaseDeal
     */
    cc_email?: string;
    /**
     * If the organization that is associated with the deal is hidden or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    org_hidden?: boolean;
    /**
     * If the person that is associated with the deal is hidden or not
     * @type {boolean}
     * @memberof BaseDeal
     */
    person_hidden?: boolean;
}

/**
 * Check if a given object implements the BaseDeal interface.
 */
export function instanceOfBaseDeal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaseDealFromJSON(json: any): BaseDeal {
    return BaseDealFromJSONTyped(json, false);
}

export function BaseDealFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseDeal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stage_id': !exists(json, 'stage_id') ? undefined : json['stage_id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
        'update_time': !exists(json, 'update_time') ? undefined : json['update_time'],
        'stage_change_time': !exists(json, 'stage_change_time') ? undefined : json['stage_change_time'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'probability': !exists(json, 'probability') ? undefined : json['probability'],
        'next_activity_date': !exists(json, 'next_activity_date') ? undefined : json['next_activity_date'],
        'next_activity_time': !exists(json, 'next_activity_time') ? undefined : json['next_activity_time'],
        'next_activity_id': !exists(json, 'next_activity_id') ? undefined : json['next_activity_id'],
        'last_activity_id': !exists(json, 'last_activity_id') ? undefined : json['last_activity_id'],
        'last_activity_date': !exists(json, 'last_activity_date') ? undefined : json['last_activity_date'],
        'lost_reason': !exists(json, 'lost_reason') ? undefined : json['lost_reason'],
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
        'close_time': !exists(json, 'close_time') ? undefined : json['close_time'],
        'pipeline_id': !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
        'won_time': !exists(json, 'won_time') ? undefined : json['won_time'],
        'first_won_time': !exists(json, 'first_won_time') ? undefined : json['first_won_time'],
        'lost_time': !exists(json, 'lost_time') ? undefined : json['lost_time'],
        'products_count': !exists(json, 'products_count') ? undefined : json['products_count'],
        'files_count': !exists(json, 'files_count') ? undefined : json['files_count'],
        'notes_count': !exists(json, 'notes_count') ? undefined : json['notes_count'],
        'followers_count': !exists(json, 'followers_count') ? undefined : json['followers_count'],
        'email_messages_count': !exists(json, 'email_messages_count') ? undefined : json['email_messages_count'],
        'activities_count': !exists(json, 'activities_count') ? undefined : json['activities_count'],
        'done_activities_count': !exists(json, 'done_activities_count') ? undefined : json['done_activities_count'],
        'undone_activities_count': !exists(json, 'undone_activities_count') ? undefined : json['undone_activities_count'],
        'participants_count': !exists(json, 'participants_count') ? undefined : json['participants_count'],
        'expected_close_date': !exists(json, 'expected_close_date') ? undefined : (new Date(json['expected_close_date'])),
        'last_incoming_mail_time': !exists(json, 'last_incoming_mail_time') ? undefined : json['last_incoming_mail_time'],
        'last_outgoing_mail_time': !exists(json, 'last_outgoing_mail_time') ? undefined : json['last_outgoing_mail_time'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'stage_order_nr': !exists(json, 'stage_order_nr') ? undefined : json['stage_order_nr'],
        'person_name': !exists(json, 'person_name') ? undefined : json['person_name'],
        'org_name': !exists(json, 'org_name') ? undefined : json['org_name'],
        'next_activity_subject': !exists(json, 'next_activity_subject') ? undefined : json['next_activity_subject'],
        'next_activity_type': !exists(json, 'next_activity_type') ? undefined : json['next_activity_type'],
        'next_activity_duration': !exists(json, 'next_activity_duration') ? undefined : json['next_activity_duration'],
        'next_activity_note': !exists(json, 'next_activity_note') ? undefined : json['next_activity_note'],
        'formatted_value': !exists(json, 'formatted_value') ? undefined : json['formatted_value'],
        'weighted_value': !exists(json, 'weighted_value') ? undefined : json['weighted_value'],
        'formatted_weighted_value': !exists(json, 'formatted_weighted_value') ? undefined : json['formatted_weighted_value'],
        'weighted_value_currency': !exists(json, 'weighted_value_currency') ? undefined : json['weighted_value_currency'],
        'rotten_time': !exists(json, 'rotten_time') ? undefined : json['rotten_time'],
        'owner_name': !exists(json, 'owner_name') ? undefined : json['owner_name'],
        'cc_email': !exists(json, 'cc_email') ? undefined : json['cc_email'],
        'org_hidden': !exists(json, 'org_hidden') ? undefined : json['org_hidden'],
        'person_hidden': !exists(json, 'person_hidden') ? undefined : json['person_hidden'],
    };
}

export function BaseDealToJSON(value?: BaseDeal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stage_id': value.stage_id,
        'title': value.title,
        'value': value.value,
        'currency': value.currency,
        'add_time': value.add_time,
        'update_time': value.update_time,
        'stage_change_time': value.stage_change_time,
        'active': value.active,
        'deleted': value.deleted,
        'status': value.status,
        'probability': value.probability,
        'next_activity_date': value.next_activity_date,
        'next_activity_time': value.next_activity_time,
        'next_activity_id': value.next_activity_id,
        'last_activity_id': value.last_activity_id,
        'last_activity_date': value.last_activity_date,
        'lost_reason': value.lost_reason,
        'visible_to': value.visible_to,
        'close_time': value.close_time,
        'pipeline_id': value.pipeline_id,
        'won_time': value.won_time,
        'first_won_time': value.first_won_time,
        'lost_time': value.lost_time,
        'products_count': value.products_count,
        'files_count': value.files_count,
        'notes_count': value.notes_count,
        'followers_count': value.followers_count,
        'email_messages_count': value.email_messages_count,
        'activities_count': value.activities_count,
        'done_activities_count': value.done_activities_count,
        'undone_activities_count': value.undone_activities_count,
        'participants_count': value.participants_count,
        'expected_close_date': value.expected_close_date === undefined ? undefined : (value.expected_close_date.toISOString().substr(0,10)),
        'last_incoming_mail_time': value.last_incoming_mail_time,
        'last_outgoing_mail_time': value.last_outgoing_mail_time,
        'label': value.label,
        'stage_order_nr': value.stage_order_nr,
        'person_name': value.person_name,
        'org_name': value.org_name,
        'next_activity_subject': value.next_activity_subject,
        'next_activity_type': value.next_activity_type,
        'next_activity_duration': value.next_activity_duration,
        'next_activity_note': value.next_activity_note,
        'formatted_value': value.formatted_value,
        'weighted_value': value.weighted_value,
        'formatted_weighted_value': value.formatted_weighted_value,
        'weighted_value_currency': value.weighted_value_currency,
        'rotten_time': value.rotten_time,
        'owner_name': value.owner_name,
        'cc_email': value.cc_email,
        'org_hidden': value.org_hidden,
        'person_hidden': value.person_hidden,
    };
}
