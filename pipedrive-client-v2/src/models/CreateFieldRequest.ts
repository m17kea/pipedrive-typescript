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
 * @interface CreateFieldRequest
 */
export interface CreateFieldRequest {
    /**
     * The name of the field
     * @type {string}
     * @memberof CreateFieldRequest
     */
    name: string;
    /**
     * When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: `[{"label":"New Item"}]`
     * @type {string}
     * @memberof CreateFieldRequest
     */
    options?: string;
    /**
     * Whether the field is available in the 'add new' modal or not (both in the web and mobile app)
     * @type {boolean}
     * @memberof CreateFieldRequest
     */
    add_visible_flag?: CreateFieldRequestAddVisibleFlagEnum;
    /**
     * The type of the field<table><tr><th>Value</th><th>Description</th></tr><tr><td>`address`</td><td>Address field (has multiple subfields, autocompleted by Google Maps)</td></tr><tr><td>`date`</td><td>Date (format YYYY-MM-DD)</td></tr><tr><td>`daterange`</td><td>Date-range field (has a start date and end date value, both YYYY-MM-DD)</td></tr><tr><td>`double`</td><td>Numeric value</td></tr><tr><td>`enum`</td><td>Options field with a single possible chosen option</td></tr><tr></tr><tr><td>`monetary`</td><td>Monetary field (has a numeric value and a currency value)</td></tr><tr><td>`org`</td><td>Organization field (contains an organization ID which is stored on the same account)</td></tr><tr><td>`people`</td><td>Person field (contains a person ID which is stored on the same account)</td></tr><tr><td>`phone`</td><td>Phone field (up to 255 numbers and/or characters)</td></tr><tr><td>`set`</td><td>Options field with a possibility of having multiple chosen options</td></tr><tr><td>`text`</td><td>Long text (up to 65k characters)</td></tr><tr><td>`time`</td><td>Time field (format HH:MM:SS)</td></tr><tr><td>`timerange`</td><td>Time-range field (has a start time and end time value, both HH:MM:SS)</td></tr><tr><td>`user`</td><td>User field (contains a user ID of another Pipedrive user)</td></tr><tr><td>`varchar`</td><td>Text (up to 255 characters)</td></tr><tr><td>`varchar_auto`</td><td>Autocomplete text (up to 255 characters)</td></tr><tr><td>`visible_to`</td><td>System field that keeps item's visibility setting</td></tr></table>
     * @type {string}
     * @memberof CreateFieldRequest
     */
    field_type: CreateFieldRequestFieldTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum CreateFieldRequestAddVisibleFlagEnum {
    True = true,
    False = false
}
/**
* @export
* @enum {string}
*/
export enum CreateFieldRequestFieldTypeEnum {
    Address = 'address',
    Date = 'date',
    Daterange = 'daterange',
    Double = 'double',
    Enum = 'enum',
    Monetary = 'monetary',
    Org = 'org',
    People = 'people',
    Phone = 'phone',
    Set = 'set',
    Text = 'text',
    Time = 'time',
    Timerange = 'timerange',
    User = 'user',
    Varchar = 'varchar',
    VarcharAuto = 'varchar_auto',
    VisibleTo = 'visible_to'
}


/**
 * Check if a given object implements the CreateFieldRequest interface.
 */
export function instanceOfCreateFieldRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "field_type" in value;

    return isInstance;
}

export function CreateFieldRequestFromJSON(json: any): CreateFieldRequest {
    return CreateFieldRequestFromJSONTyped(json, false);
}

export function CreateFieldRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFieldRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'add_visible_flag': !exists(json, 'add_visible_flag') ? undefined : json['add_visible_flag'],
        'field_type': json['field_type'],
    };
}

export function CreateFieldRequestToJSON(value?: CreateFieldRequest | null): any {
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
        'field_type': value.field_type,
    };
}

