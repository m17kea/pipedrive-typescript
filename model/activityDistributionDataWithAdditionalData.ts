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
import { ActivityDistributionDataWithAdditionalDataAllOfActivityDistribution } from './activityDistributionDataWithAdditionalDataAllOfActivityDistribution';

export class ActivityDistributionDataWithAdditionalData {
    'activityDistribution'?: ActivityDistributionDataWithAdditionalDataAllOfActivityDistribution;
    /**
    * Pagination start
    */
    'start'?: number;
    /**
    * Items shown per page
    */
    'limit'?: number;
    /**
    * If there are more list items in the collection than displayed or not
    */
    'moreItemsInCollection'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activityDistribution",
            "baseName": "activity_distribution",
            "type": "ActivityDistributionDataWithAdditionalDataAllOfActivityDistribution"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "moreItemsInCollection",
            "baseName": "more_items_in_collection",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ActivityDistributionDataWithAdditionalData.attributeTypeMap;
    }
}
