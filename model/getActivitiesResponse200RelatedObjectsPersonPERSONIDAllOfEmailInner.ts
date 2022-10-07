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

export class GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner {
    /**
    * The type of the email
    */
    'label'?: string;
    /**
    * The email of the associated person
    */
    'value'?: string;
    /**
    * Whether this is the primary email or not
    */
    'primary'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner.attributeTypeMap;
    }
}

