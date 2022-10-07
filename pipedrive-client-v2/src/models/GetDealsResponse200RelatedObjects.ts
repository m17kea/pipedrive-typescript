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
import type { DealOrganizationDataWithIdAllOf } from './DealOrganizationDataWithIdAllOf';
import {
    DealOrganizationDataWithIdAllOfFromJSON,
    DealOrganizationDataWithIdAllOfFromJSONTyped,
    DealOrganizationDataWithIdAllOfToJSON,
} from './DealOrganizationDataWithIdAllOf';
import type { DealPersonDataWithIdAllOf } from './DealPersonDataWithIdAllOf';
import {
    DealPersonDataWithIdAllOfFromJSON,
    DealPersonDataWithIdAllOfFromJSONTyped,
    DealPersonDataWithIdAllOfToJSON,
} from './DealPersonDataWithIdAllOf';
import type { DealUserDataWithIdAllOf } from './DealUserDataWithIdAllOf';
import {
    DealUserDataWithIdAllOfFromJSON,
    DealUserDataWithIdAllOfFromJSONTyped,
    DealUserDataWithIdAllOfToJSON,
} from './DealUserDataWithIdAllOf';

/**
 * 
 * @export
 * @interface GetDealsResponse200RelatedObjects
 */
export interface GetDealsResponse200RelatedObjects {
    /**
     * 
     * @type {DealUserDataWithIdAllOf}
     * @memberof GetDealsResponse200RelatedObjects
     */
    user?: DealUserDataWithIdAllOf;
    /**
     * 
     * @type {DealOrganizationDataWithIdAllOf}
     * @memberof GetDealsResponse200RelatedObjects
     */
    organization?: DealOrganizationDataWithIdAllOf;
    /**
     * 
     * @type {DealPersonDataWithIdAllOf}
     * @memberof GetDealsResponse200RelatedObjects
     */
    person?: DealPersonDataWithIdAllOf;
}

/**
 * Check if a given object implements the GetDealsResponse200RelatedObjects interface.
 */
export function instanceOfGetDealsResponse200RelatedObjects(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDealsResponse200RelatedObjectsFromJSON(json: any): GetDealsResponse200RelatedObjects {
    return GetDealsResponse200RelatedObjectsFromJSONTyped(json, false);
}

export function GetDealsResponse200RelatedObjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDealsResponse200RelatedObjects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : DealUserDataWithIdAllOfFromJSON(json['user']),
        'organization': !exists(json, 'organization') ? undefined : DealOrganizationDataWithIdAllOfFromJSON(json['organization']),
        'person': !exists(json, 'person') ? undefined : DealPersonDataWithIdAllOfFromJSON(json['person']),
    };
}

export function GetDealsResponse200RelatedObjectsToJSON(value?: GetDealsResponse200RelatedObjects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': DealUserDataWithIdAllOfToJSON(value.user),
        'organization': DealOrganizationDataWithIdAllOfToJSON(value.organization),
        'person': DealPersonDataWithIdAllOfToJSON(value.person),
    };
}
