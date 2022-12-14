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

export class GetRecentsResponse200DataInnerAnyOf {
    'item'?: GetRecentsResponse200DataInnerAnyOf.ItemEnum;
    'id'?: number;
    'data'?: ActivityResponseObject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "item",
            "baseName": "item",
            "type": "GetRecentsResponse200DataInnerAnyOf.ItemEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ActivityResponseObject"
        }    ];

    static getAttributeTypeMap() {
        return GetRecentsResponse200DataInnerAnyOf.attributeTypeMap;
    }
}

export namespace GetRecentsResponse200DataInnerAnyOf {
    export enum ItemEnum {
        Activity = <any> 'activity'
    }
}
