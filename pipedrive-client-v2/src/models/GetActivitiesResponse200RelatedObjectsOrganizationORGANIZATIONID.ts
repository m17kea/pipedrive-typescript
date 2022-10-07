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
 * The ID of the organization associated with the item
 * @export
 * @interface GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
 */
export interface GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID {
    /**
     * The ID of the organization associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
     */
    id?: number;
    /**
     * The name of the organization associated with the item
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
     */
    name?: string;
    /**
     * The number of people connected with the organization that is associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
     */
    people_count?: number;
    /**
     * The ID of the owner of the organization that is associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
     */
    owner_id?: number;
    /**
     * The address of the organization
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
     */
    address?: string;
    /**
     * The BCC email of the organization associated with the item
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID
     */
    cc_email?: string;
}

/**
 * Check if a given object implements the GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID interface.
 */
export function instanceOfGetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSON(json: any): GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID {
    return GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSONTyped(json, false);
}

export function GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'people_count': !exists(json, 'people_count') ? undefined : json['people_count'],
        'owner_id': !exists(json, 'owner_id') ? undefined : json['owner_id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'cc_email': !exists(json, 'cc_email') ? undefined : json['cc_email'],
    };
}

export function GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONIDToJSON(value?: GetActivitiesResponse200RelatedObjectsOrganizationORGANIZATIONID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'people_count': value.people_count,
        'owner_id': value.owner_id,
        'address': value.address,
        'cc_email': value.cc_email,
    };
}

