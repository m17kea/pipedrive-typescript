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

export class MergePersonsRequest {
    /**
    * The ID of the person that will not be overwritten. This person’s data will be prioritized in case of conflict with the other person.
    */
    'mergeWithId': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mergeWithId",
            "baseName": "merge_with_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MergePersonsRequest.attributeTypeMap;
    }
}
