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
import type { DealResponse200Data } from './DealResponse200Data';
import {
    DealResponse200DataFromJSON,
    DealResponse200DataFromJSONTyped,
    DealResponse200DataToJSON,
} from './DealResponse200Data';
import type { GetDealsResponse200RelatedObjects } from './GetDealsResponse200RelatedObjects';
import {
    GetDealsResponse200RelatedObjectsFromJSON,
    GetDealsResponse200RelatedObjectsFromJSONTyped,
    GetDealsResponse200RelatedObjectsToJSON,
} from './GetDealsResponse200RelatedObjects';

/**
 * 
 * @export
 * @interface DealResponse200
 */
export interface DealResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof DealResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {DealResponse200Data}
     * @memberof DealResponse200
     */
    data?: DealResponse200Data;
    /**
     * 
     * @type {GetDealsResponse200RelatedObjects}
     * @memberof DealResponse200
     */
    related_objects?: GetDealsResponse200RelatedObjects;
}

/**
 * Check if a given object implements the DealResponse200 interface.
 */
export function instanceOfDealResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DealResponse200FromJSON(json: any): DealResponse200 {
    return DealResponse200FromJSONTyped(json, false);
}

export function DealResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DealResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : DealResponse200DataFromJSON(json['data']),
        'related_objects': !exists(json, 'related_objects') ? undefined : GetDealsResponse200RelatedObjectsFromJSON(json['related_objects']),
    };
}

export function DealResponse200ToJSON(value?: DealResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': DealResponse200DataToJSON(value.data),
        'related_objects': GetDealsResponse200RelatedObjectsToJSON(value.related_objects),
    };
}

