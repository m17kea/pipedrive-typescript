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

export class ReceiveMessageRequestAttachmentsInner {
    /**
    * The ID of the attachment
    */
    'id': string;
    /**
    * The mime-type of the attachment
    */
    'type': string;
    /**
    * The name of the attachment
    */
    'name'?: string;
    /**
    * The size of the attachment
    */
    'size'?: number;
    /**
    * A URL to the file
    */
    'url': string;
    /**
    * A URL to a preview picture of the file
    */
    'previewUrl'?: string;
    /**
    * If true, it will use the getMessageById endpoint for fetching updated attachment\'s urls. Find out more [here](https://pipedrive.readme.io/docs/implementing-messaging-app-extension)
    */
    'linkExpires'?: boolean = false;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "previewUrl",
            "baseName": "preview_url",
            "type": "string"
        },
        {
            "name": "linkExpires",
            "baseName": "link_expires",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReceiveMessageRequestAttachmentsInner.attributeTypeMap;
    }
}
