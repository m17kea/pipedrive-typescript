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

import { RequestFile } from './models';

export class OrganizationCountAndAddressInfoAllOf1 {
    /**
    * The full address of the organization
    */
    'address'?: string;
    /**
    * The sub-premise of the organization location
    */
    'addressSubpremise'?: string;
    /**
    * The street number of the organization location
    */
    'addressStreetNumber'?: string;
    /**
    * The route of the organization location
    */
    'addressRoute'?: string;
    /**
    * The sub-locality of the organization location
    */
    'addressSublocality'?: string;
    /**
    * The locality of the organization location
    */
    'addressLocality'?: string;
    /**
    * The level 1 admin area of the organization location
    */
    'addressAdminAreaLevel1'?: string;
    /**
    * The level 2 admin area of the organization location
    */
    'addressAdminAreaLevel2'?: string;
    /**
    * The country of the organization location
    */
    'addressCountry'?: string;
    /**
    * The postal code of the organization location
    */
    'addressPostalCode'?: string;
    /**
    * The formatted organization location
    */
    'addressFormattedAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "addressSubpremise",
            "baseName": "address_subpremise",
            "type": "string"
        },
        {
            "name": "addressStreetNumber",
            "baseName": "address_street_number",
            "type": "string"
        },
        {
            "name": "addressRoute",
            "baseName": "address_route",
            "type": "string"
        },
        {
            "name": "addressSublocality",
            "baseName": "address_sublocality",
            "type": "string"
        },
        {
            "name": "addressLocality",
            "baseName": "address_locality",
            "type": "string"
        },
        {
            "name": "addressAdminAreaLevel1",
            "baseName": "address_admin_area_level_1",
            "type": "string"
        },
        {
            "name": "addressAdminAreaLevel2",
            "baseName": "address_admin_area_level_2",
            "type": "string"
        },
        {
            "name": "addressCountry",
            "baseName": "address_country",
            "type": "string"
        },
        {
            "name": "addressPostalCode",
            "baseName": "address_postal_code",
            "type": "string"
        },
        {
            "name": "addressFormattedAddress",
            "baseName": "address_formatted_address",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationCountAndAddressInfoAllOf1.attributeTypeMap;
    }
}
