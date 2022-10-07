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

export class GetDealResponse200AdditionalData {
    /**
    * The BCC email of the deal
    */
    'dropboxEmail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropboxEmail",
            "baseName": "dropbox_email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetDealResponse200AdditionalData.attributeTypeMap;
    }
}

