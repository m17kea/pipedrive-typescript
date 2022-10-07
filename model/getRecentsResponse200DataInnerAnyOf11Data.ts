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
import { GetRecentsResponse200DataInnerAnyOf11DataAccessInner } from './getRecentsResponse200DataInnerAnyOf11DataAccessInner';

export class GetRecentsResponse200DataInnerAnyOf11Data {
    /**
    * The user ID
    */
    'id'?: number;
    /**
    * The user name
    */
    'name'?: string;
    /**
    * The user default currency
    */
    'defaultCurrency'?: string;
    /**
    * The user locale
    */
    'locale'?: string;
    /**
    * The user language ID
    */
    'lang'?: number;
    /**
    * The user email
    */
    'email'?: string;
    /**
    * The user phone
    */
    'phone'?: string | null;
    /**
    * Boolean that indicates whether the user is activated
    */
    'activated'?: boolean;
    /**
    * The last login date and time of the user. Format: YYYY-MM-DD HH:MM:SS
    */
    'lastLogin'?: string;
    /**
    * The creation date and time of the user. Format: YYYY-MM-DD HH:MM:SS
    */
    'created'?: string;
    /**
    * The last modification date and time of the user. Format: YYYY-MM-DD HH:MM:SS
    */
    'modified'?: string | null;
    /**
    * Boolean that indicates whether the user has created a company
    */
    'hasCreatedCompany'?: boolean;
    'access'?: Array<GetRecentsResponse200DataInnerAnyOf11DataAccessInner>;
    /**
    * Boolean that indicates whether the user is activated
    */
    'activeFlag'?: boolean;
    /**
    * The user timezone name
    */
    'timezoneName'?: string;
    /**
    * The user timezone offset
    */
    'timezoneOffset'?: string;
    /**
    * The ID of the user role
    */
    'roleId'?: number;
    /**
    * The user icon URL
    */
    'iconUrl'?: string | null;
    /**
    * Boolean that indicates if the requested user is the same which is logged in (in this case, always true)
    */
    'isYou'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "defaultCurrency",
            "baseName": "default_currency",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "lang",
            "baseName": "lang",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "activated",
            "baseName": "activated",
            "type": "boolean"
        },
        {
            "name": "lastLogin",
            "baseName": "last_login",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        },
        {
            "name": "modified",
            "baseName": "modified",
            "type": "string"
        },
        {
            "name": "hasCreatedCompany",
            "baseName": "has_created_company",
            "type": "boolean"
        },
        {
            "name": "access",
            "baseName": "access",
            "type": "Array<GetRecentsResponse200DataInnerAnyOf11DataAccessInner>"
        },
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        },
        {
            "name": "timezoneName",
            "baseName": "timezone_name",
            "type": "string"
        },
        {
            "name": "timezoneOffset",
            "baseName": "timezone_offset",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "role_id",
            "type": "number"
        },
        {
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string"
        },
        {
            "name": "isYou",
            "baseName": "is_you",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetRecentsResponse200DataInnerAnyOf11Data.attributeTypeMap;
    }
}
