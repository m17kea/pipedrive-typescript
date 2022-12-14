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
* The ID of the deal which is associated with the item
*/
export class GetActivitiesResponse200RelatedObjectsDealDEALID {
    /**
    * The ID of the deal associated with the item
    */
    'id'?: number;
    /**
    * The title of the deal associated with the item
    */
    'title'?: string;
    /**
    * The status of the deal associated with the item
    */
    'status'?: string;
    /**
    * The value of the deal that is associated with the item
    */
    'value'?: number;
    /**
    * The currency of the deal value
    */
    'currency'?: string;
    /**
    * The ID of the stage the deal is currently at
    */
    'stageId'?: number;
    /**
    * The ID of the pipeline the deal is in
    */
    'pipelineId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "stageId",
            "baseName": "stage_id",
            "type": "number"
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetActivitiesResponse200RelatedObjectsDealDEALID.attributeTypeMap;
    }
}

