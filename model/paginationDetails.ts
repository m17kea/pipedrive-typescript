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
* Pagination details of the list
*/
export class PaginationDetails {
    /**
    * Pagination start
    */
    'start'?: number;
    /**
    * Items shown per page
    */
    'limit'?: number;
    /**
    * If there are more list items in the collection than displayed or not
    */
    'moreItemsInCollection'?: boolean;
    /**
    * Next pagination start
    */
    'nextStart'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "moreItemsInCollection",
            "baseName": "more_items_in_collection",
            "type": "boolean"
        },
        {
            "name": "nextStart",
            "baseName": "next_start",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PaginationDetails.attributeTypeMap;
    }
}
