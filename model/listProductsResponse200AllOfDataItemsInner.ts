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
import { ListProductsResponse200AllOfDataItemsInnerProduct } from './listProductsResponse200AllOfDataItemsInnerProduct';

export class ListProductsResponse200AllOfDataItemsInner {
    /**
    * The ID of the deal-product (the ID of the product attached to the deal)
    */
    'id'?: number;
    /**
    * The ID of the deal
    */
    'dealId'?: number;
    /**
    * The order number of the product
    */
    'orderNr'?: number;
    /**
    * The ID of the product
    */
    'productId'?: number;
    /**
    * The ID of the product variation
    */
    'productVariationId'?: number;
    /**
    * The price value of the product
    */
    'itemPrice'?: number;
    /**
    * The discount percentage of the product
    */
    'discountPercentage'?: number;
    /**
    * The duration of the product
    */
    'duration'?: number;
    /**
    * The type of the duration. (For example hourly, daily, etc.)
    */
    'durationUnit'?: string;
    /**
    * The product sum without the discount
    */
    'sumNoDiscount'?: number;
    /**
    * The sum of all the products attached to the deal
    */
    'sum'?: number;
    /**
    * The currency associated with the deal product
    */
    'currency'?: string;
    /**
    * Whether the product is enabled or not
    */
    'enabledFlag'?: boolean;
    /**
    * The date and time when the product was added to the deal
    */
    'addTime'?: string;
    /**
    * The date and time when the deal product was last edited
    */
    'lastEdit'?: string;
    /**
    * The comments of the product
    */
    'comments'?: string;
    /**
    * Whether the product is active or not
    */
    'activeFlag'?: boolean;
    /**
    * The product tax
    */
    'tax'?: number;
    /**
    * The product name
    */
    'name'?: string;
    /**
    * The formatted sum of the product
    */
    'sumFormatted'?: string;
    /**
    * The formatted quantity of the product
    */
    'quantityFormatted'?: string;
    /**
    * The quantity of the product
    */
    'quantity'?: number;
    'product'?: ListProductsResponse200AllOfDataItemsInnerProduct;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "dealId",
            "baseName": "deal_id",
            "type": "number"
        },
        {
            "name": "orderNr",
            "baseName": "order_nr",
            "type": "number"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "number"
        },
        {
            "name": "productVariationId",
            "baseName": "product_variation_id",
            "type": "number"
        },
        {
            "name": "itemPrice",
            "baseName": "item_price",
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
            "name": "durationUnit",
            "baseName": "duration_unit",
            "type": "string"
        },
        {
            "name": "sumNoDiscount",
            "baseName": "sum_no_discount",
            "type": "number"
        },
        {
            "name": "sum",
            "baseName": "sum",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "enabledFlag",
            "baseName": "enabled_flag",
            "type": "boolean"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        },
        {
            "name": "lastEdit",
            "baseName": "last_edit",
            "type": "string"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string"
        },
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sumFormatted",
            "baseName": "sum_formatted",
            "type": "string"
        },
        {
            "name": "quantityFormatted",
            "baseName": "quantity_formatted",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "ListProductsResponse200AllOfDataItemsInnerProduct"
        }    ];

    static getAttributeTypeMap() {
        return ListProductsResponse200AllOfDataItemsInner.attributeTypeMap;
    }
}

