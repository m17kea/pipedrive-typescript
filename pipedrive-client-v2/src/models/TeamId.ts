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
 * @interface TeamId
 */
export interface TeamId {
    /**
     * The team ID
     * @type {number}
     * @memberof TeamId
     */
    id?: number;
}

/**
 * Check if a given object implements the TeamId interface.
 */
export function instanceOfTeamId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TeamIdFromJSON(json: any): TeamId {
    return TeamIdFromJSONTyped(json, false);
}

export function TeamIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function TeamIdToJSON(value?: TeamId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

