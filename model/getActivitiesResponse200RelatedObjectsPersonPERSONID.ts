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
import { GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner } from './getActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner';
import { GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner } from './getActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner';

/**
* The ID of the person associated with the item
*/
export class GetActivitiesResponse200RelatedObjectsPersonPERSONID {
    /**
    * The ID of the person associated with the item
    */
    'id'?: number;
    /**
    * The name of the person associated with the item
    */
    'name'?: string;
    /**
    * The emails of the person associated with the item
    */
    'email'?: Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner>;
    /**
    * The phone numbers of the person associated with the item
    */
    'phone'?: Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner>;
    /**
    * The ID of the owner of the person that is associated with the item
    */
    'ownerId'?: number;

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
            "name": "email",
            "baseName": "email",
            "type": "Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner>"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner>"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetActivitiesResponse200RelatedObjectsPersonPERSONID.attributeTypeMap;
    }
}

