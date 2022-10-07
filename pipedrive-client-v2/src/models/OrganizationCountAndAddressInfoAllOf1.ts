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
 * @interface OrganizationCountAndAddressInfoAllOf1
 */
export interface OrganizationCountAndAddressInfoAllOf1 {
    /**
     * The full address of the organization
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address?: string;
    /**
     * The sub-premise of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_subpremise?: string;
    /**
     * The street number of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_street_number?: string;
    /**
     * The route of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_route?: string;
    /**
     * The sub-locality of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_sublocality?: string;
    /**
     * The locality of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_locality?: string;
    /**
     * The level 1 admin area of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_admin_area_level_1?: string;
    /**
     * The level 2 admin area of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_admin_area_level_2?: string;
    /**
     * The country of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_country?: string;
    /**
     * The postal code of the organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_postal_code?: string;
    /**
     * The formatted organization location
     * @type {string}
     * @memberof OrganizationCountAndAddressInfoAllOf1
     */
    address_formatted_address?: string;
}

/**
 * Check if a given object implements the OrganizationCountAndAddressInfoAllOf1 interface.
 */
export function instanceOfOrganizationCountAndAddressInfoAllOf1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationCountAndAddressInfoAllOf1FromJSON(json: any): OrganizationCountAndAddressInfoAllOf1 {
    return OrganizationCountAndAddressInfoAllOf1FromJSONTyped(json, false);
}

export function OrganizationCountAndAddressInfoAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationCountAndAddressInfoAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'address_subpremise': !exists(json, 'address_subpremise') ? undefined : json['address_subpremise'],
        'address_street_number': !exists(json, 'address_street_number') ? undefined : json['address_street_number'],
        'address_route': !exists(json, 'address_route') ? undefined : json['address_route'],
        'address_sublocality': !exists(json, 'address_sublocality') ? undefined : json['address_sublocality'],
        'address_locality': !exists(json, 'address_locality') ? undefined : json['address_locality'],
        'address_admin_area_level_1': !exists(json, 'address_admin_area_level_1') ? undefined : json['address_admin_area_level_1'],
        'address_admin_area_level_2': !exists(json, 'address_admin_area_level_2') ? undefined : json['address_admin_area_level_2'],
        'address_country': !exists(json, 'address_country') ? undefined : json['address_country'],
        'address_postal_code': !exists(json, 'address_postal_code') ? undefined : json['address_postal_code'],
        'address_formatted_address': !exists(json, 'address_formatted_address') ? undefined : json['address_formatted_address'],
    };
}

export function OrganizationCountAndAddressInfoAllOf1ToJSON(value?: OrganizationCountAndAddressInfoAllOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'address_subpremise': value.address_subpremise,
        'address_street_number': value.address_street_number,
        'address_route': value.address_route,
        'address_sublocality': value.address_sublocality,
        'address_locality': value.address_locality,
        'address_admin_area_level_1': value.address_admin_area_level_1,
        'address_admin_area_level_2': value.address_admin_area_level_2,
        'address_country': value.address_country,
        'address_postal_code': value.address_postal_code,
        'address_formatted_address': value.address_formatted_address,
    };
}
