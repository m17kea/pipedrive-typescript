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

/**
* The response data
*/
export class AddOrUpdateRoleSettingResponse200AllOfData {
    /**
    * The ID of the role
    */
    'id'?: number;
    /**
    * The setting
    */
    'dealDefaultVisibility'?: AddOrUpdateRoleSettingResponse200AllOfData.DealDefaultVisibilityEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "dealDefaultVisibility",
            "baseName": "deal_default_visibility",
            "type": "AddOrUpdateRoleSettingResponse200AllOfData.DealDefaultVisibilityEnum"
        }    ];

    static getAttributeTypeMap() {
        return AddOrUpdateRoleSettingResponse200AllOfData.attributeTypeMap;
    }
}

export namespace AddOrUpdateRoleSettingResponse200AllOfData {
    export enum DealDefaultVisibilityEnum {
        NUMBER_1 = <any> 1,
        NUMBER_3 = <any> 3,
        NUMBER_5 = <any> 5,
        NUMBER_7 = <any> 7
    }
}