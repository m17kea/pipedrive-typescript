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
import type { BasicPersonRequestEmailInner } from './BasicPersonRequestEmailInner';
import {
    BasicPersonRequestEmailInnerFromJSON,
    BasicPersonRequestEmailInnerFromJSONTyped,
    BasicPersonRequestEmailInnerToJSON,
} from './BasicPersonRequestEmailInner';
import type { PersonItemAllOfPhoneInner } from './PersonItemAllOfPhoneInner';
import {
    PersonItemAllOfPhoneInnerFromJSON,
    PersonItemAllOfPhoneInnerFromJSONTyped,
    PersonItemAllOfPhoneInnerToJSON,
} from './PersonItemAllOfPhoneInner';

/**
 * 
 * @export
 * @interface AddPersonRequest
 */
export interface AddPersonRequest {
    /**
     * The name of the person
     * @type {string}
     * @memberof AddPersonRequest
     */
    name: string;
    /**
     * The ID of the user who will be marked as the owner of this person. When omitted, the authorized user ID will be used.
     * @type {number}
     * @memberof AddPersonRequest
     */
    owner_id?: number;
    /**
     * The ID of the organization this person will belong to
     * @type {number}
     * @memberof AddPersonRequest
     */
    org_id?: number;
    /**
     * List of email data related to the person
     * @type {Array<BasicPersonRequestEmailInner>}
     * @memberof AddPersonRequest
     */
    email?: Array<BasicPersonRequestEmailInner>;
    /**
     * The primary email of the person
     * @type {string}
     * @memberof AddPersonRequest
     */
    primary_email?: string;
    /**
     * List of phone data related to the person
     * @type {Array<PersonItemAllOfPhoneInner>}
     * @memberof AddPersonRequest
     */
    phone?: Array<PersonItemAllOfPhoneInner>;
    /**
     * 
     * @type {string}
     * @memberof AddPersonRequest
     */
    visible_to?: AddPersonRequestVisibleToEnum;
    /**
     * 
     * @type {string}
     * @memberof AddPersonRequest
     */
    marketing_status?: AddPersonRequestMarketingStatusEnum;
    /**
     * The optional creation date & time of the person in UTC. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @type {string}
     * @memberof AddPersonRequest
     */
    add_time?: string;
}

/**
* @export
* @enum {string}
*/
export enum AddPersonRequestVisibleToEnum {
    _1 = '1',
    _3 = '3',
    _5 = '5',
    _7 = '7'
}
/**
* @export
* @enum {string}
*/
export enum AddPersonRequestMarketingStatusEnum {
    NoConsent = 'no_consent',
    Unsubscribed = 'unsubscribed',
    Subscribed = 'subscribed',
    Archived = 'archived'
}


/**
 * Check if a given object implements the AddPersonRequest interface.
 */
export function instanceOfAddPersonRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AddPersonRequestFromJSON(json: any): AddPersonRequest {
    return AddPersonRequestFromJSONTyped(json, false);
}

export function AddPersonRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPersonRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'owner_id': !exists(json, 'owner_id') ? undefined : json['owner_id'],
        'org_id': !exists(json, 'org_id') ? undefined : json['org_id'],
        'email': !exists(json, 'email') ? undefined : ((json['email'] as Array<any>).map(BasicPersonRequestEmailInnerFromJSON)),
        'primary_email': !exists(json, 'primary_email') ? undefined : json['primary_email'],
        'phone': !exists(json, 'phone') ? undefined : ((json['phone'] as Array<any>).map(PersonItemAllOfPhoneInnerFromJSON)),
        'visible_to': !exists(json, 'visible_to') ? undefined : json['visible_to'],
        'marketing_status': !exists(json, 'marketing_status') ? undefined : json['marketing_status'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
    };
}

export function AddPersonRequestToJSON(value?: AddPersonRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'owner_id': value.owner_id,
        'org_id': value.org_id,
        'email': value.email === undefined ? undefined : ((value.email as Array<any>).map(BasicPersonRequestEmailInnerToJSON)),
        'primary_email': value.primary_email,
        'phone': value.phone === undefined ? undefined : ((value.phone as Array<any>).map(PersonItemAllOfPhoneInnerToJSON)),
        'visible_to': value.visible_to,
        'marketing_status': value.marketing_status,
        'add_time': value.add_time,
    };
}

