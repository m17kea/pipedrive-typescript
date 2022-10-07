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
import type { GetAllMailMessagesOfMailThreadResponse200AllOfDataInner } from './GetAllMailMessagesOfMailThreadResponse200AllOfDataInner';
import {
    GetAllMailMessagesOfMailThreadResponse200AllOfDataInnerFromJSON,
    GetAllMailMessagesOfMailThreadResponse200AllOfDataInnerFromJSONTyped,
    GetAllMailMessagesOfMailThreadResponse200AllOfDataInnerToJSON,
} from './GetAllMailMessagesOfMailThreadResponse200AllOfDataInner';

/**
 * 
 * @export
 * @interface GetAllMailMessagesOfMailThreadResponse200
 */
export interface GetAllMailMessagesOfMailThreadResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetAllMailMessagesOfMailThreadResponse200
     */
    success?: boolean;
    /**
     * The array of the mail messages of the mail thread
     * @type {Array<GetAllMailMessagesOfMailThreadResponse200AllOfDataInner>}
     * @memberof GetAllMailMessagesOfMailThreadResponse200
     */
    data?: Array<GetAllMailMessagesOfMailThreadResponse200AllOfDataInner>;
}

/**
 * Check if a given object implements the GetAllMailMessagesOfMailThreadResponse200 interface.
 */
export function instanceOfGetAllMailMessagesOfMailThreadResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAllMailMessagesOfMailThreadResponse200FromJSON(json: any): GetAllMailMessagesOfMailThreadResponse200 {
    return GetAllMailMessagesOfMailThreadResponse200FromJSONTyped(json, false);
}

export function GetAllMailMessagesOfMailThreadResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllMailMessagesOfMailThreadResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetAllMailMessagesOfMailThreadResponse200AllOfDataInnerFromJSON)),
    };
}

export function GetAllMailMessagesOfMailThreadResponse200ToJSON(value?: GetAllMailMessagesOfMailThreadResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetAllMailMessagesOfMailThreadResponse200AllOfDataInnerToJSON)),
    };
}
