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
* The details of the duration of the deal being in each stage of the pipeline
*/
export class DealNonStrictWithDetailsAllOfStayInPipelineStages {
    /**
    * The number of seconds a deal has been in each stage of the pipeline
    */
    'timesInStages'?: object;
    /**
    * The order of the deal progression through the pipeline stages
    */
    'orderOfStages'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timesInStages",
            "baseName": "times_in_stages",
            "type": "object"
        },
        {
            "name": "orderOfStages",
            "baseName": "order_of_stages",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return DealNonStrictWithDetailsAllOfStayInPipelineStages.attributeTypeMap;
    }
}

