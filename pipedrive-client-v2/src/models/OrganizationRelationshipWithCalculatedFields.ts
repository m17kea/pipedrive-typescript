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
import type { RelationshipOrganizationInfoItem } from './RelationshipOrganizationInfoItem';
import {
    RelationshipOrganizationInfoItemFromJSON,
    RelationshipOrganizationInfoItemFromJSONTyped,
    RelationshipOrganizationInfoItemToJSON,
} from './RelationshipOrganizationInfoItem';

/**
 * 
 * @export
 * @interface OrganizationRelationshipWithCalculatedFields
 */
export interface OrganizationRelationshipWithCalculatedFields {
    /**
     * The ID of the organization relationship
     * @type {number}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    id?: number;
    /**
     * The type of the relationship
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    type?: string;
    /**
     * 
     * @type {RelationshipOrganizationInfoItem}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    rel_owner_org_id?: RelationshipOrganizationInfoItem;
    /**
     * 
     * @type {RelationshipOrganizationInfoItem}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    rel_linked_org_id?: RelationshipOrganizationInfoItem;
    /**
     * The creation date and time of the relationship
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    add_time?: string;
    /**
     * The last updated date and time of the relationship
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    update_time?: string;
    /**
     * Whether the relationship is active or not
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    active_flag?: string;
    /**
     * The calculated type of the relationship with the linked organization
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    calculated_type?: string;
    /**
     * The ID of the linked organization
     * @type {number}
     * @memberof OrganizationRelationshipWithCalculatedFields
     */
    calculated_related_org_id?: number;
}

/**
 * Check if a given object implements the OrganizationRelationshipWithCalculatedFields interface.
 */
export function instanceOfOrganizationRelationshipWithCalculatedFields(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationRelationshipWithCalculatedFieldsFromJSON(json: any): OrganizationRelationshipWithCalculatedFields {
    return OrganizationRelationshipWithCalculatedFieldsFromJSONTyped(json, false);
}

export function OrganizationRelationshipWithCalculatedFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationRelationshipWithCalculatedFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'rel_owner_org_id': !exists(json, 'rel_owner_org_id') ? undefined : RelationshipOrganizationInfoItemFromJSON(json['rel_owner_org_id']),
        'rel_linked_org_id': !exists(json, 'rel_linked_org_id') ? undefined : RelationshipOrganizationInfoItemFromJSON(json['rel_linked_org_id']),
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
        'update_time': !exists(json, 'update_time') ? undefined : json['update_time'],
        'active_flag': !exists(json, 'active_flag') ? undefined : json['active_flag'],
        'calculated_type': !exists(json, 'calculated_type') ? undefined : json['calculated_type'],
        'calculated_related_org_id': !exists(json, 'calculated_related_org_id') ? undefined : json['calculated_related_org_id'],
    };
}

export function OrganizationRelationshipWithCalculatedFieldsToJSON(value?: OrganizationRelationshipWithCalculatedFields | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'rel_owner_org_id': RelationshipOrganizationInfoItemToJSON(value.rel_owner_org_id),
        'rel_linked_org_id': RelationshipOrganizationInfoItemToJSON(value.rel_linked_org_id),
        'add_time': value.add_time,
        'update_time': value.update_time,
        'active_flag': value.active_flag,
        'calculated_type': value.calculated_type,
        'calculated_related_org_id': value.calculated_related_org_id,
    };
}
