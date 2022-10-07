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
import { GetAssociatedFilesResponse200AllOfDataInner } from './getAssociatedFilesResponse200AllOfDataInner';

export class GetAssociatedFilesResponse200AllOf {
    /**
    * The array of files
    */
    'data'?: Array<GetAssociatedFilesResponse200AllOfDataInner>;
    'additionalData'?: FieldsResponse200AllOfAdditionalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetAssociatedFilesResponse200AllOfDataInner>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "FieldsResponse200AllOfAdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return GetAssociatedFilesResponse200AllOf.attributeTypeMap;
    }
}

