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
import type { DeleteConversation404ResponseAdditionalData } from './DeleteConversation404ResponseAdditionalData';
import {
    DeleteConversation404ResponseAdditionalDataFromJSON,
    DeleteConversation404ResponseAdditionalDataFromJSONTyped,
    DeleteConversation404ResponseAdditionalDataToJSON,
} from './DeleteConversation404ResponseAdditionalData';

/**
 * 
 * @export
 * @interface DeleteConversation404Response
 */
export interface DeleteConversation404Response {
    /**
     * 
     * @type {boolean}
     * @memberof DeleteConversation404Response
     */
    success?: boolean;
    /**
     * The error description
     * @type {string}
     * @memberof DeleteConversation404Response
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteConversation404Response
     */
    error_info?: string;
    /**
     * 
     * @type {DeleteConversation404ResponseAdditionalData}
     * @memberof DeleteConversation404Response
     */
    additional_data?: DeleteConversation404ResponseAdditionalData;
}

/**
 * Check if a given object implements the DeleteConversation404Response interface.
 */
export function instanceOfDeleteConversation404Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteConversation404ResponseFromJSON(json: any): DeleteConversation404Response {
    return DeleteConversation404ResponseFromJSONTyped(json, false);
}

export function DeleteConversation404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteConversation404Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'error_info': !exists(json, 'error_info') ? undefined : json['error_info'],
        'additional_data': !exists(json, 'additional_data') ? undefined : DeleteConversation404ResponseAdditionalDataFromJSON(json['additional_data']),
    };
}

export function DeleteConversation404ResponseToJSON(value?: DeleteConversation404Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'error': value.error,
        'error_info': value.error_info,
        'additional_data': DeleteConversation404ResponseAdditionalDataToJSON(value.additional_data),
    };
}
