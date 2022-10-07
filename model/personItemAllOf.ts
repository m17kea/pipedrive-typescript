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
import { PersonItemAllOfEmailInner } from './personItemAllOfEmailInner';
import { PersonItemAllOfPhoneInner } from './personItemAllOfPhoneInner';
import { PersonItemAllOfPictureId } from './personItemAllOfPictureId';

export class PersonItemAllOf {
    /**
    * The ID of the person
    */
    'id'?: number;
    /**
    * The ID of the company related to the person
    */
    'companyId'?: number;
    /**
    * Whether the person is active or not
    */
    'activeFlag'?: boolean;
    /**
    * List of phone data related to the person
    */
    'phone'?: Array<PersonItemAllOfPhoneInner>;
    /**
    * List of email data related to the person
    */
    'email'?: Array<PersonItemAllOfEmailInner>;
    /**
    * The primary email of the person
    */
    'primaryEmail'?: string;
    /**
    * The first letter of the name of the person
    */
    'firstChar'?: string;
    /**
    * The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS
    */
    'addTime'?: string;
    /**
    * The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS
    */
    'updateTime'?: string;
    /**
    * The visibility group ID of who can see the person
    */
    'visibleTo'?: string;
    'pictureId'?: PersonItemAllOfPictureId;
    /**
    * The label assigned to the person
    */
    'label'?: number;
    /**
    * The name of the organization associated with the person
    */
    'orgName'?: string;
    /**
    * The name of the owner associated with the person
    */
    'ownerName'?: string;
    /**
    * The BCC email associated with the person
    */
    'ccEmail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "companyId",
            "baseName": "company_id",
            "type": "number"
        },
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "Array<PersonItemAllOfPhoneInner>"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "Array<PersonItemAllOfEmailInner>"
        },
        {
            "name": "primaryEmail",
            "baseName": "primary_email",
            "type": "string"
        },
        {
            "name": "firstChar",
            "baseName": "first_char",
            "type": "string"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "string"
        },
        {
            "name": "pictureId",
            "baseName": "picture_id",
            "type": "PersonItemAllOfPictureId"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "number"
        },
        {
            "name": "orgName",
            "baseName": "org_name",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "owner_name",
            "type": "string"
        },
        {
            "name": "ccEmail",
            "baseName": "cc_email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PersonItemAllOf.attributeTypeMap;
    }
}
