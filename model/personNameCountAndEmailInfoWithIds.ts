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

export class PersonNameCountAndEmailInfoWithIds {
    /**
    * The ID of the owner related to the person
    */
    'ownerId'?: number;
    /**
    * The ID of the organization related to the person
    */
    'orgId'?: number;
    /**
    * The ID of the person with what the main person was merged
    */
    'mergeWhatId'?: number;
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "number"
        },
        {
            "name": "orgId",
            "baseName": "org_id",
            "type": "number"
        },
        {
            "name": "mergeWhatId",
            "baseName": "merge_what_id",
            "type": "number"
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
        }    ];

    static getAttributeTypeMap() {
        return PersonNameCountAndEmailInfoWithIds.attributeTypeMap;
    }
}

