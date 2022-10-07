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
 * @interface UpdateFieldRequest
 */
export interface UpdateFieldRequest {
    /**
     * The name of the field
     * @type {string}
     * @memberof UpdateFieldRequest
     */
    name?: string;
    /**
     * When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: `[{"id":123,"label":"Existing Item"},{"label":"New Item"}]`
     * @type {string}
     * @memberof UpdateFieldRequest
     */
    options?: string;
    /**
     * Whether the field is available in 'add new' modal or not (both in web and mobile app)
     * @type {boolean}
     * @memberof UpdateFieldRequest
     */
    add_visible_flag?: UpdateFieldRequestAddVisibleFlagEnum;
}

/**
* @export
* @enum {string}
*/
export enum UpdateFieldRequestAddVisibleFlagEnum {
    True = true,
    False = false
}


/**
 * Check if a given object implements the UpdateFieldRequest interface.
 */
export function instanceOfUpdateFieldRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFieldRequestFromJSON(json: any): UpdateFieldRequest {
    return UpdateFieldRequestFromJSONTyped(json, false);
}

export function UpdateFieldRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFieldRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'add_visible_flag': !exists(json, 'add_visible_flag') ? undefined : json['add_visible_flag'],
    };
}

export function UpdateFieldRequestToJSON(value?: UpdateFieldRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'options': value.options,
        'add_visible_flag': value.add_visible_flag,
    };
}

