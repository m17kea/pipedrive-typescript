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
 * @interface PersonNameInfoWithOrgAndOwnerIdAllOf
 */
export interface PersonNameInfoWithOrgAndOwnerIdAllOf {
    /**
     * 
     * @type {Owner}
     * @memberof PersonNameInfoWithOrgAndOwnerIdAllOf
     */
    owner_id?: Owner;
    /**
     * 
     * @type {RelationshipOrganizationInfoItemWithActiveFlag}
     * @memberof PersonNameInfoWithOrgAndOwnerIdAllOf
     */
    org_id?: RelationshipOrganizationInfoItemWithActiveFlag;
}

/**
 * Check if a given object implements the PersonNameInfoWithOrgAndOwnerIdAllOf interface.
 */
export function instanceOfPersonNameInfoWithOrgAndOwnerIdAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonNameInfoWithOrgAndOwnerIdAllOfFromJSON(json: any): PersonNameInfoWithOrgAndOwnerIdAllOf {
    return PersonNameInfoWithOrgAndOwnerIdAllOfFromJSONTyped(json, false);
}

export function PersonNameInfoWithOrgAndOwnerIdAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonNameInfoWithOrgAndOwnerIdAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owner_id': !exists(json, 'owner_id') ? undefined : OwnerFromJSON(json['owner_id']),
        'org_id': !exists(json, 'org_id') ? undefined : RelationshipOrganizationInfoItemWithActiveFlagFromJSON(json['org_id']),
    };
}

export function PersonNameInfoWithOrgAndOwnerIdAllOfToJSON(value?: PersonNameInfoWithOrgAndOwnerIdAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owner_id': OwnerToJSON(value.owner_id),
        'org_id': RelationshipOrganizationInfoItemWithActiveFlagToJSON(value.org_id),
    };
}

