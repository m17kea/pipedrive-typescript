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
/**
 * 
 * @export
 * @interface OrganizationRelationshipDetailsAllOf
 */
export interface OrganizationRelationshipDetailsAllOf {
    /**
     * The name of the linked organization
     * @type {string}
     * @memberof OrganizationRelationshipDetailsAllOf
     */
    related_organization_name?: string;
}

/**
 * Check if a given object implements the OrganizationRelationshipDetailsAllOf interface.
 */
export function instanceOfOrganizationRelationshipDetailsAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationRelationshipDetailsAllOfFromJSON(json: any): OrganizationRelationshipDetailsAllOf {
    return OrganizationRelationshipDetailsAllOfFromJSONTyped(json, false);
}

export function OrganizationRelationshipDetailsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationRelationshipDetailsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'related_organization_name': !exists(json, 'related_organization_name') ? undefined : json['related_organization_name'],
    };
}

export function OrganizationRelationshipDetailsAllOfToJSON(value?: OrganizationRelationshipDetailsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'related_organization_name': value.related_organization_name,
    };
}

