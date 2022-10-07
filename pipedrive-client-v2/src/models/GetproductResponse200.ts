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
import type { GetActivitiesResponse200RelatedObjects } from './GetActivitiesResponse200RelatedObjects';
import {
    GetActivitiesResponse200RelatedObjectsFromJSON,
    GetActivitiesResponse200RelatedObjectsFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsToJSON,
} from './GetActivitiesResponse200RelatedObjects';
import type { GetproductResponse200Data } from './GetproductResponse200Data';
import {
    GetproductResponse200DataFromJSON,
    GetproductResponse200DataFromJSONTyped,
    GetproductResponse200DataToJSON,
} from './GetproductResponse200Data';

/**
 * 
 * @export
 * @interface GetproductResponse200
 */
export interface GetproductResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof GetproductResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {GetproductResponse200Data}
     * @memberof GetproductResponse200
     */
    data?: GetproductResponse200Data;
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjects}
     * @memberof GetproductResponse200
     */
    related_objects?: GetActivitiesResponse200RelatedObjects;
}

/**
 * Check if a given object implements the GetproductResponse200 interface.
 */
export function instanceOfGetproductResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetproductResponse200FromJSON(json: any): GetproductResponse200 {
    return GetproductResponse200FromJSONTyped(json, false);
}

export function GetproductResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetproductResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : GetproductResponse200DataFromJSON(json['data']),
        'related_objects': !exists(json, 'related_objects') ? undefined : GetActivitiesResponse200RelatedObjectsFromJSON(json['related_objects']),
    };
}

export function GetproductResponse200ToJSON(value?: GetproductResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': GetproductResponse200DataToJSON(value.data),
        'related_objects': GetActivitiesResponse200RelatedObjectsToJSON(value.related_objects),
    };
}

