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
import { FieldsResponse200AllOfAdditionalData } from './fieldsResponse200AllOfAdditionalData';
import { GetAssociatedMailMessagesResponse200AllOfDataInner } from './getAssociatedMailMessagesResponse200AllOfDataInner';

export class GetAssociatedMailMessagesResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    /**
    * The array of mail messages
    */
    'data'?: Array<GetAssociatedMailMessagesResponse200AllOfDataInner>;
    'additionalData'?: FieldsResponse200AllOfAdditionalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetAssociatedMailMessagesResponse200AllOfDataInner>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "FieldsResponse200AllOfAdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return GetAssociatedMailMessagesResponse200.attributeTypeMap;
    }
}

