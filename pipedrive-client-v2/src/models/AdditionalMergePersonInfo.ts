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
 * @interface AdditionalMergePersonInfo
 */
export interface AdditionalMergePersonInfo {
    /**
     * The ID of the owner related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    owner_id?: number;
    /**
     * The ID of the organization related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    org_id?: number;
    /**
     * The ID of the person with what the main person was merged
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    merge_what_id?: number;
    /**
     * The name of the person
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    name?: string;
    /**
     * The first name of the person
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    first_name?: string;
    /**
     * The last name of the person
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    last_name?: string;
    /**
     * The count of email messages related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    email_messages_count?: number;
    /**
     * The count of activities related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    activities_count?: number;
    /**
     * The count of done activities related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    done_activities_count?: number;
    /**
     * The count of undone activities related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    undone_activities_count?: number;
    /**
     * The count of files related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    files_count?: number;
    /**
     * The count of notes related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    notes_count?: number;
    /**
     * The count of followers related to the person
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    followers_count?: number;
    /**
     * The date and time of the last incoming email associated with the person
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    last_incoming_mail_time?: string;
    /**
     * The date and time of the last outgoing email associated with the person
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    last_outgoing_mail_time?: string;
    /**
     * The count of open deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    open_deals_count?: number;
    /**
     * The count of related open deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    related_open_deals_count?: number;
    /**
     * The count of closed deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    closed_deals_count?: number;
    /**
     * The count of related closed deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    related_closed_deals_count?: number;
    /**
     * The count of won deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    won_deals_count?: number;
    /**
     * The count of related won deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    related_won_deals_count?: number;
    /**
     * The count of lost deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    lost_deals_count?: number;
    /**
     * The count of related lost deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    related_lost_deals_count?: number;
    /**
     * The date of the next activity associated with the deal
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    next_activity_date?: string;
    /**
     * The time of the next activity associated with the deal
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    next_activity_time?: string;
    /**
     * The ID of the next activity associated with the deal
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    next_activity_id?: number | null;
    /**
     * The ID of the last activity associated with the deal
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    last_activity_id?: number | null;
    /**
     * The date of the last activity associated with the deal
     * @type {string}
     * @memberof AdditionalMergePersonInfo
     */
    last_activity_date?: string | null;
    /**
     * The count of open participant deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    participant_open_deals_count?: number;
    /**
     * The count of closed participant deals related with the item
     * @type {number}
     * @memberof AdditionalMergePersonInfo
     */
    participant_closed_deals_count?: number;
}

/**
 * Check if a given object implements the AdditionalMergePersonInfo interface.
 */
export function instanceOfAdditionalMergePersonInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdditionalMergePersonInfoFromJSON(json: any): AdditionalMergePersonInfo {
    return AdditionalMergePersonInfoFromJSONTyped(json, false);
}

export function AdditionalMergePersonInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdditionalMergePersonInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owner_id': !exists(json, 'owner_id') ? undefined : json['owner_id'],
        'org_id': !exists(json, 'org_id') ? undefined : json['org_id'],
        'merge_what_id': !exists(json, 'merge_what_id') ? undefined : json['merge_what_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'email_messages_count': !exists(json, 'email_messages_count') ? undefined : json['email_messages_count'],
        'activities_count': !exists(json, 'activities_count') ? undefined : json['activities_count'],
        'done_activities_count': !exists(json, 'done_activities_count') ? undefined : json['done_activities_count'],
        'undone_activities_count': !exists(json, 'undone_activities_count') ? undefined : json['undone_activities_count'],
        'files_count': !exists(json, 'files_count') ? undefined : json['files_count'],
        'notes_count': !exists(json, 'notes_count') ? undefined : json['notes_count'],
        'followers_count': !exists(json, 'followers_count') ? undefined : json['followers_count'],
        'last_incoming_mail_time': !exists(json, 'last_incoming_mail_time') ? undefined : json['last_incoming_mail_time'],
        'last_outgoing_mail_time': !exists(json, 'last_outgoing_mail_time') ? undefined : json['last_outgoing_mail_time'],
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
        'participant_open_deals_count': !exists(json, 'participant_open_deals_count') ? undefined : json['participant_open_deals_count'],
        'participant_closed_deals_count': !exists(json, 'participant_closed_deals_count') ? undefined : json['participant_closed_deals_count'],
    };
}

export function AdditionalMergePersonInfoToJSON(value?: AdditionalMergePersonInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owner_id': value.owner_id,
        'org_id': value.org_id,
        'merge_what_id': value.merge_what_id,
        'name': value.name,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'email_messages_count': value.email_messages_count,
        'activities_count': value.activities_count,
        'done_activities_count': value.done_activities_count,
        'undone_activities_count': value.undone_activities_count,
        'files_count': value.files_count,
        'notes_count': value.notes_count,
        'followers_count': value.followers_count,
        'last_incoming_mail_time': value.last_incoming_mail_time,
        'last_outgoing_mail_time': value.last_outgoing_mail_time,
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
        'participant_open_deals_count': value.participant_open_deals_count,
        'participant_closed_deals_count': value.participant_closed_deals_count,
    };
}

