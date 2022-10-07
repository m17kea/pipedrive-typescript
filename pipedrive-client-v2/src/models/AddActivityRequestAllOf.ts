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
 * @interface AddActivityRequestAllOf
 */
export interface AddActivityRequestAllOf {
    /**
     * The subject of the activity. When value for subject is not set, it will be given a default value `Call`.
     * @type {string}
     * @memberof AddActivityRequestAllOf
     */
    subject?: string;
    /**
     * The type of the activity. This is in correlation with the `key_string` parameter of ActivityTypes. When value for type is not set, it will be given a default value `Call`.
     * @type {string}
     * @memberof AddActivityRequestAllOf
     */
    type?: string;
    /**
     * The ID of the user whom the activity is assigned to. If omitted, the activity is assigned to the authorized user.
     * @type {number}
     * @memberof AddActivityRequestAllOf
     */
    user_id?: number;
    /**
     * List of multiple persons (participants) this activity is associated with. If omitted, single participant from `person_id` field is used. It requires a structure as follows: `[{"person_id":1,"primary_flag":true}]`
     * @type {Array<object>}
     * @memberof AddActivityRequestAllOf
     */
    participants?: Array<object>;
    /**
     * Set the activity as 'Busy' or 'Free'. If the flag is set to `true`, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with `null`. When the value of the flag is unset (`null`), the flag defaults to 'Busy' if it has a time set, and 'Free' if it is an all-day event without specified time.
     * @type {boolean}
     * @memberof AddActivityRequestAllOf
     */
    busy_flag?: AddActivityRequestAllOfBusyFlagEnum;
    /**
     * The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: `[{"email_address":"mail@example.org"}]` or `[{"person_id":1, "email_address":"mail@example.org"}]`
     * @type {Array<object>}
     * @memberof AddActivityRequestAllOf
     */
    attendees?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof AddActivityRequestAllOf
     */
    done?: AddActivityRequestAllOfDoneEnum;
}

/**
* @export
* @enum {string}
*/
export enum AddActivityRequestAllOfBusyFlagEnum {
    True = true,
    False = false
}
/**
* @export
* @enum {string}
*/
export enum AddActivityRequestAllOfDoneEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}


/**
 * Check if a given object implements the AddActivityRequestAllOf interface.
 */
export function instanceOfAddActivityRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddActivityRequestAllOfFromJSON(json: any): AddActivityRequestAllOf {
    return AddActivityRequestAllOfFromJSONTyped(json, false);
}

export function AddActivityRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddActivityRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'participants': !exists(json, 'participants') ? undefined : json['participants'],
        'busy_flag': !exists(json, 'busy_flag') ? undefined : json['busy_flag'],
        'attendees': !exists(json, 'attendees') ? undefined : json['attendees'],
        'done': !exists(json, 'done') ? undefined : json['done'],
    };
}

export function AddActivityRequestAllOfToJSON(value?: AddActivityRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subject': value.subject,
        'type': value.type,
        'user_id': value.user_id,
        'participants': value.participants,
        'busy_flag': value.busy_flag,
        'attendees': value.attendees,
        'done': value.done,
    };
}
