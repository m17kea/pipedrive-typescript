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

/**
* The user language details
*/
export class GetCurrentUserResponse200AllOfDataAllOfLanguage {
    /**
    * The language code. E.g. en
    */
    'languageCode'?: string;
    /**
    * The country code. E.g. US
    */
    'countryCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "languageCode",
            "baseName": "language_code",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetCurrentUserResponse200AllOfDataAllOfLanguage.attributeTypeMap;
    }
}

