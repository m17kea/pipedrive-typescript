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

export class AddDealProductRequest {
    /**
    * The price at which this product will be added to the deal
    */
    'itemPrice': number;
    /**
    * Quantity – e.g. how many items of this product will be added to the deal
    */
    'quantity': number;
    /**
    * The discount %. If omitted, will be set to 0.
    */
    'discountPercentage'?: number = 0;
    /**
    * The duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1)
    */
    'duration'?: number = 1;
    /**
    * The ID of the product variation to use. When omitted, no variation will be used.
    */
    'productVariationId'?: number;
    /**
    * Any textual comment associated with this product-deal attachment. Visible and editable in the application UI.
    */
    'comments'?: string;
    /**
    * The tax percentage
    */
    'tax'?: number = 0;
    'enabledFlag'?: AddDealProductRequest.EnabledFlagEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemPrice",
            "baseName": "item_price",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "discountPercentage",
            "baseName": "discount_percentage",
            "type": "number"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "productVariationId",
            "baseName": "product_variation_id",
            "type": "number"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "enabledFlag",
            "baseName": "enabled_flag",
            "type": "AddDealProductRequest.EnabledFlagEnum"
        }    ];

    static getAttributeTypeMap() {
        return AddDealProductRequest.attributeTypeMap;
    }
}

export namespace AddDealProductRequest {
    export enum EnabledFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}
