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

export class AddNoteRequestAllOf1 {
    /**
    * The ID of the user who will be marked as the author of the note. Only an admin can change the author.
    */
    'userId'?: number;
    /**
    * The optional creation date & time of the note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
    */
    'addTime'?: string;
    'pinnedToLeadFlag'?: AddNoteRequestAllOf1.PinnedToLeadFlagEnum;
    'pinnedToDealFlag'?: AddNoteRequestAllOf1.PinnedToDealFlagEnum;
    'pinnedToOrganizationFlag'?: AddNoteRequestAllOf1.PinnedToOrganizationFlagEnum;
    'pinnedToPersonFlag'?: AddNoteRequestAllOf1.PinnedToPersonFlagEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "type": "AddNoteRequestAllOf1.PinnedToLeadFlagEnum"
        },
        {
            "name": "pinnedToDealFlag",
            "baseName": "pinned_to_deal_flag",
            "type": "AddNoteRequestAllOf1.PinnedToDealFlagEnum"
        },
        {
            "name": "pinnedToOrganizationFlag",
            "baseName": "pinned_to_organization_flag",
            "type": "AddNoteRequestAllOf1.PinnedToOrganizationFlagEnum"
        },
        {
            "name": "pinnedToPersonFlag",
            "baseName": "pinned_to_person_flag",
            "type": "AddNoteRequestAllOf1.PinnedToPersonFlagEnum"
        }    ];

    static getAttributeTypeMap() {
        return AddNoteRequestAllOf1.attributeTypeMap;
    }
}

export namespace AddNoteRequestAllOf1 {
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
