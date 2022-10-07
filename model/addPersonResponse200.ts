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
import { ListProductsResponse200AllOfRelatedObjects } from './listProductsResponse200AllOfRelatedObjects';
import { PersonItem } from './personItem';

export class AddPersonResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: PersonItem;
    'relatedObjects'?: ListProductsResponse200AllOfRelatedObjects;

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
            "type": "PersonItem"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "ListProductsResponse200AllOfRelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return AddPersonResponse200.attributeTypeMap;
    }
}
