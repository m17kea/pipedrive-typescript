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
import { DeleteOrganizationsResponse200Data } from './deleteOrganizationsResponse200Data';

export class DeleteOrganizationsResponse200 {
    /**
    * If the request was successful or not
    */
    'success'?: boolean;
    'data'?: DeleteOrganizationsResponse200Data;

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
            "type": "DeleteOrganizationsResponse200Data"
        }    ];

    static getAttributeTypeMap() {
        return DeleteOrganizationsResponse200.attributeTypeMap;
    }
}

