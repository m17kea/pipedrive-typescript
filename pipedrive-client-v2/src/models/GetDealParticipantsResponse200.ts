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
import type { GetDealsResponse200RelatedObjects } from './GetDealsResponse200RelatedObjects';
import {
    GetDealsResponse200RelatedObjectsFromJSON,
    GetDealsResponse200RelatedObjectsFromJSONTyped,
    GetDealsResponse200RelatedObjectsToJSON,
} from './GetDealsResponse200RelatedObjects';
import type { PersonItem } from './PersonItem';
import {
    PersonItemFromJSON,
    PersonItemFromJSONTyped,
    PersonItemToJSON,
} from './PersonItem';

/**
 * 
 * @export
 * @interface GetDealParticipantsResponse200
 */
export interface GetDealParticipantsResponse200 {
    /**
     * If the request was successful or not
     * @type {boolean}
     * @memberof GetDealParticipantsResponse200
     */
    success?: boolean;
    /**
     * The array of participants
     * @type {Array<PersonItem>}
     * @memberof GetDealParticipantsResponse200
     */
    data?: Array<PersonItem>;
    /**
     * 
     * @type {FieldsResponse200AllOfAdditionalData}
     * @memberof GetDealParticipantsResponse200
     */
    additional_data?: FieldsResponse200AllOfAdditionalData;
    /**
     * 
     * @type {GetDealsResponse200RelatedObjects}
     * @memberof GetDealParticipantsResponse200
     */
    related_objects?: GetDealsResponse200RelatedObjects;
}

/**
 * Check if a given object implements the GetDealParticipantsResponse200 interface.
 */
export function instanceOfGetDealParticipantsResponse200(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDealParticipantsResponse200FromJSON(json: any): GetDealParticipantsResponse200 {
    return GetDealParticipantsResponse200FromJSONTyped(json, false);
}

export function GetDealParticipantsResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDealParticipantsResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(PersonItemFromJSON)),
        'additional_data': !exists(json, 'additional_data') ? undefined : FieldsResponse200AllOfAdditionalDataFromJSON(json['additional_data']),
        'related_objects': !exists(json, 'related_objects') ? undefined : GetDealsResponse200RelatedObjectsFromJSON(json['related_objects']),
    };
}

export function GetDealParticipantsResponse200ToJSON(value?: GetDealParticipantsResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(PersonItemToJSON)),
        'additional_data': FieldsResponse200AllOfAdditionalDataToJSON(value.additional_data),
        'related_objects': GetDealsResponse200RelatedObjectsToJSON(value.related_objects),
    };
}
