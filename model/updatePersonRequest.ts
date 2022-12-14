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
import { BasicPersonRequestEmailInner } from './basicPersonRequestEmailInner';
import { PersonItemAllOfPhoneInner } from './personItemAllOfPhoneInner';

export class UpdatePersonRequest {
    /**
    * The name of the person
    */
    'name'?: string;
    /**
    * The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
    */
    'ownerId'?: number;
    /**
    * The ID of the organization this person will belong to
    */
    'orgId'?: number;
    /**
    * List of email data related to the person
    */
    'email'?: Array<BasicPersonRequestEmailInner>;
    /**
    * The primary email of the person
    */
    'primaryEmail'?: string;
    /**
    * List of phone data related to the person
    */
    'phone'?: Array<PersonItemAllOfPhoneInner>;
    'visibleTo'?: UpdatePersonRequest.VisibleToEnum;
    'marketingStatus'?: UpdatePersonRequest.MarketingStatusEnum;
    /**
    * The optional creation date & time of the person in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
    */
    'addTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
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
            "name": "email",
            "baseName": "email",
            "type": "Array<BasicPersonRequestEmailInner>"
        },
        {
            "name": "primaryEmail",
            "baseName": "primary_email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "Array<PersonItemAllOfPhoneInner>"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "UpdatePersonRequest.VisibleToEnum"
        },
        {
            "name": "marketingStatus",
            "baseName": "marketing_status",
            "type": "UpdatePersonRequest.MarketingStatusEnum"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePersonRequest.attributeTypeMap;
    }
}

export namespace UpdatePersonRequest {
    export enum VisibleToEnum {
        _1 = <any> '1',
        _3 = <any> '3',
        _5 = <any> '5',
        _7 = <any> '7'
    }
    export enum MarketingStatusEnum {
        NoConsent = <any> 'no_consent',
        Unsubscribed = <any> 'unsubscribed',
        Subscribed = <any> 'subscribed',
        Archived = <any> 'archived'
    }
}
