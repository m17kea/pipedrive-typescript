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
 * @interface OrganizationRelationshipWithCalculatedFieldsAllOf
 */
export interface OrganizationRelationshipWithCalculatedFieldsAllOf {
    /**
     * The ID of the organization relationship
     * @type {number}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    id?: number;
    /**
     * The type of the relationship
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    type?: string;
    /**
     * 
     * @type {RelationshipOrganizationInfoItem}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    rel_owner_org_id?: RelationshipOrganizationInfoItem;
    /**
     * 
     * @type {RelationshipOrganizationInfoItem}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    rel_linked_org_id?: RelationshipOrganizationInfoItem;
    /**
     * The creation date and time of the relationship
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    add_time?: string;
    /**
     * The last updated date and time of the relationship
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    update_time?: string;
    /**
     * Whether the relationship is active or not
     * @type {string}
     * @memberof OrganizationRelationshipWithCalculatedFieldsAllOf
     */
    active_flag?: string;
}

/**
 * Check if a given object implements the OrganizationRelationshipWithCalculatedFieldsAllOf interface.
 */
export function instanceOfOrganizationRelationshipWithCalculatedFieldsAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationRelationshipWithCalculatedFieldsAllOfFromJSON(json: any): OrganizationRelationshipWithCalculatedFieldsAllOf {
    return OrganizationRelationshipWithCalculatedFieldsAllOfFromJSONTyped(json, false);
}

export function OrganizationRelationshipWithCalculatedFieldsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationRelationshipWithCalculatedFieldsAllOf {
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
    };
}

export function OrganizationRelationshipWithCalculatedFieldsAllOfToJSON(value?: OrganizationRelationshipWithCalculatedFieldsAllOf | null): any {
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
    };
}

