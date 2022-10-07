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
* The currency count summary
*/
export class PipelineDetailsAllOfDealsSummaryPerCurrency {
    /**
    * Deals count per currency. This parameter is dynamic and changes according to `currency_id` value.
    */
    'cURRENCYID'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cURRENCYID",
            "baseName": "CURRENCY_ID",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PipelineDetailsAllOfDealsSummaryPerCurrency.attributeTypeMap;
    }
}

