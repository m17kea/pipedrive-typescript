/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddChannelRequest
 */
export interface AddChannelRequest {
    /**
     * The name of the channel
     * @type {string}
     * @memberof AddChannelRequest
     */
    name: string;
    /**
     * The channel ID
     * @type {string}
     * @memberof AddChannelRequest
     */
    provider_channel_id: string;
    /**
     * The URL for an icon that represents your channel
     * @type {string}
     * @memberof AddChannelRequest
     */
    avatar_url?: string;
    /**
     * If true, enables templates logic on UI. Requires getTemplates endpoint implemented. Find out more [here](https://pipedrive.readme.io/docs/implementing-messaging-app-extension).
     * @type {boolean}
     * @memberof AddChannelRequest
     */
    template_support?: boolean;
    /**
     * It controls the icons (like the icon next to the conversation)
     * @type {string}
     * @memberof AddChannelRequest
     */
    provider_type?: AddChannelRequestProviderTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum AddChannelRequestProviderTypeEnum {
    Facebook = 'facebook',
    Whatsapp = 'whatsapp',
    Other = 'other'
}


/**
 * Check if a given object implements the AddChannelRequest interface.
 */
export function instanceOfAddChannelRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "provider_channel_id" in value;

    return isInstance;
}

export function AddChannelRequestFromJSON(json: any): AddChannelRequest {
    return AddChannelRequestFromJSONTyped(json, false);
}

export function AddChannelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddChannelRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'provider_channel_id': json['provider_channel_id'],
        'avatar_url': !exists(json, 'avatar_url') ? undefined : json['avatar_url'],
        'template_support': !exists(json, 'template_support') ? undefined : json['template_support'],
        'provider_type': !exists(json, 'provider_type') ? undefined : json['provider_type'],
    };
}

export function AddChannelRequestToJSON(value?: AddChannelRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'provider_channel_id': value.provider_channel_id,
        'avatar_url': value.avatar_url,
        'template_support': value.template_support,
        'provider_type': value.provider_type,
    };
}

