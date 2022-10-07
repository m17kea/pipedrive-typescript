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

import { RequestFile } from './models';
import { Owner } from './owner';
import { RelationshipOrganizationInfoItemWithActiveFlag } from './relationshipOrganizationInfoItemWithActiveFlag';

export class AdditionalPersonInfo {
    'ownerId'?: Owner;
    'orgId'?: RelationshipOrganizationInfoItemWithActiveFlag;
    /**
    * The name of the person
    */
    'name'?: string;
    /**
    * The first name of the person
    */
    'firstName'?: string;
    /**
    * The last name of the person
    */
    'lastName'?: string;
    /**
    * The count of email messages related to the person
    */
    'emailMessagesCount'?: number;
    /**
    * The count of activities related to the person
    */
    'activitiesCount'?: number;
    /**
    * The count of done activities related to the person
    */
    'doneActivitiesCount'?: number;
    /**
    * The count of undone activities related to the person
    */
    'undoneActivitiesCount'?: number;
    /**
    * The count of files related to the person
    */
    'filesCount'?: number;
    /**
    * The count of notes related to the person
    */
    'notesCount'?: number;
    /**
    * The count of followers related to the person
    */
    'followersCount'?: number;
    /**
    * The date and time of the last incoming email associated with the person
    */
    'lastIncomingMailTime'?: string;
    /**
    * The date and time of the last outgoing email associated with the person
    */
    'lastOutgoingMailTime'?: string;
    /**
    * The count of open deals related with the item
    */
    'openDealsCount'?: number;
    /**
    * The count of related open deals related with the item
    */
    'relatedOpenDealsCount'?: number;
    /**
    * The count of closed deals related with the item
    */
    'closedDealsCount'?: number;
    /**
    * The count of related closed deals related with the item
    */
    'relatedClosedDealsCount'?: number;
    /**
    * The count of won deals related with the item
    */
    'wonDealsCount'?: number;
    /**
    * The count of related won deals related with the item
    */
    'relatedWonDealsCount'?: number;
    /**
    * The count of lost deals related with the item
    */
    'lostDealsCount'?: number;
    /**
    * The count of related lost deals related with the item
    */
    'relatedLostDealsCount'?: number;
    /**
    * The date of the next activity associated with the deal
    */
    'nextActivityDate'?: string;
    /**
    * The time of the next activity associated with the deal
    */
    'nextActivityTime'?: string;
    /**
    * The ID of the next activity associated with the deal
    */
    'nextActivityId'?: number | null;
    /**
    * The ID of the last activity associated with the deal
    */
    'lastActivityId'?: number | null;
    /**
    * The date of the last activity associated with the deal
    */
    'lastActivityDate'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "Owner"
        },
        {
            "name": "orgId",
            "baseName": "org_id",
            "type": "RelationshipOrganizationInfoItemWithActiveFlag"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "emailMessagesCount",
            "baseName": "email_messages_count",
            "type": "number"
        },
        {
            "name": "activitiesCount",
            "baseName": "activities_count",
            "type": "number"
        },
        {
            "name": "doneActivitiesCount",
            "baseName": "done_activities_count",
            "type": "number"
        },
        {
            "name": "undoneActivitiesCount",
            "baseName": "undone_activities_count",
            "type": "number"
        },
        {
            "name": "filesCount",
            "baseName": "files_count",
            "type": "number"
        },
        {
            "name": "notesCount",
            "baseName": "notes_count",
            "type": "number"
        },
        {
            "name": "followersCount",
            "baseName": "followers_count",
            "type": "number"
        },
        {
            "name": "lastIncomingMailTime",
            "baseName": "last_incoming_mail_time",
            "type": "string"
        },
        {
            "name": "lastOutgoingMailTime",
            "baseName": "last_outgoing_mail_time",
            "type": "string"
        },
        {
            "name": "openDealsCount",
            "baseName": "open_deals_count",
            "type": "number"
        },
        {
            "name": "relatedOpenDealsCount",
            "baseName": "related_open_deals_count",
            "type": "number"
        },
        {
            "name": "closedDealsCount",
            "baseName": "closed_deals_count",
            "type": "number"
        },
        {
            "name": "relatedClosedDealsCount",
            "baseName": "related_closed_deals_count",
            "type": "number"
        },
        {
            "name": "wonDealsCount",
            "baseName": "won_deals_count",
            "type": "number"
        },
        {
            "name": "relatedWonDealsCount",
            "baseName": "related_won_deals_count",
            "type": "number"
        },
        {
            "name": "lostDealsCount",
            "baseName": "lost_deals_count",
            "type": "number"
        },
        {
            "name": "relatedLostDealsCount",
            "baseName": "related_lost_deals_count",
            "type": "number"
        },
        {
            "name": "nextActivityDate",
            "baseName": "next_activity_date",
            "type": "string"
        },
        {
            "name": "nextActivityTime",
            "baseName": "next_activity_time",
            "type": "string"
        },
        {
            "name": "nextActivityId",
            "baseName": "next_activity_id",
            "type": "number"
        },
        {
            "name": "lastActivityId",
            "baseName": "last_activity_id",
            "type": "number"
        },
        {
            "name": "lastActivityDate",
            "baseName": "last_activity_date",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalPersonInfo.attributeTypeMap;
    }
}

