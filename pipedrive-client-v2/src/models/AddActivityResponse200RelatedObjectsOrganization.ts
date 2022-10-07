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
import type { AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONID } from './AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONID';
import {
    AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSON,
    AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSONTyped,
    AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONIDToJSON,
} from './AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONID';

/**
 * 
 * @export
 * @interface AddActivityResponse200RelatedObjectsOrganization
 */
export interface AddActivityResponse200RelatedObjectsOrganization {
    /**
     * 
     * @type {AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONID}
     * @memberof AddActivityResponse200RelatedObjectsOrganization
     */
    ORGANIZATION_ID?: AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONID;
}

/**
 * Check if a given object implements the AddActivityResponse200RelatedObjectsOrganization interface.
 */
export function instanceOfAddActivityResponse200RelatedObjectsOrganization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddActivityResponse200RelatedObjectsOrganizationFromJSON(json: any): AddActivityResponse200RelatedObjectsOrganization {
    return AddActivityResponse200RelatedObjectsOrganizationFromJSONTyped(json, false);
}

export function AddActivityResponse200RelatedObjectsOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddActivityResponse200RelatedObjectsOrganization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ORGANIZATION_ID': !exists(json, 'ORGANIZATION_ID') ? undefined : AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSON(json['ORGANIZATION_ID']),
    };
}

export function AddActivityResponse200RelatedObjectsOrganizationToJSON(value?: AddActivityResponse200RelatedObjectsOrganization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ORGANIZATION_ID': AddActivityResponse200RelatedObjectsOrganizationORGANIZATIONIDToJSON(value.ORGANIZATION_ID),
    };
}
