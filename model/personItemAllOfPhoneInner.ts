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

export class PersonItemAllOfPhoneInner {
    /**
    * The phone number
    */
    'value'?: string;
    /**
    * Boolean that indicates if phone number is primary for the person or not
    */
    'primary'?: boolean;
    /**
    * The label that indicates the type of the phone number. (Possible values - work, home, mobile or other)
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "boolean"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PersonItemAllOfPhoneInner.attributeTypeMap;
    }
}
