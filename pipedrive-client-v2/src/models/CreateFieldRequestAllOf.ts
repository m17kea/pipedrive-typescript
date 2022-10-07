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
 * @interface CreateFieldRequestAllOf
 */
export interface CreateFieldRequestAllOf {
    /**
     * The name of the field
     * @type {string}
     * @memberof CreateFieldRequestAllOf
     */
    name: string;
    /**
     * When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: `[{"label":"New Item"}]`
     * @type {string}
     * @memberof CreateFieldRequestAllOf
     */
    options?: string;
    /**
     * Whether the field is available in the 'add new' modal or not (both in the web and mobile app)
     * @type {boolean}
     * @memberof CreateFieldRequestAllOf
     */
    add_visible_flag?: CreateFieldRequestAllOfAddVisibleFlagEnum;
}

/**
* @export
* @enum {string}
*/
export enum CreateFieldRequestAllOfAddVisibleFlagEnum {
    True = true,
    False = false
}


/**
 * Check if a given object implements the CreateFieldRequestAllOf interface.
 */
export function instanceOfCreateFieldRequestAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CreateFieldRequestAllOfFromJSON(json: any): CreateFieldRequestAllOf {
    return CreateFieldRequestAllOfFromJSONTyped(json, false);
}

export function CreateFieldRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFieldRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'add_visible_flag': !exists(json, 'add_visible_flag') ? undefined : json['add_visible_flag'],
    };
}

export function CreateFieldRequestAllOfToJSON(value?: CreateFieldRequestAllOf | null): any {
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
