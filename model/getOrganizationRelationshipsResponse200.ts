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
import { FieldsResponse200AllOfAdditionalData } from './fieldsResponse200AllOfAdditionalData';
import { GetOrganizationRelationshipsResponse200AllOfRelatedObjects } from './getOrganizationRelationshipsResponse200AllOfRelatedObjects';
import { OrganizationRelationshipDetails } from './organizationRelationshipDetails';

export class GetOrganizationRelationshipsResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    /**
    * The array of organization relationships
    */
    'data'?: Array<OrganizationRelationshipDetails>;
    'additionalData'?: FieldsResponse200AllOfAdditionalData;
    'relatedObjects'?: GetOrganizationRelationshipsResponse200AllOfRelatedObjects;

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
            "type": "Array<OrganizationRelationshipDetails>"
        },
        {
            "name": "additionalData",
            "baseName": "additional_data",
            "type": "FieldsResponse200AllOfAdditionalData"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "GetOrganizationRelationshipsResponse200AllOfRelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return GetOrganizationRelationshipsResponse200.attributeTypeMap;
    }
}

