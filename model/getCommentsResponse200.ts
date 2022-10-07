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
import { GetCommentsResponse200DataInner } from './getCommentsResponse200DataInner';
import { GetNotesResponse200AdditionalData } from './getNotesResponse200AdditionalData';

export class GetCommentsResponse200 {
    /**
    * If the request was successful or not
    */
    'success'?: boolean;
    /**
    * The array of comments
    */
    'data'?: Array<GetCommentsResponse200DataInner>;
    'additionalData'?: GetNotesResponse200AdditionalData;

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
            "type": "Array<GetCommentsResponse200DataInner>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "GetNotesResponse200AdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return GetCommentsResponse200.attributeTypeMap;
    }
}
