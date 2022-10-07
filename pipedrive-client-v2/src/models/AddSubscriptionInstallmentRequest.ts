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
 * @interface AddSubscriptionInstallmentRequest
 */
export interface AddSubscriptionInstallmentRequest {
    /**
     * The ID of the deal this installment subscription is associated with
     * @type {number}
     * @memberof AddSubscriptionInstallmentRequest
     */
    deal_id: number;
    /**
     * The currency of the installment subscription. Accepts a 3-character currency code.
     * @type {string}
     * @memberof AddSubscriptionInstallmentRequest
     */
    currency: string;
    /**
     * Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
     * @type {Array<object>}
     * @memberof AddSubscriptionInstallmentRequest
     */
    payments: Array<object>;
    /**
     * Indicates that the deal value must be set to the installment subscription's total value
     * @type {boolean}
     * @memberof AddSubscriptionInstallmentRequest
     */
    update_deal_value?: boolean;
}

/**
 * Check if a given object implements the AddSubscriptionInstallmentRequest interface.
 */
export function instanceOfAddSubscriptionInstallmentRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deal_id" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "payments" in value;

    return isInstance;
}

export function AddSubscriptionInstallmentRequestFromJSON(json: any): AddSubscriptionInstallmentRequest {
    return AddSubscriptionInstallmentRequestFromJSONTyped(json, false);
}

export function AddSubscriptionInstallmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddSubscriptionInstallmentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deal_id': json['deal_id'],
        'currency': json['currency'],
        'payments': json['payments'],
        'update_deal_value': !exists(json, 'update_deal_value') ? undefined : json['update_deal_value'],
    };
}

export function AddSubscriptionInstallmentRequestToJSON(value?: AddSubscriptionInstallmentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deal_id': value.deal_id,
        'currency': value.currency,
        'payments': value.payments,
        'update_deal_value': value.update_deal_value,
    };
}
