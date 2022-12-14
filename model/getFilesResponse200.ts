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
import { GetFilesResponse200AdditionalData } from './getFilesResponse200AdditionalData';
import { GetFilesResponse200DataInner } from './getFilesResponse200DataInner';

export class GetFilesResponse200 {
    /**
    * If the request was successful or not
    */
    'success'?: boolean;
    /**
    * The array of all uploaded files
    */
    'data'?: Array<GetFilesResponse200DataInner>;
    'additionalData'?: GetFilesResponse200AdditionalData;

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
            "type": "Array<GetFilesResponse200DataInner>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "GetFilesResponse200AdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return GetFilesResponse200.attributeTypeMap;
    }
}

