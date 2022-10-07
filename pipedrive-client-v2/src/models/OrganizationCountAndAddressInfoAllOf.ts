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
 * @interface OrganizationCountAndAddressInfoAllOf
 */
export interface OrganizationCountAndAddressInfoAllOf {
    /**
     * The count of email messages related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    email_messages_count?: number;
    /**
     * The count of persons related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    people_count?: number;
    /**
     * The count of activities related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    activities_count?: number;
    /**
     * The count of done activities related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    done_activities_count?: number;
    /**
     * The count of undone activities related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    undone_activities_count?: number;
    /**
     * The count of files related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    files_count?: number;
    /**
     * The count of notes related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    notes_count?: number;
    /**
     * The count of followers related to the organization
     * @type {number}
     * @memberof OrganizationCountAndAddressInfoAllOf
     */
    followers_count?: number;
}

/**
 * Check if a given object implements the OrganizationCountAndAddressInfoAllOf interface.
 */
export function instanceOfOrganizationCountAndAddressInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationCountAndAddressInfoAllOfFromJSON(json: any): OrganizationCountAndAddressInfoAllOf {
    return OrganizationCountAndAddressInfoAllOfFromJSONTyped(json, false);
}

export function OrganizationCountAndAddressInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationCountAndAddressInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email_messages_count': !exists(json, 'email_messages_count') ? undefined : json['email_messages_count'],
        'people_count': !exists(json, 'people_count') ? undefined : json['people_count'],
        'activities_count': !exists(json, 'activities_count') ? undefined : json['activities_count'],
        'done_activities_count': !exists(json, 'done_activities_count') ? undefined : json['done_activities_count'],
        'undone_activities_count': !exists(json, 'undone_activities_count') ? undefined : json['undone_activities_count'],
        'files_count': !exists(json, 'files_count') ? undefined : json['files_count'],
        'notes_count': !exists(json, 'notes_count') ? undefined : json['notes_count'],
        'followers_count': !exists(json, 'followers_count') ? undefined : json['followers_count'],
    };
}

export function OrganizationCountAndAddressInfoAllOfToJSON(value?: OrganizationCountAndAddressInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email_messages_count': value.email_messages_count,
        'people_count': value.people_count,
        'activities_count': value.activities_count,
        'done_activities_count': value.done_activities_count,
        'undone_activities_count': value.undone_activities_count,
        'files_count': value.files_count,
        'notes_count': value.notes_count,
        'followers_count': value.followers_count,
    };
}
