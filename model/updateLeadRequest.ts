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
import { UpdateLeadRequestValue } from './updateLeadRequestValue';

export class UpdateLeadRequest {
    /**
    * The name of the lead
    */
    'title'?: string | null;
    /**
    * The ID of the user which will be the owner of the created lead. If not provided, the user making the request will be used.
    */
    'ownerId'?: number;
    /**
    * The IDs of the lead labels which will be associated with the lead
    */
    'labelIds'?: Array<string>;
    /**
    * The ID of a person which this lead will be linked to. If the person does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both. 
    */
    'personId'?: number | null;
    /**
    * The ID of an organization which this lead will be linked to. If the organization does not exist yet, it needs to be created first. A lead always has to be linked to a person or organization or both.
    */
    'organizationId'?: number | null;
    /**
    * A flag indicating whether the lead is archived or not
    */
    'isArchived'?: boolean;
    'value'?: UpdateLeadRequestValue | null;
    /**
    * The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
    */
    'expectedCloseDate'?: string | null;
    'visibleTo'?: UpdateLeadRequest.VisibleToEnum;
    /**
    * A flag indicating whether the lead was seen by someone in the Pipedrive UI
    */
    'wasSeen'?: UpdateLeadRequest.WasSeenEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "number"
        },
        {
            "name": "labelIds",
            "baseName": "label_ids",
            "type": "Array<string>"
        },
        {
            "name": "personId",
            "baseName": "person_id",
            "type": "number"
        },
        {
            "name": "organizationId",
            "baseName": "organization_id",
            "type": "number"
        },
        {
            "name": "isArchived",
            "baseName": "is_archived",
            "type": "boolean"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "UpdateLeadRequestValue"
        },
        {
            "name": "expectedCloseDate",
            "baseName": "expected_close_date",
            "type": "string"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "UpdateLeadRequest.VisibleToEnum"
        },
        {
            "name": "wasSeen",
            "baseName": "was_seen",
            "type": "UpdateLeadRequest.WasSeenEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdateLeadRequest.attributeTypeMap;
    }
}

export namespace UpdateLeadRequest {
    export enum VisibleToEnum {
        _1 = <any> '1',
        _3 = <any> '3',
        _5 = <any> '5',
        _7 = <any> '7'
    }
    export enum WasSeenEnum {
        True = <any> true,
        False = <any> false
    }
}