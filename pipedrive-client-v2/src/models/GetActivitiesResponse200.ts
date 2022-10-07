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
import type { ActivityResponseObject } from './ActivityResponseObject';
import {
    ActivityResponseObjectFromJSON,
    ActivityResponseObjectFromJSONTyped,
    ActivityResponseObjectToJSON,
} from './ActivityResponseObject';
import type { GetActivitiesResponse200AdditionalData } from './GetActivitiesResponse200AdditionalData';
import {
    GetActivitiesResponse200AdditionalDataFromJSON,
    GetActivitiesResponse200AdditionalDataFromJSONTyped,
    GetActivitiesResponse200AdditionalDataToJSON,
} from './GetActivitiesResponse200AdditionalData';
import type { GetActivitiesResponse200RelatedObjects } from './GetActivitiesResponse200RelatedObjects';
import {
    GetActivitiesResponse200RelatedObjectsFromJSON,
    GetActivitiesResponse200RelatedObjectsFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsToJSON,
} from './GetActivitiesResponse200RelatedObjects';

/**
 * 
 * @export
 * @interface GetActivitiesResponse200
 */
export interface GetActivitiesResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof GetActivitiesResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {Array<ActivityResponseObject>}
     * @memberof GetActivitiesResponse200
     */
    data?: Array<ActivityResponseObject>;
    /**
     * 
     * @type {GetActivitiesResponse200AdditionalData}
     * @memberof GetActivitiesResponse200
     */
    additional_data?: GetActivitiesResponse200AdditionalData;
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjects}
     * @memberof GetActivitiesResponse200
     */
    related_objects?: GetActivitiesResponse200RelatedObjects;
}

/**
 * Check if a given object implements the GetActivitiesResponse200 interface.
 */
export function instanceOfGetActivitiesResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200FromJSON(json: any): GetActivitiesResponse200 {
    return GetActivitiesResponse200FromJSONTyped(json, false);
}

export function GetActivitiesResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ActivityResponseObjectFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetActivitiesResponse200AdditionalDataFromJSON(json['additional_data']),
        'related_objects': !exists(json, 'related_objects') ? undefined : GetActivitiesResponse200RelatedObjectsFromJSON(json['related_objects']),
    };
}

export function GetActivitiesResponse200ToJSON(value?: GetActivitiesResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ActivityResponseObjectToJSON)),
        'additional_data': GetActivitiesResponse200AdditionalDataToJSON(value.additional_data),
        'related_objects': GetActivitiesResponse200RelatedObjectsToJSON(value.related_objects),
    };
}
