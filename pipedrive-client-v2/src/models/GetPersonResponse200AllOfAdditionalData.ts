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
 * @interface GetPersonResponse200AllOfAdditionalData
 */
export interface GetPersonResponse200AllOfAdditionalData {
    /**
     * Dropbox email for the person
     * @type {string}
     * @memberof GetPersonResponse200AllOfAdditionalData
     */
    dropbox_email?: string;
}

/**
 * Check if a given object implements the GetPersonResponse200AllOfAdditionalData interface.
 */
export function instanceOfGetPersonResponse200AllOfAdditionalData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPersonResponse200AllOfAdditionalDataFromJSON(json: any): GetPersonResponse200AllOfAdditionalData {
    return GetPersonResponse200AllOfAdditionalDataFromJSONTyped(json, false);
}

export function GetPersonResponse200AllOfAdditionalDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPersonResponse200AllOfAdditionalData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dropbox_email': !exists(json, 'dropbox_email') ? undefined : json['dropbox_email'],
    };
}

export function GetPersonResponse200AllOfAdditionalDataToJSON(value?: GetPersonResponse200AllOfAdditionalData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dropbox_email': value.dropbox_email,
    };
}

