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
import { ActivityResponseObject } from './activityResponseObject';
import { AddActivityResponse200RelatedObjects } from './addActivityResponse200RelatedObjects';

export class UpdateActivityResponse200 {
    'success'?: boolean;
    'data'?: ActivityResponseObject;
    'relatedObjects'?: AddActivityResponse200RelatedObjects;

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
            "type": "ActivityResponseObject"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "AddActivityResponse200RelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return UpdateActivityResponse200.attributeTypeMap;
    }
}

