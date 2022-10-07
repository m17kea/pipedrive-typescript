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
import type { AddActivityResponse200RelatedObjectsPersonPERSONID } from './AddActivityResponse200RelatedObjectsPersonPERSONID';
import {
    AddActivityResponse200RelatedObjectsPersonPERSONIDFromJSON,
    AddActivityResponse200RelatedObjectsPersonPERSONIDFromJSONTyped,
    AddActivityResponse200RelatedObjectsPersonPERSONIDToJSON,
} from './AddActivityResponse200RelatedObjectsPersonPERSONID';

/**
 * 
 * @export
 * @interface AddActivityResponse200RelatedObjectsPerson
 */
export interface AddActivityResponse200RelatedObjectsPerson {
    /**
     * 
     * @type {AddActivityResponse200RelatedObjectsPersonPERSONID}
     * @memberof AddActivityResponse200RelatedObjectsPerson
     */
    PERSON_ID?: AddActivityResponse200RelatedObjectsPersonPERSONID;
}

/**
 * Check if a given object implements the AddActivityResponse200RelatedObjectsPerson interface.
 */
export function instanceOfAddActivityResponse200RelatedObjectsPerson(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddActivityResponse200RelatedObjectsPersonFromJSON(json: any): AddActivityResponse200RelatedObjectsPerson {
    return AddActivityResponse200RelatedObjectsPersonFromJSONTyped(json, false);
}

export function AddActivityResponse200RelatedObjectsPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddActivityResponse200RelatedObjectsPerson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'PERSON_ID': !exists(json, 'PERSON_ID') ? undefined : AddActivityResponse200RelatedObjectsPersonPERSONIDFromJSON(json['PERSON_ID']),
    };
}

export function AddActivityResponse200RelatedObjectsPersonToJSON(value?: AddActivityResponse200RelatedObjectsPerson | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PERSON_ID': AddActivityResponse200RelatedObjectsPersonPERSONIDToJSON(value.PERSON_ID),
    };
}

