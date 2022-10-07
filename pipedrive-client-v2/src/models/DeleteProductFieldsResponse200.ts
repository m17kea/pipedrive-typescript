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
import type { DeleteProductFieldsResponse200Data } from './DeleteProductFieldsResponse200Data';
import {
    DeleteProductFieldsResponse200DataFromJSON,
    DeleteProductFieldsResponse200DataFromJSONTyped,
    DeleteProductFieldsResponse200DataToJSON,
} from './DeleteProductFieldsResponse200Data';

/**
 * 
 * @export
 * @interface DeleteProductFieldsResponse200
 */
export interface DeleteProductFieldsResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof DeleteProductFieldsResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DeleteProductFieldsResponse200Data}
     * @memberof DeleteProductFieldsResponse200
     */
    data?: DeleteProductFieldsResponse200Data;
}

/**
 * Check if a given object implements the DeleteProductFieldsResponse200 interface.
 */
export function instanceOfDeleteProductFieldsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteProductFieldsResponse200FromJSON(json: any): DeleteProductFieldsResponse200 {
    return DeleteProductFieldsResponse200FromJSONTyped(json, false);
}

export function DeleteProductFieldsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteProductFieldsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DeleteProductFieldsResponse200DataFromJSON(json['data']),
    };
}

export function DeleteProductFieldsResponse200ToJSON(value?: DeleteProductFieldsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DeleteProductFieldsResponse200DataToJSON(value.data),
    };
}

