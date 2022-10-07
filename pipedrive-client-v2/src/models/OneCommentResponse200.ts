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
import type { GetCommentsResponse200DataInner } from './GetCommentsResponse200DataInner';
import {
    GetCommentsResponse200DataInnerFromJSON,
    GetCommentsResponse200DataInnerFromJSONTyped,
    GetCommentsResponse200DataInnerToJSON,
} from './GetCommentsResponse200DataInner';

/**
 * 
 * @export
 * @interface OneCommentResponse200
 */
export interface OneCommentResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof OneCommentResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetCommentsResponse200DataInner}
     * @memberof OneCommentResponse200
     */
    data?: GetCommentsResponse200DataInner;
}

/**
 * Check if a given object implements the OneCommentResponse200 interface.
 */
export function instanceOfOneCommentResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OneCommentResponse200FromJSON(json: any): OneCommentResponse200 {
    return OneCommentResponse200FromJSONTyped(json, false);
}

export function OneCommentResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): OneCommentResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetCommentsResponse200DataInnerFromJSON(json['data']),
    };
}

export function OneCommentResponse200ToJSON(value?: OneCommentResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetCommentsResponse200DataInnerToJSON(value.data),
    };
}

