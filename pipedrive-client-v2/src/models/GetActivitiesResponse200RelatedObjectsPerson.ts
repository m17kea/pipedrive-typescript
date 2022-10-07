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
import type { GetActivitiesResponse200RelatedObjectsPersonPERSONID } from './GetActivitiesResponse200RelatedObjectsPersonPERSONID';
import {
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDFromJSON,
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDToJSON,
} from './GetActivitiesResponse200RelatedObjectsPersonPERSONID';

/**
 * 
 * @export
 * @interface GetActivitiesResponse200RelatedObjectsPerson
 */
export interface GetActivitiesResponse200RelatedObjectsPerson {
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsPersonPERSONID}
     * @memberof GetActivitiesResponse200RelatedObjectsPerson
     */
    PERSON_ID?: GetActivitiesResponse200RelatedObjectsPersonPERSONID;
}

/**
 * Check if a given object implements the GetActivitiesResponse200RelatedObjectsPerson interface.
 */
export function instanceOfGetActivitiesResponse200RelatedObjectsPerson(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200RelatedObjectsPersonFromJSON(json: any): GetActivitiesResponse200RelatedObjectsPerson {
    return GetActivitiesResponse200RelatedObjectsPersonFromJSONTyped(json, false);
}

export function GetActivitiesResponse200RelatedObjectsPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200RelatedObjectsPerson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'PERSON_ID': !exists(json, 'PERSON_ID') ? undefined : GetActivitiesResponse200RelatedObjectsPersonPERSONIDFromJSON(json['PERSON_ID']),
    };
}

export function GetActivitiesResponse200RelatedObjectsPersonToJSON(value?: GetActivitiesResponse200RelatedObjectsPerson | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PERSON_ID': GetActivitiesResponse200RelatedObjectsPersonPERSONIDToJSON(value.PERSON_ID),
    };
}
