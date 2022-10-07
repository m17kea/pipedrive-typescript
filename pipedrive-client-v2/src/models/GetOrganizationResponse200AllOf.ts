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
import type { GetOrganizationResponse200AllOfAdditionalData } from './GetOrganizationResponse200AllOfAdditionalData';
import {
    GetOrganizationResponse200AllOfAdditionalDataFromJSON,
    GetOrganizationResponse200AllOfAdditionalDataFromJSONTyped,
    GetOrganizationResponse200AllOfAdditionalDataToJSON,
} from './GetOrganizationResponse200AllOfAdditionalData';
import type { GetOrganizationsResponse200AllOfRelatedObjects } from './GetOrganizationsResponse200AllOfRelatedObjects';
import {
    GetOrganizationsResponse200AllOfRelatedObjectsFromJSON,
    GetOrganizationsResponse200AllOfRelatedObjectsFromJSONTyped,
    GetOrganizationsResponse200AllOfRelatedObjectsToJSON,
} from './GetOrganizationsResponse200AllOfRelatedObjects';
import type { OrganizationItem } from './OrganizationItem';
import {
    OrganizationItemFromJSON,
    OrganizationItemFromJSONTyped,
    OrganizationItemToJSON,
} from './OrganizationItem';

/**
 * 
 * @export
 * @interface GetOrganizationResponse200AllOf
 */
export interface GetOrganizationResponse200AllOf {
    /**
     * 
     * @type {OrganizationItem}
     * @memberof GetOrganizationResponse200AllOf
     */
    data?: OrganizationItem;
    /**
     * 
     * @type {GetOrganizationResponse200AllOfAdditionalData}
     * @memberof GetOrganizationResponse200AllOf
     */
    additional_data?: GetOrganizationResponse200AllOfAdditionalData;
    /**
     * 
     * @type {GetOrganizationsResponse200AllOfRelatedObjects}
     * @memberof GetOrganizationResponse200AllOf
     */
    related_objects?: GetOrganizationsResponse200AllOfRelatedObjects;
}

/**
 * Check if a given object implements the GetOrganizationResponse200AllOf interface.
 */
export function instanceOfGetOrganizationResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOrganizationResponse200AllOfFromJSON(json: any): GetOrganizationResponse200AllOf {
    return GetOrganizationResponse200AllOfFromJSONTyped(json, false);
}

export function GetOrganizationResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrganizationResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : OrganizationItemFromJSON(json['data']),
        'additional_data': !exists(json, 'additional_data') ? undefined : GetOrganizationResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
        'related_objects': !exists(json, 'related_objects') ? undefined : GetOrganizationsResponse200AllOfRelatedObjectsFromJSON(json['related_objects']),
    };
}

export function GetOrganizationResponse200AllOfToJSON(value?: GetOrganizationResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': OrganizationItemToJSON(value.data),
        'additional_data': GetOrganizationResponse200AllOfAdditionalDataToJSON(value.additional_data),
        'related_objects': GetOrganizationsResponse200AllOfRelatedObjectsToJSON(value.related_objects),
    };
}

