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

export class AddChannel200ResponseData {
    /**
    * The unique channel ID used internally in omnichannel-api and the frontend of the extension
    */
    'id'?: string;
    /**
    * The name of the channel
    */
    'name'?: string;
    /**
    * The URL for an icon that represents your channel
    */
    'avatarUrl'?: string;
    /**
    * The channel ID you specified while creating the channel
    */
    'providerChannelId'?: string;
    /**
    * The client_id of your app in Pipedrive marketplace
    */
    'marketplaceClientId'?: string;
    /**
    * The ID of the user\'s company in Pipedrive
    */
    'pdCompanyId'?: number;
    /**
    * The ID of the user in Pipedrive
    */
    'pdUserId'?: number;
    /**
    * The date and time when your channel was created in the API
    */
    'createdAt'?: Date;
    /**
    * Value of the provider_type sent to this endpoint
    */
    'providerType'?: AddChannel200ResponseData.ProviderTypeEnum;
    /**
    * Value of the template_support sent to this endpoint
    */
    'templateSupport'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "avatarUrl",
            "baseName": "avatar_url",
            "type": "string"
        },
        {
            "name": "providerChannelId",
            "baseName": "provider_channel_id",
            "type": "string"
        },
        {
            "name": "marketplaceClientId",
            "baseName": "marketplace_client_id",
            "type": "string"
        },
        {
            "name": "pdCompanyId",
            "baseName": "pd_company_id",
            "type": "number"
        },
        {
            "name": "pdUserId",
            "baseName": "pd_user_id",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "providerType",
            "baseName": "provider_type",
            "type": "AddChannel200ResponseData.ProviderTypeEnum"
        },
        {
            "name": "templateSupport",
            "baseName": "template_support",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AddChannel200ResponseData.attributeTypeMap;
    }
}

export namespace AddChannel200ResponseData {
    export enum ProviderTypeEnum {
        Facebook = <any> 'facebook',
        Whatsapp = <any> 'whatsapp',
        Other = <any> 'other'
    }
}
