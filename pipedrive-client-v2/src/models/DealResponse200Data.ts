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
import type { DealNonStrictAllOfCreatorUserId } from './DealNonStrictAllOfCreatorUserId';
import {
    DealNonStrictAllOfCreatorUserIdFromJSON,
    DealNonStrictAllOfCreatorUserIdFromJSONTyped,
    DealNonStrictAllOfCreatorUserIdToJSON,
} from './DealNonStrictAllOfCreatorUserId';
import type { DealOrganizationDataWithId } from './DealOrganizationDataWithId';
import {
    DealOrganizationDataWithIdFromJSON,
    DealOrganizationDataWithIdFromJSONTyped,
    DealOrganizationDataWithIdToJSON,
} from './DealOrganizationDataWithId';
import type { DealPersonDataWithId } from './DealPersonDataWithId';
import {
    DealPersonDataWithIdFromJSON,
    DealPersonDataWithIdFromJSONTyped,
    DealPersonDataWithIdToJSON,
} from './DealPersonDataWithId';
import type { DealUserDataWithId } from './DealUserDataWithId';
import {
    DealUserDataWithIdFromJSON,
    DealUserDataWithIdFromJSONTyped,
    DealUserDataWithIdToJSON,
} from './DealUserDataWithId';

/**
 * The deal object
 * @export
 * @interface DealResponse200Data
 */
export interface DealResponse200Data {
    /**
     * The ID of the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    id?: number;
    /**
     * 
     * @type {DealNonStrictAllOfCreatorUserId}
     * @memberof DealResponse200Data
     */
    creator_user_id?: DealNonStrictAllOfCreatorUserId;
    /**
     * 
     * @type {DealUserDataWithId}
     * @memberof DealResponse200Data
     */
    user_id?: DealUserDataWithId;
    /**
     * 
     * @type {DealPersonDataWithId}
     * @memberof DealResponse200Data
     */
    person_id?: DealPersonDataWithId;
    /**
     * 
     * @type {DealOrganizationDataWithId}
     * @memberof DealResponse200Data
     */
    org_id?: DealOrganizationDataWithId;
    /**
     * The ID of the deal stage
     * @type {number}
     * @memberof DealResponse200Data
     */
    stage_id?: number;
    /**
     * The title of the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    title?: string;
    /**
     * The value of the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    value?: number;
    /**
     * The currency associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    currency?: string;
    /**
     * The creation date and time of the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    add_time?: string;
    /**
     * The last updated date and time of the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    update_time?: string;
    /**
     * The last updated date and time of the deal stage
     * @type {string}
     * @memberof DealResponse200Data
     */
    stage_change_time?: string;
    /**
     * Whether the deal is active or not
     * @type {boolean}
     * @memberof DealResponse200Data
     */
    active?: boolean;
    /**
     * Whether the deal is deleted or not
     * @type {boolean}
     * @memberof DealResponse200Data
     */
    deleted?: boolean;
    /**
     * The status of the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    status?: string;
    /**
     * The success probability percentage of the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    probability?: number | null;
    /**
     * The date of the next activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    next_activity_date?: string;
    /**
     * The time of the next activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    next_activity_time?: string;
    /**
     * The ID of the next activity associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    next_activity_id?: number | null;
    /**
     * The ID of the last activity associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    last_activity_id?: number | null;
    /**
     * The date of the last activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    last_activity_date?: string | null;
    /**
     * The reason for losing the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    lost_reason?: string | null;
    /**
     * The visibility of the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    visible_to?: string;
    /**
     * The date and time of closing the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    close_time?: string | null;
    /**
     * The ID of pipeline associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    pipeline_id?: number;
    /**
     * The date and time of changing the deal status as won
     * @type {string}
     * @memberof DealResponse200Data
     */
    won_time?: string;
    /**
     * The date and time of the first time changing the deal status as won
     * @type {string}
     * @memberof DealResponse200Data
     */
    first_won_time?: string;
    /**
     * The date and time of changing the deal status as lost
     * @type {string}
     * @memberof DealResponse200Data
     */
    lost_time?: string;
    /**
     * The number of products associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    products_count?: number;
    /**
     * The number of files associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    files_count?: number;
    /**
     * The number of notes associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    notes_count?: number;
    /**
     * The number of followers associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    followers_count?: number;
    /**
     * The number of emails associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    email_messages_count?: number;
    /**
     * The number of activities associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    activities_count?: number;
    /**
     * The number of completed activities associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    done_activities_count?: number;
    /**
     * The number of incomplete activities associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    undone_activities_count?: number;
    /**
     * The number of participants associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    participants_count?: number;
    /**
     * The expected close date of the deal
     * @type {Date}
     * @memberof DealResponse200Data
     */
    expected_close_date?: Date;
    /**
     * The date and time of the last incoming email associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    last_incoming_mail_time?: string;
    /**
     * The date and time of the last outgoing email associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    last_outgoing_mail_time?: string;
    /**
     * The label assigned to the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    label?: string;
    /**
     * The order number of the deal stage associated with the deal
     * @type {number}
     * @memberof DealResponse200Data
     */
    stage_order_nr?: number;
    /**
     * The name of the person associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    person_name?: string;
    /**
     * The name of the organization associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    org_name?: string;
    /**
     * The subject of the next activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    next_activity_subject?: string;
    /**
     * The type of the next activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    next_activity_type?: string;
    /**
     * The duration of the next activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    next_activity_duration?: string;
    /**
     * The note of the next activity associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    next_activity_note?: string;
    /**
     * The deal value formatted with selected currency. E.g. US$500
     * @type {string}
     * @memberof DealResponse200Data
     */
    formatted_value?: string;
    /**
     * Probability times deal value. Probability can either be deal probability or if not set, then stage probability.
     * @type {number}
     * @memberof DealResponse200Data
     */
    weighted_value?: number;
    /**
     * The weighted_value formatted with selected currency. E.g. US$500
     * @type {string}
     * @memberof DealResponse200Data
     */
    formatted_weighted_value?: string;
    /**
     * The currency associated with the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    weighted_value_currency?: string;
    /**
     * The date and time of changing the deal status as rotten
     * @type {string}
     * @memberof DealResponse200Data
     */
    rotten_time?: string | null;
    /**
     * The name of the deal owner
     * @type {string}
     * @memberof DealResponse200Data
     */
    owner_name?: string;
    /**
     * The BCC email of the deal
     * @type {string}
     * @memberof DealResponse200Data
     */
    cc_email?: string;
    /**
     * If the organization that is associated with the deal is hidden or not
     * @type {boolean}
     * @memberof DealResponse200Data
     */
    org_hidden?: boolean;
    /**
     * If the person that is associated with the deal is hidden or not
     * @type {boolean}
     * @memberof DealResponse200Data
     */
    person_hidden?: boolean;
}

/**
 * Check if a given object implements the DealResponse200Data interface.
 */
export function instanceOfDealResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealResponse200DataFromJSON(json: any): DealResponse200Data {
    return DealResponse200DataFromJSONTyped(json, false);
}

export function DealResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DealResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'creator_user_id': !exists(json, 'creator_user_id') ? undefined : DealNonStrictAllOfCreatorUserIdFromJSON(json['creator_user_id']),
        'user_id': !exists(json, 'user_id') ? undefined : DealUserDataWithIdFromJSON(json['user_id']),
        'person_id': !exists(json, 'person_id') ? undefined : DealPersonDataWithIdFromJSON(json['person_id']),
        'org_id': !exists(json, 'org_id') ? undefined : DealOrganizationDataWithIdFromJSON(json['org_id']),
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

export function DealResponse200DataToJSON(value?: DealResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'creator_user_id': DealNonStrictAllOfCreatorUserIdToJSON(value.creator_user_id),
        'user_id': DealUserDataWithIdToJSON(value.user_id),
        'person_id': DealPersonDataWithIdToJSON(value.person_id),
        'org_id': DealOrganizationDataWithIdToJSON(value.org_id),
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

