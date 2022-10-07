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
import { SearchDealsResponse200AllOfDataItemsInnerItemOrganization } from './searchDealsResponse200AllOfDataItemsInnerItemOrganization';
import { SearchDealsResponse200AllOfDataItemsInnerItemOwner } from './searchDealsResponse200AllOfDataItemsInnerItemOwner';
import { SearchDealsResponse200AllOfDataItemsInnerItemPerson } from './searchDealsResponse200AllOfDataItemsInnerItemPerson';
import { SearchDealsResponse200AllOfDataItemsInnerItemStage } from './searchDealsResponse200AllOfDataItemsInnerItemStage';

export class SearchDealsResponse200AllOfDataItemsInnerItem {
    /**
    * The ID of the deal
    */
    'id'?: number;
    /**
    * The type of the item
    */
    'type'?: string;
    /**
    * The title of the deal
    */
    'title'?: string;
    /**
    * The value of the deal
    */
    'value'?: number;
    /**
    * The currency of the deal
    */
    'currency'?: string;
    /**
    * The status of the deal
    */
    'status'?: string;
    /**
    * The visibility of the deal
    */
    'visibleTo'?: number;
    'owner'?: SearchDealsResponse200AllOfDataItemsInnerItemOwner;
    'stage'?: SearchDealsResponse200AllOfDataItemsInnerItemStage;
    'person'?: SearchDealsResponse200AllOfDataItemsInnerItemPerson | null;
    'organization'?: SearchDealsResponse200AllOfDataItemsInnerItemOrganization | null;
    /**
    * Custom fields
    */
    'customFields'?: Array<string>;
    /**
    * An array of notes
    */
    'notes'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "number"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "SearchDealsResponse200AllOfDataItemsInnerItemOwner"
        },
        {
            "name": "stage",
            "baseName": "stage",
            "type": "SearchDealsResponse200AllOfDataItemsInnerItemStage"
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "SearchDealsResponse200AllOfDataItemsInnerItemPerson"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "SearchDealsResponse200AllOfDataItemsInnerItemOrganization"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<string>"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return SearchDealsResponse200AllOfDataItemsInnerItem.attributeTypeMap;
    }
}

