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
* The added product object attached to the deal
*/
export class GetAddProductAttachementResponse200Data {
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
    * The product tax
    */
    'tax'?: number;
    'enabledFlag'?: GetAddProductAttachementResponse200Data.EnabledFlagEnum;
    /**
    * The ID of the deal-product (the ID of the product attached to the deal)
    */
    'id'?: number;
    /**
    * The ID of the company
    */
    'companyId'?: number;
    /**
    * The ID of the deal
    */
    'dealId'?: number;
    /**
    * The ID of the product
    */
    'productId': number;
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
    * The date and time when the product was added to the deal
    */
    'addTime'?: string;
    /**
    * The date and time when the deal product was last edited
    */
    'lastEdit'?: string;
    /**
    * Whether the product is active or not
    */
    'activeFlag'?: boolean;
    /**
    * The product name
    */
    'name'?: string;
    /**
    * The ID of the deal-product (the ID of the product attached to the deal)
    */
    'productAttachmentId'?: number;

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
            "type": "GetAddProductAttachementResponse200Data.EnabledFlagEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "companyId",
            "baseName": "company_id",
            "type": "number"
        },
        {
            "name": "dealId",
            "baseName": "deal_id",
            "type": "number"
        },
        {
            "name": "productId",
            "baseName": "product_id",
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
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "productAttachmentId",
            "baseName": "product_attachment_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetAddProductAttachementResponse200Data.attributeTypeMap;
    }
}

export namespace GetAddProductAttachementResponse200Data {
    export enum EnabledFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}
