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
import type { GetWebhooksResponse200AllOfDataInner } from './GetWebhooksResponse200AllOfDataInner';
import {
    GetWebhooksResponse200AllOfDataInnerFromJSON,
    GetWebhooksResponse200AllOfDataInnerFromJSONTyped,
    GetWebhooksResponse200AllOfDataInnerToJSON,
} from './GetWebhooksResponse200AllOfDataInner';

/**
 * 
 * @export
 * @interface GetWebhooksResponse200AllOf
 */
export interface GetWebhooksResponse200AllOf {
    /**
     * The array of Webhooks
     * @type {Array<GetWebhooksResponse200AllOfDataInner>}
     * @memberof GetWebhooksResponse200AllOf
     */
    data?: Array<GetWebhooksResponse200AllOfDataInner>;
}

/**
 * Check if a given object implements the GetWebhooksResponse200AllOf interface.
 */
export function instanceOfGetWebhooksResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetWebhooksResponse200AllOfFromJSON(json: any): GetWebhooksResponse200AllOf {
    return GetWebhooksResponse200AllOfFromJSONTyped(json, false);
}

export function GetWebhooksResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetWebhooksResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetWebhooksResponse200AllOfDataInnerFromJSON)),
    };
}

export function GetWebhooksResponse200AllOfToJSON(value?: GetWebhooksResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetWebhooksResponse200AllOfDataInnerToJSON)),
    };
}
