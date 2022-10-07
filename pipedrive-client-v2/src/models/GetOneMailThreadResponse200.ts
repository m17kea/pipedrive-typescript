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
import type { GetOneMailThreadResponse200AllOfData } from './GetOneMailThreadResponse200AllOfData';
import {
    GetOneMailThreadResponse200AllOfDataFromJSON,
    GetOneMailThreadResponse200AllOfDataFromJSONTyped,
    GetOneMailThreadResponse200AllOfDataToJSON,
} from './GetOneMailThreadResponse200AllOfData';

/**
 * 
 * @export
 * @interface GetOneMailThreadResponse200
 */
export interface GetOneMailThreadResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetOneMailThreadResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetOneMailThreadResponse200AllOfData}
     * @memberof GetOneMailThreadResponse200
     */
    data?: GetOneMailThreadResponse200AllOfData;
}

/**
 * Check if a given object implements the GetOneMailThreadResponse200 interface.
 */
export function instanceOfGetOneMailThreadResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOneMailThreadResponse200FromJSON(json: any): GetOneMailThreadResponse200 {
    return GetOneMailThreadResponse200FromJSONTyped(json, false);
}

export function GetOneMailThreadResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOneMailThreadResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetOneMailThreadResponse200AllOfDataFromJSON(json['data']),
    };
}

export function GetOneMailThreadResponse200ToJSON(value?: GetOneMailThreadResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetOneMailThreadResponse200AllOfDataToJSON(value.data),
    };
}
