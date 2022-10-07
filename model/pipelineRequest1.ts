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

export class PipelineRequest1 {
    /**
    * The name of the pipeline
    */
    'name'?: string;
    'dealProbability'?: PipelineRequest1.DealProbabilityEnum;
    /**
    * Defines the order of pipelines. First order (`order_nr=0`) is the default pipeline.
    */
    'orderNr'?: number;
    'active'?: PipelineRequest1.ActiveEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "dealProbability",
            "baseName": "deal_probability",
            "type": "PipelineRequest1.DealProbabilityEnum"
        },
        {
            "name": "orderNr",
            "baseName": "order_nr",
            "type": "number"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "PipelineRequest1.ActiveEnum"
        }    ];

    static getAttributeTypeMap() {
        return PipelineRequest1.attributeTypeMap;
    }
}

export namespace PipelineRequest1 {
    export enum DealProbabilityEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum ActiveEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}
