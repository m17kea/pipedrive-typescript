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
import type { GetOrganizationsResponse200AllOfRelatedObjectsPicture } from './GetOrganizationsResponse200AllOfRelatedObjectsPicture';
import {
    GetOrganizationsResponse200AllOfRelatedObjectsPictureFromJSON,
    GetOrganizationsResponse200AllOfRelatedObjectsPictureFromJSONTyped,
    GetOrganizationsResponse200AllOfRelatedObjectsPictureToJSON,
} from './GetOrganizationsResponse200AllOfRelatedObjectsPicture';

/**
 * 
 * @export
 * @interface AddPersonPictureResponse200AllOf
 */
export interface AddPersonPictureResponse200AllOf {
    /**
     * 
     * @type {GetOrganizationsResponse200AllOfRelatedObjectsPicture}
     * @memberof AddPersonPictureResponse200AllOf
     */
    data?: GetOrganizationsResponse200AllOfRelatedObjectsPicture;
}

/**
 * Check if a given object implements the AddPersonPictureResponse200AllOf interface.
 */
export function instanceOfAddPersonPictureResponse200AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddPersonPictureResponse200AllOfFromJSON(json: any): AddPersonPictureResponse200AllOf {
    return AddPersonPictureResponse200AllOfFromJSONTyped(json, false);
}

export function AddPersonPictureResponse200AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPersonPictureResponse200AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GetOrganizationsResponse200AllOfRelatedObjectsPictureFromJSON(json['data']),
    };
}

export function AddPersonPictureResponse200AllOfToJSON(value?: AddPersonPictureResponse200AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetOrganizationsResponse200AllOfRelatedObjectsPictureToJSON(value.data),
    };
}
