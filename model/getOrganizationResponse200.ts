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
import { GetOrganizationResponse200AllOfAdditionalData } from './getOrganizationResponse200AllOfAdditionalData';
import { GetOrganizationsResponse200AllOfRelatedObjects } from './getOrganizationsResponse200AllOfRelatedObjects';
import { OrganizationItem } from './organizationItem';

export class GetOrganizationResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: OrganizationItem;
    'additionalData'?: GetOrganizationResponse200AllOfAdditionalData;
    'relatedObjects'?: GetOrganizationsResponse200AllOfRelatedObjects;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "OrganizationItem"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "GetOrganizationResponse200AllOfAdditionalData"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "GetOrganizationsResponse200AllOfRelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return GetOrganizationResponse200.attributeTypeMap;
    }
}

