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
 * @interface GetRecentsResponse200DataInnerAnyOf11DataAccessInner
 */
export interface GetRecentsResponse200DataInnerAnyOf11DataAccessInner {
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf11DataAccessInner
     */
    app?: GetRecentsResponse200DataInnerAnyOf11DataAccessInnerAppEnum;
    /**
     * 
     * @type {boolean}
     * @memberof GetRecentsResponse200DataInnerAnyOf11DataAccessInner
     */
    admin?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetRecentsResponse200DataInnerAnyOf11DataAccessInner
     */
    permission_set_id?: string;
}

/**
* @export
* @enum {string}
*/
export enum GetRecentsResponse200DataInnerAnyOf11DataAccessInnerAppEnum {
    Sales = 'sales',
    Projects = 'projects',
    Campaigns = 'campaigns',
    Global = 'global',
    AccountSettings = 'account_settings'
}


/**
 * Check if a given object implements the GetRecentsResponse200DataInnerAnyOf11DataAccessInner interface.
 */
export function instanceOfGetRecentsResponse200DataInnerAnyOf11DataAccessInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRecentsResponse200DataInnerAnyOf11DataAccessInnerFromJSON(json: any): GetRecentsResponse200DataInnerAnyOf11DataAccessInner {
    return GetRecentsResponse200DataInnerAnyOf11DataAccessInnerFromJSONTyped(json, false);
}

export function GetRecentsResponse200DataInnerAnyOf11DataAccessInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRecentsResponse200DataInnerAnyOf11DataAccessInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : json['app'],
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'permission_set_id': !exists(json, 'permission_set_id') ? undefined : json['permission_set_id'],
    };
}

export function GetRecentsResponse200DataInnerAnyOf11DataAccessInnerToJSON(value?: GetRecentsResponse200DataInnerAnyOf11DataAccessInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': value.app,
        'admin': value.admin,
        'permission_set_id': value.permission_set_id,
    };
}
