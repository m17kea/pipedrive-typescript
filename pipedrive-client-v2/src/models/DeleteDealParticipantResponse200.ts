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
import type { DeleteDealParticipantResponse200Data } from './DeleteDealParticipantResponse200Data';
import {
    DeleteDealParticipantResponse200DataFromJSON,
    DeleteDealParticipantResponse200DataFromJSONTyped,
    DeleteDealParticipantResponse200DataToJSON,
} from './DeleteDealParticipantResponse200Data';

/**
 * 
 * @export
 * @interface DeleteDealParticipantResponse200
 */
export interface DeleteDealParticipantResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof DeleteDealParticipantResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DeleteDealParticipantResponse200Data}
     * @memberof DeleteDealParticipantResponse200
     */
    data?: DeleteDealParticipantResponse200Data;
}

/**
 * Check if a given object implements the DeleteDealParticipantResponse200 interface.
 */
export function instanceOfDeleteDealParticipantResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteDealParticipantResponse200FromJSON(json: any): DeleteDealParticipantResponse200 {
    return DeleteDealParticipantResponse200FromJSONTyped(json, false);
}

export function DeleteDealParticipantResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteDealParticipantResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DeleteDealParticipantResponse200DataFromJSON(json['data']),
    };
}

export function DeleteDealParticipantResponse200ToJSON(value?: DeleteDealParticipantResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DeleteDealParticipantResponse200DataToJSON(value.data),
    };
}

