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

export class CallLogResponse409 {
    'success'?: boolean;
    /**
    * The description of the error
    */
    'error'?: string;
    /**
    * A message describing how to solve the problem
    */
    'errorInfo'?: string;
    'data'?: object;
    'additionalData'?: object;

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
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return CallLogResponse409.attributeTypeMap;
    }
}

