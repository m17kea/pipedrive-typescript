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
import { ActivityDistributionDataWithAdditionalData } from './activityDistributionDataWithAdditionalData';
import { ActivityResponseObject } from './activityResponseObject';

export class GetAssociatedActivitiesResponse200AllOf {
    /**
    * The array of activities
    */
    'data'?: Array<ActivityResponseObject>;
    'additionalData'?: ActivityDistributionDataWithAdditionalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ActivityResponseObject>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "ActivityDistributionDataWithAdditionalData"
        }    ];

    static getAttributeTypeMap() {
        return GetAssociatedActivitiesResponse200AllOf.attributeTypeMap;
    }
}
