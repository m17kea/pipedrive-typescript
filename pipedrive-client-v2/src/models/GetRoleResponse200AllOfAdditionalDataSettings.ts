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
 * The settings for the role
 * @export
 * @interface GetRoleResponse200AllOfAdditionalDataSettings
 */
export interface GetRoleResponse200AllOfAdditionalDataSettings {
    /**
     * The default visibility level of the deals for the role
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    deal_default_visibility?: number;
    /**
     * The default visibility level of the leads for the role
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    lead_default_visibility?: number;
    /**
     * The default visibility level of the organizations for the role
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    org_default_visibility?: number;
    /**
     * The default visibility level of the people for the role
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    person_default_visibility?: number;
    /**
     * The default visibility level of the products for the role
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    product_default_visibility?: number;
    /**
     * The access level of the deals for the role (only for default role)
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    deal_access_level?: number;
    /**
     * The access level of the organizations for the role (only for default role)
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    org_access_level?: number;
    /**
     * The access level of the people for the role (only for default role)
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    person_access_level?: number;
    /**
     * The access level of the products for the role (only for default role)
     * @type {number}
     * @memberof GetRoleResponse200AllOfAdditionalDataSettings
     */
    product_access_level?: number;
}

/**
 * Check if a given object implements the GetRoleResponse200AllOfAdditionalDataSettings interface.
 */
export function instanceOfGetRoleResponse200AllOfAdditionalDataSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRoleResponse200AllOfAdditionalDataSettingsFromJSON(json: any): GetRoleResponse200AllOfAdditionalDataSettings {
    return GetRoleResponse200AllOfAdditionalDataSettingsFromJSONTyped(json, false);
}

export function GetRoleResponse200AllOfAdditionalDataSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRoleResponse200AllOfAdditionalDataSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deal_default_visibility': !exists(json, 'deal_default_visibility') ? undefined : json['deal_default_visibility'],
        'lead_default_visibility': !exists(json, 'lead_default_visibility') ? undefined : json['lead_default_visibility'],
        'org_default_visibility': !exists(json, 'org_default_visibility') ? undefined : json['org_default_visibility'],
        'person_default_visibility': !exists(json, 'person_default_visibility') ? undefined : json['person_default_visibility'],
        'product_default_visibility': !exists(json, 'product_default_visibility') ? undefined : json['product_default_visibility'],
        'deal_access_level': !exists(json, 'deal_access_level') ? undefined : json['deal_access_level'],
        'org_access_level': !exists(json, 'org_access_level') ? undefined : json['org_access_level'],
        'person_access_level': !exists(json, 'person_access_level') ? undefined : json['person_access_level'],
        'product_access_level': !exists(json, 'product_access_level') ? undefined : json['product_access_level'],
    };
}

export function GetRoleResponse200AllOfAdditionalDataSettingsToJSON(value?: GetRoleResponse200AllOfAdditionalDataSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deal_default_visibility': value.deal_default_visibility,
        'lead_default_visibility': value.lead_default_visibility,
        'org_default_visibility': value.org_default_visibility,
        'person_default_visibility': value.person_default_visibility,
        'product_default_visibility': value.product_default_visibility,
        'deal_access_level': value.deal_access_level,
        'org_access_level': value.org_access_level,
        'person_access_level': value.person_access_level,
        'product_access_level': value.product_access_level,
    };
}
