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
* The ID of the organization associated with the item
*/
export class GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID {
    /**
    * The ID of the organization associated with the item
    */
    'id'?: number;
    /**
    * The name of the organization associated with the item
    */
    'name'?: string;
    /**
    * The number of people connected with the organization that is associated with the item
    */
    'peopleCount'?: number;
    /**
    * The ID of the owner of the organization that is associated with the item
    */
    'ownerId'?: number;
    /**
    * The address of the organization
    */
    'address'?: string;
    /**
    * The BCC email of the organization associated with the item
    */
    'ccEmail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "peopleCount",
            "baseName": "people_count",
            "type": "number"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "number"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "ccEmail",
            "baseName": "cc_email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID.attributeTypeMap;
    }
}

