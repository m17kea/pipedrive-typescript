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
import { GetActivitiesResponse200RelatedObjects } from './getActivitiesResponse200RelatedObjects';
import { GetproductResponse200 } from './getproductResponse200';

export class GetProductsResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    /**
    * Array containing data for all products
    */
    'data'?: Array<GetproductResponse200>;
    'additionalData'?: FieldsResponse200AllOfAdditionalData;
    'relatedObjects'?: GetActivitiesResponse200RelatedObjects;

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
            "type": "Array<GetproductResponse200>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "FieldsResponse200AllOfAdditionalData"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "GetActivitiesResponse200RelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return GetProductsResponse200.attributeTypeMap;
    }
}

