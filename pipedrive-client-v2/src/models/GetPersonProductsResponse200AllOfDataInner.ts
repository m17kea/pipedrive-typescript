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
import type { GetPersonProductsResponse200AllOfDataInnerDEALID } from './GetPersonProductsResponse200AllOfDataInnerDEALID';
import {
    GetPersonProductsResponse200AllOfDataInnerDEALIDFromJSON,
    GetPersonProductsResponse200AllOfDataInnerDEALIDFromJSONTyped,
    GetPersonProductsResponse200AllOfDataInnerDEALIDToJSON,
} from './GetPersonProductsResponse200AllOfDataInnerDEALID';

/**
 * 
 * @export
 * @interface GetPersonProductsResponse200AllOfDataInner
 */
export interface GetPersonProductsResponse200AllOfDataInner {
    /**
     * 
     * @type {GetPersonProductsResponse200AllOfDataInnerDEALID}
     * @memberof GetPersonProductsResponse200AllOfDataInner
     */
    DEAL_ID?: GetPersonProductsResponse200AllOfDataInnerDEALID;
}

/**
 * Check if a given object implements the GetPersonProductsResponse200AllOfDataInner interface.
 */
export function instanceOfGetPersonProductsResponse200AllOfDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPersonProductsResponse200AllOfDataInnerFromJSON(json: any): GetPersonProductsResponse200AllOfDataInner {
    return GetPersonProductsResponse200AllOfDataInnerFromJSONTyped(json, false);
}

export function GetPersonProductsResponse200AllOfDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPersonProductsResponse200AllOfDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'DEAL_ID': !exists(json, 'DEAL_ID') ? undefined : GetPersonProductsResponse200AllOfDataInnerDEALIDFromJSON(json['DEAL_ID']),
    };
}

export function GetPersonProductsResponse200AllOfDataInnerToJSON(value?: GetPersonProductsResponse200AllOfDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DEAL_ID': GetPersonProductsResponse200AllOfDataInnerDEALIDToJSON(value.DEAL_ID),
    };
}

