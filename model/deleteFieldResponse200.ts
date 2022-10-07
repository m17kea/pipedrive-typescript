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
import { DeleteFieldResponse200AllOfData } from './deleteFieldResponse200AllOfData';

export class DeleteFieldResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: DeleteFieldResponse200AllOfData;

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
            "type": "DeleteFieldResponse200AllOfData"
        }    ];

    static getAttributeTypeMap() {
        return DeleteFieldResponse200.attributeTypeMap;
    }
}
