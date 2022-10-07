/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetAddProductAttachementResponse200DataAllOfAllOfAllOf
 */
export interface GetAddProductAttachementResponse200DataAllOfAllOfAllOf {
    /**
     * The ID of the deal-product (the ID of the product attached to the deal)
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    id?: number;
    /**
     * The ID of the company
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    company_id?: number;
    /**
     * The ID of the deal
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    deal_id?: number;
    /**
     * The ID of the product
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    product_id?: number;
    /**
     * The type of the duration. (For example hourly, daily, etc.)
     * @type {string}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    duration_unit?: string;
    /**
     * The product sum without the discount
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    sum_no_discount?: number;
    /**
     * The sum of all the products attached to the deal
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    sum?: number;
    /**
     * The currency associated with the deal product
     * @type {string}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    currency?: string;
    /**
     * The date and time when the product was added to the deal
     * @type {string}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    add_time?: string;
    /**
     * The date and time when the deal product was last edited
     * @type {string}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    last_edit?: string;
    /**
     * Whether the product is active or not
     * @type {boolean}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    active_flag?: boolean;
    /**
     * The product tax
     * @type {number}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    tax?: number;
    /**
     * The product name
     * @type {string}
     * @memberof GetAddProductAttachementResponse200DataAllOfAllOfAllOf
     */
    name?: string;
}

/**
 * Check if a given object implements the GetAddProductAttachementResponse200DataAllOfAllOfAllOf interface.
 */
export function instanceOfGetAddProductAttachementResponse200DataAllOfAllOfAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAddProductAttachementResponse200DataAllOfAllOfAllOfFromJSON(json: any): GetAddProductAttachementResponse200DataAllOfAllOfAllOf {
    return GetAddProductAttachementResponse200DataAllOfAllOfAllOfFromJSONTyped(json, false);
}

export function GetAddProductAttachementResponse200DataAllOfAllOfAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAddProductAttachementResponse200DataAllOfAllOfAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'company_id': !exists(json, 'company_id') ? undefined : json['company_id'],
        'deal_id': !exists(json, 'deal_id') ? undefined : json['deal_id'],
        'product_id': !exists(json, 'product_id') ? undefined : json['product_id'],
        'duration_unit': !exists(json, 'duration_unit') ? undefined : json['duration_unit'],
        'sum_no_discount': !exists(json, 'sum_no_discount') ? undefined : json['sum_no_discount'],
        'sum': !exists(json, 'sum') ? undefined : json['sum'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'add_time': !exists(json, 'add_time') ? undefined : json['add_time'],
        'last_edit': !exists(json, 'last_edit') ? undefined : json['last_edit'],
        'active_flag': !exists(json, 'active_flag') ? undefined : json['active_flag'],
        'tax': !exists(json, 'tax') ? undefined : json['tax'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function GetAddProductAttachementResponse200DataAllOfAllOfAllOfToJSON(value?: GetAddProductAttachementResponse200DataAllOfAllOfAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'company_id': value.company_id,
        'deal_id': value.deal_id,
        'product_id': value.product_id,
        'duration_unit': value.duration_unit,
        'sum_no_discount': value.sum_no_discount,
        'sum': value.sum,
        'currency': value.currency,
        'add_time': value.add_time,
        'last_edit': value.last_edit,
        'active_flag': value.active_flag,
        'tax': value.tax,
        'name': value.name,
    };
}
