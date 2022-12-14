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
import { AddChannel400ResponseAdditionalData } from './addChannel400ResponseAdditionalData';

export class AddChannel400Response {
    'success'?: boolean;
    /**
    * The error description
    */
    'error'?: string;
    'errorInfo'?: string;
    'additionalData'?: AddChannel400ResponseAdditionalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "errorInfo",
            "baseName": "error_info",
            "type": "string"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "AddChannel400ResponseAdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return AddChannel400Response.attributeTypeMap;
    }
}

