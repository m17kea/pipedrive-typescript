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
import { BaseMailThreadAllOf1PartiesToInner } from './baseMailThreadAllOf1PartiesToInner';

/**
* Parties of the mail thread
*/
export class BaseMailThreadAllOf1Parties {
    /**
    * Recipients of the mail thread
    */
    'to'?: Array<BaseMailThreadAllOf1PartiesToInner>;
    /**
    * Senders of the mail thread
    */
    'from'?: Array<BaseMailThreadAllOf1PartiesToInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<BaseMailThreadAllOf1PartiesToInner>"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "Array<BaseMailThreadAllOf1PartiesToInner>"
        }    ];

    static getAttributeTypeMap() {
        return BaseMailThreadAllOf1Parties.attributeTypeMap;
    }
}

