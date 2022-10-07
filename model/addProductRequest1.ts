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

export class AddProductRequest1 {
    /**
    * The name of the product
    */
    'name': string;
    /**
    * The product code
    */
    'code'?: string;
    /**
    * The unit in which this product is sold
    */
    'unit'?: string;
    /**
    * The tax percentage
    */
    'tax'?: number = 0;
    /**
    * Whether this product will be made active or not
    */
    'activeFlag'?: AddProductRequest1.ActiveFlagEnum = AddProductRequest1.ActiveFlagEnum.NUMBER_1;
    /**
    * Whether this product can be selected in deals or not
    */
    'selectable'?: AddProductRequest1.SelectableEnum = AddProductRequest1.SelectableEnum.NUMBER_1;
    'visibleTo'?: AddProductRequest1.VisibleToEnum;
    /**
    * The ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used.
    */
    'ownerId'?: number;
    /**
    * An array of objects, each containing: `currency` (string), `price` (number), `cost` (number, optional), `overhead_cost` (number, optional). Note that there can only be one price per product per currency. When `prices` is omitted altogether, a default price of 0 and a default currency based on the company\'s currency will be assigned.
    */
    'prices'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "AddProductRequest1.ActiveFlagEnum"
        },
        {
            "name": "selectable",
            "baseName": "selectable",
            "type": "AddProductRequest1.SelectableEnum"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "AddProductRequest1.VisibleToEnum"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "number"
        },
        {
            "name": "prices",
            "baseName": "prices",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return AddProductRequest1.attributeTypeMap;
    }
}

export namespace AddProductRequest1 {
    export enum ActiveFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum SelectableEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum VisibleToEnum {
        _1 = <any> '1',
        _3 = <any> '3',
        _5 = <any> '5',
        _7 = <any> '7'
    }
}