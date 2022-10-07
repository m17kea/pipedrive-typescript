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
 * @interface UpdateTeamRequest
 */
export interface UpdateTeamRequest {
    /**
     * The team name
     * @type {string}
     * @memberof UpdateTeamRequest
     */
    name: string;
    /**
     * The team description
     * @type {string}
     * @memberof UpdateTeamRequest
     */
    description?: string;
    /**
     * The team manager ID
     * @type {number}
     * @memberof UpdateTeamRequest
     */
    manager_id: number;
    /**
     * The IDs of the users that belong to the team
     * @type {Array<number>}
     * @memberof UpdateTeamRequest
     */
    users?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof UpdateTeamRequest
     */
    active_flag?: UpdateTeamRequestActiveFlagEnum;
    /**
     * 
     * @type {number}
     * @memberof UpdateTeamRequest
     */
    deleted_flag?: UpdateTeamRequestDeletedFlagEnum;
}

/**
* @export
* @enum {string}
*/
export enum UpdateTeamRequestActiveFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
* @export
* @enum {string}
*/
export enum UpdateTeamRequestDeletedFlagEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}


/**
 * Check if a given object implements the UpdateTeamRequest interface.
 */
export function instanceOfUpdateTeamRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "manager_id" in value;

    return isInstance;
}

export function UpdateTeamRequestFromJSON(json: any): UpdateTeamRequest {
    return UpdateTeamRequestFromJSONTyped(json, false);
}

export function UpdateTeamRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTeamRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'manager_id': json['manager_id'],
        'users': !exists(json, 'users') ? undefined : json['users'],
        'active_flag': !exists(json, 'active_flag') ? undefined : json['active_flag'],
        'deleted_flag': !exists(json, 'deleted_flag') ? undefined : json['deleted_flag'],
    };
}

export function UpdateTeamRequestToJSON(value?: UpdateTeamRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'manager_id': value.manager_id,
        'users': value.users,
        'active_flag': value.active_flag,
        'deleted_flag': value.deleted_flag,
    };
}

