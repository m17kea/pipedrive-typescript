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
 * @interface TeamsResponse200AllOf
 */
export interface TeamsResponse200AllOf {
    /**
     * 
     * @type {Array<BaseTeam>}
     * @memberof TeamsResponse200AllOf
     */
    data?: Array<BaseTeam>;
}

/**
 * Check if a given object implements the TeamsResponse200AllOf interface.
 */
export function instanceOfTeamsResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TeamsResponse200AllOfFromJSON(json: any): TeamsResponse200AllOf {
    return TeamsResponse200AllOfFromJSONTyped(json, false);
}

export function TeamsResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamsResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BaseTeamFromJSON)),
    };
}

export function TeamsResponse200AllOfToJSON(value?: TeamsResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BaseTeamToJSON)),
    };
}

