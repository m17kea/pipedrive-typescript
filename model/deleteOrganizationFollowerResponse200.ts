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
import { DeleteOrganizationFollowerResponse200Data } from './deleteOrganizationFollowerResponse200Data';

export class DeleteOrganizationFollowerResponse200 {
    /**
    * If the request was successful or not
    */
    'success'?: boolean;
    'data'?: DeleteOrganizationFollowerResponse200Data;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "DeleteOrganizationFollowerResponse200Data"
        }    ];

    static getAttributeTypeMap() {
        return DeleteOrganizationFollowerResponse200.attributeTypeMap;
    }
}
