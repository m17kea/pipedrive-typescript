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

export class GetStagesResponse200DataInnerAllOf {
    /**
    * The name of the pipeline
    */
    'pipelineName'?: string;
    /**
    * The pipeline deal probability. When `true`, overrides the stage probability.
    */
    'pipelineDealProbability'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pipelineName",
            "baseName": "pipeline_name",
            "type": "string"
        },
        {
            "name": "pipelineDealProbability",
            "baseName": "pipeline_deal_probability",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetStagesResponse200DataInnerAllOf.attributeTypeMap;
    }
}
