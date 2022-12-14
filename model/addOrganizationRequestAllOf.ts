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

export class AddOrganizationRequestAllOf {
    /**
    * The name of the organization
    */
    'name': string;
    /**
    * The optional creation date & time of the organization in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
    */
    'addTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddOrganizationRequestAllOf.attributeTypeMap;
    }
}

