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
import type { GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID } from './GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID';
import {
    GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSON,
    GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDToJSON,
} from './GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID';

/**
 * 
 * @export
 * @interface GetActivitiesResponse200RelatedObjectsOrganization
 */
export interface GetActivitiesResponse200RelatedObjectsOrganization {
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganization
     */
    ORGANIZATION_ID?: GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID;
}

/**
 * Check if a given object implements the GetActivitiesResponse200RelatedObjectsOrganization interface.
 */
export function instanceOfGetActivitiesResponse200RelatedObjectsOrganization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200RelatedObjectsOrganizationFromJSON(json: any): GetActivitiesResponse200RelatedObjectsOrganization {
    return GetActivitiesResponse200RelatedObjectsOrganizationFromJSONTyped(json, false);
}

export function GetActivitiesResponse200RelatedObjectsOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200RelatedObjectsOrganization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ORGANIZATION_ID': !exists(json, 'ORGANIZATION_ID') ? undefined : GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSON(json['ORGANIZATION_ID']),
    };
}

export function GetActivitiesResponse200RelatedObjectsOrganizationToJSON(value?: GetActivitiesResponse200RelatedObjectsOrganization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ORGANIZATION_ID': GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDToJSON(value.ORGANIZATION_ID),
    };
}

