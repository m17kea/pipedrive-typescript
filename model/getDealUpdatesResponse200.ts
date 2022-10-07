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
import { GetDealUpdatesResponse200AllOfDataInner } from './getDealUpdatesResponse200AllOfDataInner';
import { GetDealUpdatesResponse200AllOfRelatedObjects } from './getDealUpdatesResponse200AllOfRelatedObjects';

export class GetDealUpdatesResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: Array<GetDealUpdatesResponse200AllOfDataInner>;
    'additionalData'?: FieldsResponse200AllOfAdditionalData;
    'relatedObjects'?: GetDealUpdatesResponse200AllOfRelatedObjects;

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
            "type": "Array<GetDealUpdatesResponse200AllOfDataInner>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "FieldsResponse200AllOfAdditionalData"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "GetDealUpdatesResponse200AllOfRelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return GetDealUpdatesResponse200.attributeTypeMap;
    }
}

