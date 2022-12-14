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

export class AddNoteRequestAllOf {
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
        }    ];

    static getAttributeTypeMap() {
        return AddNoteRequestAllOf.attributeTypeMap;
    }
}

