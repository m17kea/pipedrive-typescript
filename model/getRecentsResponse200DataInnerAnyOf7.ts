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
import { BaseOrganizationItem } from './baseOrganizationItem';

export class GetRecentsResponse200DataInnerAnyOf7 {
    'item'?: GetRecentsResponse200DataInnerAnyOf7.ItemEnum;
    'id'?: number;
    'data'?: BaseOrganizationItem;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "item",
            "baseName": "item",
            "type": "GetRecentsResponse200DataInnerAnyOf7.ItemEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "BaseOrganizationItem"
        }    ];

    static getAttributeTypeMap() {
        return GetRecentsResponse200DataInnerAnyOf7.attributeTypeMap;
    }
}

export namespace GetRecentsResponse200DataInnerAnyOf7 {
    export enum ItemEnum {
        Organization = <any> 'organization'
    }
}
