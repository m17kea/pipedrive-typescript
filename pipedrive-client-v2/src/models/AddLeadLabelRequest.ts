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
 * @interface AddLeadLabelRequest
 */
export interface AddLeadLabelRequest {
    /**
     * The name of the lead label
     * @type {string}
     * @memberof AddLeadLabelRequest
     */
    name: string;
    /**
     * The color of the label. Only a subset of colors can be used.
     * @type {string}
     * @memberof AddLeadLabelRequest
     */
    color: AddLeadLabelRequestColorEnum;
}

/**
* @export
* @enum {string}
*/
export enum AddLeadLabelRequestColorEnum {
    Green = 'green',
    Blue = 'blue',
    Red = 'red',
    Yellow = 'yellow',
    Purple = 'purple',
    Gray = 'gray'
}


/**
 * Check if a given object implements the AddLeadLabelRequest interface.
 */
export function instanceOfAddLeadLabelRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "color" in value;

    return isInstance;
}

export function AddLeadLabelRequestFromJSON(json: any): AddLeadLabelRequest {
    return AddLeadLabelRequestFromJSONTyped(json, false);
}

export function AddLeadLabelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddLeadLabelRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'color': json['color'],
    };
}

export function AddLeadLabelRequestToJSON(value?: AddLeadLabelRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'color': value.color,
    };
}
