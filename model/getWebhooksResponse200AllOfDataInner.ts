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

export class GetWebhooksResponse200AllOfDataInner {
    /**
    * The ID of the Webhook
    */
    'id'?: number;
    /**
    * The ID of the company related to the Webhook
    */
    'companyId'?: number;
    /**
    * The ID of the user who owns the Webhook
    */
    'ownerId'?: number;
    /**
    * The ID of the user related to the Webhook
    */
    'userId'?: number;
    /**
    * The Webhook action
    */
    'eventAction'?: string;
    /**
    * The Webhook object
    */
    'eventObject'?: string;
    /**
    * The subscription URL of the Webhook
    */
    'subscriptionUrl'?: string;
    'isActive'?: GetWebhooksResponse200AllOfDataInner.IsActiveEnum = GetWebhooksResponse200AllOfDataInner.IsActiveEnum.NUMBER_1;
    /**
    * The date when the Webhook was added
    */
    'addTime'?: Date;
    /**
    * The date when the Webhook was removed (if removed)
    */
    'removeTime'?: Date | null;
    /**
    * The type of the Webhook
    */
    'type'?: GetWebhooksResponse200AllOfDataInner.TypeEnum;
    /**
    * The username of the `subscription_url` of the Webhook
    */
    'httpAuthUser'?: string | null;
    /**
    * The password of the `subscription_url` of the Webhook
    */
    'httpAuthPassword'?: string | null;
    /**
    * Any additional data related to the Webhook
    */
    'additionalData'?: object;
    /**
    * The removal reason of the Webhook (if removed)
    */
    'removeReason'?: string | null;
    /**
    * The last delivery time of the Webhook
    */
    'lastDeliveryTime'?: Date | null;
    /**
    * The last delivery HTTP status of the Webhook
    */
    'lastHttpStatus'?: number | null;
    /**
    * The ID of the admin of the Webhook
    */
    'adminId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "companyId",
            "baseName": "company_id",
            "type": "number"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "eventAction",
            "baseName": "event_action",
            "type": "string"
        },
        {
            "name": "eventObject",
            "baseName": "event_object",
            "type": "string"
        },
        {
            "name": "subscriptionUrl",
            "baseName": "subscription_url",
            "type": "string"
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "GetWebhooksResponse200AllOfDataInner.IsActiveEnum"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "Date"
        },
        {
            "name": "removeTime",
            "baseName": "remove_time",
            "type": "Date"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GetWebhooksResponse200AllOfDataInner.TypeEnum"
        },
        {
            "name": "httpAuthUser",
            "baseName": "http_auth_user",
            "type": "string"
        },
        {
            "name": "httpAuthPassword",
            "baseName": "http_auth_password",
            "type": "string"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "object"
        },
        {
            "name": "removeReason",
            "baseName": "remove_reason",
            "type": "string"
        },
        {
            "name": "lastDeliveryTime",
            "baseName": "last_delivery_time",
            "type": "Date"
        },
        {
            "name": "lastHttpStatus",
            "baseName": "last_http_status",
            "type": "number"
        },
        {
            "name": "adminId",
            "baseName": "admin_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetWebhooksResponse200AllOfDataInner.attributeTypeMap;
    }
}

export namespace GetWebhooksResponse200AllOfDataInner {
    export enum IsActiveEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum TypeEnum {
        General = <any> 'general',
        App = <any> 'app'
    }
}
