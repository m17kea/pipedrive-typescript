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
 * @interface LeadIdResponse200Data
 */
export interface LeadIdResponse200Data {
    /**
     * 
     * @type {string}
     * @memberof LeadIdResponse200Data
     */
    id?: string;
}

/**
 * Check if a given object implements the LeadIdResponse200Data interface.
 */
export function instanceOfLeadIdResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LeadIdResponse200DataFromJSON(json: any): LeadIdResponse200Data {
    return LeadIdResponse200DataFromJSONTyped(json, false);
}

export function LeadIdResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeadIdResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function LeadIdResponse200DataToJSON(value?: LeadIdResponse200Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}
