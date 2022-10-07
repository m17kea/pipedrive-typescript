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
import type { BaseTeam } from './BaseTeam';
import {
    BaseTeamFromJSON,
    BaseTeamFromJSONTyped,
    BaseTeamToJSON,
} from './BaseTeam';

/**
 * 
 * @export
 * @interface TeamResponse200
 */
export interface TeamResponse200 {
    /**
     * If the response is successful or not
     * @type {boolean}
     * @memberof TeamResponse200
     */
    success?: boolean;
    /**
     * 
     * @type {BaseTeam}
     * @memberof TeamResponse200
     */
    data?: BaseTeam;
}

/**
 * Check if a given object implements the TeamResponse200 interface.
 */
export function instanceOfTeamResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TeamResponse200FromJSON(json: any): TeamResponse200 {
    return TeamResponse200FromJSONTyped(json, false);
}

export function TeamResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : BaseTeamFromJSON(json['data']),
    };
}

export function TeamResponse200ToJSON(value?: TeamResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': BaseTeamToJSON(value.data),
    };
}

