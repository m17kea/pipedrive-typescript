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
import { PersonItemAllOfPictureIdAllOf1Pictures } from './personItemAllOfPictureIdAllOf1Pictures';

export class PersonItemAllOfPictureIdAllOf1 {
    /**
    * The type of item the picture is related to
    */
    'itemType'?: string;
    /**
    * The ID of related item
    */
    'itemId'?: number;
    /**
    * Whether the associated picture is active or not
    */
    'activeFlag'?: boolean;
    /**
    * The add time of the picture
    */
    'addTime'?: string;
    /**
    * The update time of the picture
    */
    'updateTime'?: string;
    /**
    * The ID of the user who added the picture
    */
    'addedByUserId'?: number;
    'pictures'?: PersonItemAllOfPictureIdAllOf1Pictures;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemType",
            "baseName": "item_type",
            "type": "string"
        },
        {
            "name": "itemId",
            "baseName": "item_id",
            "type": "number"
        },
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string"
        },
        {
            "name": "addedByUserId",
            "baseName": "added_by_user_id",
            "type": "number"
        },
        {
            "name": "pictures",
            "baseName": "pictures",
            "type": "PersonItemAllOfPictureIdAllOf1Pictures"
        }    ];

    static getAttributeTypeMap() {
        return PersonItemAllOfPictureIdAllOf1.attributeTypeMap;
    }
}

