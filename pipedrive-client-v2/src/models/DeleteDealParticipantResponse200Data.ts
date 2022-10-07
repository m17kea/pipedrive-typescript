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
 * @interface DeleteDealParticipantResponse200Data
 */
export interface DeleteDealParticipantResponse200Data {
    /**
     * The ID of the deal participant that was deleted
     * @type {number}
     * @memberof DeleteDealParticipantResponse200Data
     */
    id?: number;
}

/**
 * Check if a given object implements the DeleteDealParticipantResponse200Data interface.
 */
export function instanceOfDeleteDealParticipantResponse200Data(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteDealParticipantResponse200DataFromJSON(json: any): DeleteDealParticipantResponse200Data {
    return DeleteDealParticipantResponse200DataFromJSONTyped(json, false);
}

export function DeleteDealParticipantResponse200DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteDealParticipantResponse200Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function DeleteDealParticipantResponse200DataToJSON(value?: DeleteDealParticipantResponse200Data | null): any {
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
