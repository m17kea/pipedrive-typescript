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

export class DealsCountAndActivityInfo {
    /**
    * The count of open deals related with the item
    */
    'openDealsCount'?: number;
    /**
    * The count of related open deals related with the item
    */
    'relatedOpenDealsCount'?: number;
    /**
    * The count of closed deals related with the item
    */
    'closedDealsCount'?: number;
    /**
    * The count of related closed deals related with the item
    */
    'relatedClosedDealsCount'?: number;
    /**
    * The count of won deals related with the item
    */
    'wonDealsCount'?: number;
    /**
    * The count of related won deals related with the item
    */
    'relatedWonDealsCount'?: number;
    /**
    * The count of lost deals related with the item
    */
    'lostDealsCount'?: number;
    /**
    * The count of related lost deals related with the item
    */
    'relatedLostDealsCount'?: number;
    /**
    * The date of the next activity associated with the deal
    */
    'nextActivityDate'?: string;
    /**
    * The time of the next activity associated with the deal
    */
    'nextActivityTime'?: string;
    /**
    * The ID of the next activity associated with the deal
    */
    'nextActivityId'?: number | null;
    /**
    * The ID of the last activity associated with the deal
    */
    'lastActivityId'?: number | null;
    /**
    * The date of the last activity associated with the deal
    */
    'lastActivityDate'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "openDealsCount",
            "baseName": "open_deals_count",
            "type": "number"
        },
        {
            "name": "relatedOpenDealsCount",
            "baseName": "related_open_deals_count",
            "type": "number"
        },
        {
            "name": "closedDealsCount",
            "baseName": "closed_deals_count",
            "type": "number"
        },
        {
            "name": "relatedClosedDealsCount",
            "baseName": "related_closed_deals_count",
            "type": "number"
        },
        {
            "name": "wonDealsCount",
            "baseName": "won_deals_count",
            "type": "number"
        },
        {
            "name": "relatedWonDealsCount",
            "baseName": "related_won_deals_count",
            "type": "number"
        },
        {
            "name": "lostDealsCount",
            "baseName": "lost_deals_count",
            "type": "number"
        },
        {
            "name": "relatedLostDealsCount",
            "baseName": "related_lost_deals_count",
            "type": "number"
        },
        {
            "name": "nextActivityDate",
            "baseName": "next_activity_date",
            "type": "string"
        },
        {
            "name": "nextActivityTime",
            "baseName": "next_activity_time",
            "type": "string"
        },
        {
            "name": "nextActivityId",
            "baseName": "next_activity_id",
            "type": "number"
        },
        {
            "name": "lastActivityId",
            "baseName": "last_activity_id",
            "type": "number"
        },
        {
            "name": "lastActivityDate",
            "baseName": "last_activity_date",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DealsCountAndActivityInfo.attributeTypeMap;
    }
}

