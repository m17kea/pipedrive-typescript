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

export class GetAssociatedUpdatesResponse200AllOfDataInner {
    /**
    * The type of the person update. (Possible object types - organizationChange, dealChange, file, activity)
    */
    'object'?: string;
    /**
    * The creation date and time of the update
    */
    'timestamp'?: string;
    /**
    * The data related to the update
    */
    'data'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return GetAssociatedUpdatesResponse200AllOfDataInner.attributeTypeMap;
    }
}

