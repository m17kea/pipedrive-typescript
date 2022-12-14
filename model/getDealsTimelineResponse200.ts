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
import { GetDealsTimelineResponse200Data } from './getDealsTimelineResponse200Data';

export class GetDealsTimelineResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: GetDealsTimelineResponse200Data;

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
            "type": "GetDealsTimelineResponse200Data"
        }    ];

    static getAttributeTypeMap() {
        return GetDealsTimelineResponse200.attributeTypeMap;
    }
}

