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
 * @interface WebhooksBadRequestResponse
 */
export interface WebhooksBadRequestResponse {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof WebhooksBadRequestResponse
     */
    success?: boolean;
    /**
     * The status of the response
     * @type {string}
     * @memberof WebhooksBadRequestResponse
     */
    status?: string;
    /**
     * List of errors
     * @type {object}
     * @memberof WebhooksBadRequestResponse
     */
    errors?: object;
}

/**
 * Check if a given object implements the WebhooksBadRequestResponse interface.
 */
export function instanceOfWebhooksBadRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhooksBadRequestResponseFromJSON(json: any): WebhooksBadRequestResponse {
    return WebhooksBadRequestResponseFromJSONTyped(json, false);
}

export function WebhooksBadRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhooksBadRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function WebhooksBadRequestResponseToJSON(value?: WebhooksBadRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'status': value.status,
        'errors': value.errors,
    };
}

