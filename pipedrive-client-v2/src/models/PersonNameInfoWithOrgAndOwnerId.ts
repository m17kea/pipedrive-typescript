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
import type { Owner } from './Owner';
import {
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
} from './Owner';
import type { RelationshipOrganizationInfoItemWithActiveFlag } from './RelationshipOrganizationInfoItemWithActiveFlag';
import {
    RelationshipOrganizationInfoItemWithActiveFlagFromJSON,
    RelationshipOrganizationInfoItemWithActiveFlagFromJSONTyped,
    RelationshipOrganizationInfoItemWithActiveFlagToJSON,
} from './RelationshipOrganizationInfoItemWithActiveFlag';

/**
 * 
 * @export
 * @interface PersonNameInfoWithOrgAndOwnerId
 */
export interface PersonNameInfoWithOrgAndOwnerId {
    /**
     * 
     * @type {Owner}
     * @memberof PersonNameInfoWithOrgAndOwnerId
     */
    owner_id?: Owner;
    /**
     * 
     * @type {RelationshipOrganizationInfoItemWithActiveFlag}
     * @memberof PersonNameInfoWithOrgAndOwnerId
     */
    org_id?: RelationshipOrganizationInfoItemWithActiveFlag;
    /**
     * The name of the person
     * @type {string}
     * @memberof PersonNameInfoWithOrgAndOwnerId
     */
    name?: string;
    /**
     * The first name of the person
     * @type {string}
     * @memberof PersonNameInfoWithOrgAndOwnerId
     */
    first_name?: string;
    /**
     * The last name of the person
     * @type {string}
     * @memberof PersonNameInfoWithOrgAndOwnerId
     */
    last_name?: string;
}

/**
 * Check if a given object implements the PersonNameInfoWithOrgAndOwnerId interface.
 */
export function instanceOfPersonNameInfoWithOrgAndOwnerId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonNameInfoWithOrgAndOwnerIdFromJSON(json: any): PersonNameInfoWithOrgAndOwnerId {
    return PersonNameInfoWithOrgAndOwnerIdFromJSONTyped(json, false);
}

export function PersonNameInfoWithOrgAndOwnerIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonNameInfoWithOrgAndOwnerId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owner_id': !exists(json, 'owner_id') ? undefined : OwnerFromJSON(json['owner_id']),
        'org_id': !exists(json, 'org_id') ? undefined : RelationshipOrganizationInfoItemWithActiveFlagFromJSON(json['org_id']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
    };
}

export function PersonNameInfoWithOrgAndOwnerIdToJSON(value?: PersonNameInfoWithOrgAndOwnerId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owner_id': OwnerToJSON(value.owner_id),
        'org_id': RelationshipOrganizationInfoItemWithActiveFlagToJSON(value.org_id),
        'name': value.name,
        'first_name': value.first_name,
        'last_name': value.last_name,
    };
}

