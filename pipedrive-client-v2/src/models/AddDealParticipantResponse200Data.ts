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
import type { Owner } from './Owner';
import {
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
} from './Owner';
import type { PersonItemAllOfEmailInner } from './PersonItemAllOfEmailInner';
import {
    PersonItemAllOfEmailInnerFromJSON,
    PersonItemAllOfEmailInnerFromJSONTyped,
    PersonItemAllOfEmailInnerToJSON,
} from './PersonItemAllOfEmailInner';
import type { PersonItemAllOfPhoneInner } from './PersonItemAllOfPhoneInner';
import {
    PersonItemAllOfPhoneInnerFromJSON,
    PersonItemAllOfPhoneInnerFromJSONTyped,
    PersonItemAllOfPhoneInnerToJSON,
} from './PersonItemAllOfPhoneInner';
import type { PersonItemAllOfPictureId } from './PersonItemAllOfPictureId';
import {
    PersonItemAllOfPictureIdFromJSON,
    PersonItemAllOfPictureIdFromJSONTyped,
    PersonItemAllOfPictureIdToJSON,
} from './PersonItemAllOfPictureId';
import type { RelationshipOrganizationInfoItemWithActiveFlag } from './RelationshipOrganizationInfoItemWithActiveFlag';
import {
    RelationshipOrganizationInfoItemWithActiveFlagFromJSON,
    RelationshipOrganizationInfoItemWithActiveFlagFromJSONTyped,
    RelationshipOrganizationInfoItemWithActiveFlagToJSON,
} from './RelationshipOrganizationInfoItemWithActiveFlag';

/**
 * The object of participant
 * @export
 * @interface AddDealParticipantResponse200Data
 */
export interface AddDealParticipantResponse200Data {
    /**
     * The ID of the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    id?: number;
    /**
     * The ID of the company related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    company_id?: number;
    /**
     * Whether the person is active or not
     * @type {boolean}
     * @memberof AddDealParticipantResponse200Data
     */
    active_flag?: boolean;
    /**
     * List of phone data related to the person
     * @type {Array<PersonItemAllOfPhoneInner>}
     * @memberof AddDealParticipantResponse200Data
     */
    phone?: Array<PersonItemAllOfPhoneInner>;
    /**
     * List of email data related to the person
     * @type {Array<PersonItemAllOfEmailInner>}
     * @memberof AddDealParticipantResponse200Data
     */
    email?: Array<PersonItemAllOfEmailInner>;
    /**
     * The primary email of the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    primary_email?: string;
    /**
     * The first letter of the name of the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    first_char?: string;
    /**
     * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    add_time?: string;
    /**
     * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    update_time?: string;
    /**
     * The visibility group ID of who can see the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    visible_to?: string;
    /**
     * 
     * @type {PersonItemAllOfPictureId}
     * @memberof AddDealParticipantResponse200Data
     */
    picture_id?: PersonItemAllOfPictureId;
    /**
     * The label assigned to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    label?: number;
    /**
     * The name of the organization associated with the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    org_name?: string;
    /**
     * The name of the owner associated with the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    owner_name?: string;
    /**
     * The BCC email associated with the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    cc_email?: string;
    /**
     * 
     * @type {Owner}
     * @memberof AddDealParticipantResponse200Data
     */
    owner_id?: Owner;
    /**
     * 
     * @type {RelationshipOrganizationInfoItemWithActiveFlag}
     * @memberof AddDealParticipantResponse200Data
     */
    org_id?: RelationshipOrganizationInfoItemWithActiveFlag;
    /**
     * The name of the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    name?: string;
    /**
     * The first name of the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    first_name?: string;
    /**
     * The last name of the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    last_name?: string;
    /**
     * The count of email messages related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    email_messages_count?: number;
    /**
     * The count of activities related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    activities_count?: number;
    /**
     * The count of done activities related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    done_activities_count?: number;
    /**
     * The count of undone activities related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    undone_activities_count?: number;
    /**
     * The count of files related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    files_count?: number;
    /**
     * The count of notes related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    notes_count?: number;
    /**
     * The count of followers related to the person
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    followers_count?: number;
    /**
     * The date and time of the last incoming email associated with the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    last_incoming_mail_time?: string;
    /**
     * The date and time of the last outgoing email associated with the person
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    last_outgoing_mail_time?: string;
    /**
     * The count of open deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    open_deals_count?: number;
    /**
     * The count of related open deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    related_open_deals_count?: number;
    /**
     * The count of closed deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    closed_deals_count?: number;
    /**
     * The count of related closed deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    related_closed_deals_count?: number;
    /**
     * The count of won deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    won_deals_count?: number;
    /**
     * The count of related won deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    related_won_deals_count?: number;
    /**
     * The count of lost deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    lost_deals_count?: number;
    /**
     * The count of related lost deals related with the item
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    related_lost_deals_count?: number;
    /**
     * The date of the next activity associated with the deal
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    next_activity_date?: string;
    /**
     * The time of the next activity associated with the deal
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    next_activity_time?: string;
    /**
     * The ID of the next activity associated with the deal
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    next_activity_id?: number | null;
    /**
     * The ID of the last activity associated with the deal
     * @type {number}
     * @memberof AddDealParticipantResponse200Data
     */
    last_activity_id?: number | null;
    /**
     * The date of the last activity associated with the deal
     * @type {string}
     * @memberof AddDealParticipantResponse200Data
     */
    last_activity_date?: string | null;
}

/**
 * Check if a given object implements the AddDealParticipantResponse200Data interface.
 */
export function instanceOfAddDealParticipantResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddDealParticipantResponse200DataFromJSON(json: any): AddDealParticipantResponse200Data {
    return AddDealParticipantResponse200DataFromJSONTyped(json, false);
}

export function AddDealParticipantResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDealParticipantResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'company_id': !exists(json, 'company_id') ? undefined : json['company_id'],
        'active_flag': !exists(json, 'active_flag') ? undefined : json['active_flag'],
        'phone': !exists(json, 'phone') ? undefined : ((json['phone'] as Array<any>).map(PersonItemAllOfPhoneInnerFromJSON)),
        'email': !exists(json, 'email') ? undefined : ((json['email'] as Array<any>).map(PersonItemAllOfEmailInnerFromJSON)),
        'primary_email': !exists(json, 'primary_email') ? undefined : json['primary_email'],
        'first_char': !exists(json, 'first_char') ? undefined : json['first_char'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
        'update_time': !exists(json, 'update_time') ? undefined : json['update_time'],
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
        'picture_id': !exists(json, 'picture_id') ? undefined : PersonItemAllOfPictureIdFromJSON(json['picture_id']),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'org_name': !exists(json, 'org_name') ? undefined : json['org_name'],
        'owner_name': !exists(json, 'owner_name') ? undefined : json['owner_name'],
        'cc_email': !exists(json, 'cc_email') ? undefined : json['cc_email'],
        'owner_id': !exists(json, 'owner_id') ? undefined : OwnerFromJSON(json['owner_id']),
        'org_id': !exists(json, 'org_id') ? undefined : RelationshipOrganizationInfoItemWithActiveFlagFromJSON(json['org_id']),
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
    };
}

export function AddDealParticipantResponse200DataToJSON(value?: AddDealParticipantResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'company_id': value.company_id,
        'active_flag': value.active_flag,
        'phone': value.phone === undefined ? undefined : ((value.phone as Array<any>).map(PersonItemAllOfPhoneInnerToJSON)),
        'email': value.email === undefined ? undefined : ((value.email as Array<any>).map(PersonItemAllOfEmailInnerToJSON)),
        'primary_email': value.primary_email,
        'first_char': value.first_char,
        'add_time': value.add_time,
        'update_time': value.update_time,
        'visible_to': value.visible_to,
        'picture_id': PersonItemAllOfPictureIdToJSON(value.picture_id),
        'label': value.label,
        'org_name': value.org_name,
        'owner_name': value.owner_name,
        'cc_email': value.cc_email,
        'owner_id': OwnerToJSON(value.owner_id),
        'org_id': RelationshipOrganizationInfoItemWithActiveFlagToJSON(value.org_id),
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
    };
}

