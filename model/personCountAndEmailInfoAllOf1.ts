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

export class PersonCountAndEmailInfoAllOf1 {
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
        return PersonCountAndEmailInfoAllOf1.attributeTypeMap;
    }
}

