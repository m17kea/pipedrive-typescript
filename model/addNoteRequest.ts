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

export class AddNoteRequest {
    /**
    * The content of the note in HTML format. Subject to sanitization on the back-end.
    */
    'content': string;
    /**
    * The ID of the lead the note will be attached to. This property is required unless one of (`deal_id/person_id/org_id`) is specified.
    */
    'leadId'?: string;
    /**
    * The ID of the deal the note will be attached to. This property is required unless one of (`lead_id/person_id/org_id`) is specified.
    */
    'dealId'?: number;
    /**
    * The ID of the person this note will be attached to. This property is required unless one of (`deal_id/lead_id/org_id`) is specified.
    */
    'personId'?: number;
    /**
    * The ID of the organization this note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id`) is specified.
    */
    'orgId'?: number;
    /**
    * The ID of the user who will be marked as the author of the note. Only an admin can change the author.
    */
    'userId'?: number;
    /**
    * The optional creation date & time of the note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
    */
    'addTime'?: string;
    'pinnedToLeadFlag'?: AddNoteRequest.PinnedToLeadFlagEnum;
    'pinnedToDealFlag'?: AddNoteRequest.PinnedToDealFlagEnum;
    'pinnedToOrganizationFlag'?: AddNoteRequest.PinnedToOrganizationFlagEnum;
    'pinnedToPersonFlag'?: AddNoteRequest.PinnedToPersonFlagEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "leadId",
            "baseName": "lead_id",
            "type": "string"
        },
        {
            "name": "dealId",
            "baseName": "deal_id",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "person_id",
            "type": "number"
        },
        {
            "name": "orgId",
            "baseName": "org_id",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        },
        {
            "name": "pinnedToLeadFlag",
            "baseName": "pinned_to_lead_flag",
            "type": "AddNoteRequest.PinnedToLeadFlagEnum"
        },
        {
            "name": "pinnedToDealFlag",
            "baseName": "pinned_to_deal_flag",
            "type": "AddNoteRequest.PinnedToDealFlagEnum"
        },
        {
            "name": "pinnedToOrganizationFlag",
            "baseName": "pinned_to_organization_flag",
            "type": "AddNoteRequest.PinnedToOrganizationFlagEnum"
        },
        {
            "name": "pinnedToPersonFlag",
            "baseName": "pinned_to_person_flag",
            "type": "AddNoteRequest.PinnedToPersonFlagEnum"
        }    ];

    static getAttributeTypeMap() {
        return AddNoteRequest.attributeTypeMap;
    }
}

export namespace AddNoteRequest {
    export enum PinnedToLeadFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum PinnedToDealFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum PinnedToOrganizationFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum PinnedToPersonFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}