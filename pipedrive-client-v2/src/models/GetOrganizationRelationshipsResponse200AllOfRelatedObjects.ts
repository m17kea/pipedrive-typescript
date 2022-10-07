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
import type { GetActivitiesResponse200RelatedObjectsOrganization } from './GetActivitiesResponse200RelatedObjectsOrganization';
import {
    GetActivitiesResponse200RelatedObjectsOrganizationFromJSON,
    GetActivitiesResponse200RelatedObjectsOrganizationFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsOrganizationToJSON,
} from './GetActivitiesResponse200RelatedObjectsOrganization';

/**
 * 
 * @export
 * @interface GetOrganizationRelationshipsResponse200AllOfRelatedObjects
 */
export interface GetOrganizationRelationshipsResponse200AllOfRelatedObjects {
    /**
     * 
     * @type {GetActivitiesResponse200RelatedObjectsOrganization}
     * @memberof GetOrganizationRelationshipsResponse200AllOfRelatedObjects
     */
    organization?: GetActivitiesResponse200RelatedObjectsOrganization;
}

/**
 * Check if a given object implements the GetOrganizationRelationshipsResponse200AllOfRelatedObjects interface.
 */
export function instanceOfGetOrganizationRelationshipsResponse200AllOfRelatedObjects(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOrganizationRelationshipsResponse200AllOfRelatedObjectsFromJSON(json: any): GetOrganizationRelationshipsResponse200AllOfRelatedObjects {
    return GetOrganizationRelationshipsResponse200AllOfRelatedObjectsFromJSONTyped(json, false);
}

export function GetOrganizationRelationshipsResponse200AllOfRelatedObjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrganizationRelationshipsResponse200AllOfRelatedObjects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organization': !exists(json, 'organization') ? undefined : GetActivitiesResponse200RelatedObjectsOrganizationFromJSON(json['organization']),
    };
}

export function GetOrganizationRelationshipsResponse200AllOfRelatedObjectsToJSON(value?: GetOrganizationRelationshipsResponse200AllOfRelatedObjects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organization': GetActivitiesResponse200RelatedObjectsOrganizationToJSON(value.organization),
    };
}
