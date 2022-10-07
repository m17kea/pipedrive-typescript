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

export class GetproductResponse200Data {
    /**
    * The ID of the product
    */
    'id'?: number;
    /**
    * The name of the product
    */
    'name'?: string;
    /**
    * The product code
    */
    'code'?: string;
    /**
    * The unit in which this product is sold
    */
    'unit'?: string;
    /**
    * The ax percentage
    */
    'tax'?: number = 0;
    /**
    * Whether this product is active or not
    */
    'activeFlag'?: GetproductResponse200Data.ActiveFlagEnum = GetproductResponse200Data.ActiveFlagEnum.NUMBER_1;
    /**
    * Whether this product is selected in deals or not
    */
    'selectable'?: GetproductResponse200Data.SelectableEnum = GetproductResponse200Data.SelectableEnum.NUMBER_1;
    'visibleTo'?: GetproductResponse200Data.VisibleToEnum;
    /**
    * Information about the Pipedrive user who owns the product
    */
    'ownerId'?: object;
    /**
    * Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional)
    */
    'prices'?: Array<object>;

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
            "type": "GetproductResponse200Data.ActiveFlagEnum"
        },
        {
            "name": "selectable",
            "baseName": "selectable",
            "type": "GetproductResponse200Data.SelectableEnum"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "GetproductResponse200Data.VisibleToEnum"
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "object"
        },
        {
            "name": "prices",
            "baseName": "prices",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return GetproductResponse200Data.attributeTypeMap;
    }
}

export namespace GetproductResponse200Data {
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
