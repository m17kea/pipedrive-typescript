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
import type { FieldsResponse200AllOfAdditionalData } from './FieldsResponse200AllOfAdditionalData';
import {
    FieldsResponse200AllOfAdditionalDataFromJSON,
    FieldsResponse200AllOfAdditionalDataFromJSONTyped,
    FieldsResponse200AllOfAdditionalDataToJSON,
} from './FieldsResponse200AllOfAdditionalData';
import type { GetAssociatedUpdatesResponse200AllOfDataInner } from './GetAssociatedUpdatesResponse200AllOfDataInner';
import {
    GetAssociatedUpdatesResponse200AllOfDataInnerFromJSON,
    GetAssociatedUpdatesResponse200AllOfDataInnerFromJSONTyped,
    GetAssociatedUpdatesResponse200AllOfDataInnerToJSON,
} from './GetAssociatedUpdatesResponse200AllOfDataInner';
import type { GetAssociatedUpdatesResponse200AllOfRelatedObjects } from './GetAssociatedUpdatesResponse200AllOfRelatedObjects';
import {
    GetAssociatedUpdatesResponse200AllOfRelatedObjectsFromJSON,
    GetAssociatedUpdatesResponse200AllOfRelatedObjectsFromJSONTyped,
    GetAssociatedUpdatesResponse200AllOfRelatedObjectsToJSON,
} from './GetAssociatedUpdatesResponse200AllOfRelatedObjects';

/**
 * 
 * @export
 * @interface GetAssociatedUpdatesResponse200AllOf
 */
export interface GetAssociatedUpdatesResponse200AllOf {
    /**
     * 
     * @type {Array<GetAssociatedUpdatesResponse200AllOfDataInner>}
     * @memberof GetAssociatedUpdatesResponse200AllOf
     */
    data?: Array<GetAssociatedUpdatesResponse200AllOfDataInner>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof GetAssociatedUpdatesResponse200AllOf
     */
    additional_data?: FieldsResponse200AllOfAdditionalData;
    /**
     * 
     * @type {GetAssociatedUpdatesResponse200AllOfRelatedObjects}
     * @memberof GetAssociatedUpdatesResponse200AllOf
     */
    related_objects?: GetAssociatedUpdatesResponse200AllOfRelatedObjects;
}

/**
 * Check if a given object implements the GetAssociatedUpdatesResponse200AllOf interface.
 */
export function instanceOfGetAssociatedUpdatesResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAssociatedUpdatesResponse200AllOfFromJSON(json: any): GetAssociatedUpdatesResponse200AllOf {
    return GetAssociatedUpdatesResponse200AllOfFromJSONTyped(json, false);
}

export function GetAssociatedUpdatesResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAssociatedUpdatesResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GetAssociatedUpdatesResponse200AllOfDataInnerFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : FieldsResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
        'related_objects': !exists(json, 'related_objects') ? undefined : GetAssociatedUpdatesResponse200AllOfRelatedObjectsFromJSON(json['related_objects']),
    };
}

export function GetAssociatedUpdatesResponse200AllOfToJSON(value?: GetAssociatedUpdatesResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GetAssociatedUpdatesResponse200AllOfDataInnerToJSON)),
        'additional_data': FieldsResponse200AllOfAdditionalDataToJSON(value.additional_data),
        'related_objects': GetAssociatedUpdatesResponse200AllOfRelatedObjectsToJSON(value.related_objects),
    };
}

