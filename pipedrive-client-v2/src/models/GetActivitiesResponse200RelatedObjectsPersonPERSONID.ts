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
import type { GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner } from './GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner';
import {
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerFromJSON,
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerToJSON,
} from './GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner';
import type { GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner } from './GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner';
import {
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerFromJSON,
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerFromJSONTyped,
    GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerToJSON,
} from './GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner';

/**
 * The ID of the person associated with the item
 * @export
 * @interface GetActivitiesResponse200RelatedObjectsPersonPERSONID
 */
export interface GetActivitiesResponse200RelatedObjectsPersonPERSONID {
    /**
     * The ID of the person associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONID
     */
    id?: number;
    /**
     * The name of the person associated with the item
     * @type {string}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONID
     */
    name?: string;
    /**
     * The emails of the person associated with the item
     * @type {Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner>}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONID
     */
    email?: Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInner>;
    /**
     * The phone numbers of the person associated with the item
     * @type {Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner>}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONID
     */
    phone?: Array<GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInner>;
    /**
     * The ID of the owner of the person that is associated with the item
     * @type {number}
     * @memberof GetActivitiesResponse200RelatedObjectsPersonPERSONID
     */
    owner_id?: number;
}

/**
 * Check if a given object implements the GetActivitiesResponse200RelatedObjectsPersonPERSONID interface.
 */
export function instanceOfGetActivitiesResponse200RelatedObjectsPersonPERSONID(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDFromJSON(json: any): GetActivitiesResponse200RelatedObjectsPersonPERSONID {
    return GetActivitiesResponse200RelatedObjectsPersonPERSONIDFromJSONTyped(json, false);
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivitiesResponse200RelatedObjectsPersonPERSONID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : ((json['email'] as Array<any>).map(GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerFromJSON)),
        'phone': !exists(json, 'phone') ? undefined : ((json['phone'] as Array<any>).map(GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerFromJSON)),
        'owner_id': !exists(json, 'owner_id') ? undefined : json['owner_id'],
    };
}

export function GetActivitiesResponse200RelatedObjectsPersonPERSONIDToJSON(value?: GetActivitiesResponse200RelatedObjectsPersonPERSONID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'email': value.email === undefined ? undefined : ((value.email as Array<any>).map(GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfEmailInnerToJSON)),
        'phone': value.phone === undefined ? undefined : ((value.phone as Array<any>).map(GetActivitiesResponse200RelatedObjectsPersonPERSONIDAllOfPhoneInnerToJSON)),
        'owner_id': value.owner_id,
    };
}

