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
import { GetOrganizationRelationshipsResponse200AllOfRelatedObjects } from './getOrganizationRelationshipsResponse200AllOfRelatedObjects';
import { OrganizationRelationshipWithCalculatedFieldsAllOf } from './organizationRelationshipWithCalculatedFieldsAllOf';

export class UpdateOrganizationRelationshipResponse200 {
    /**
    * If the response is successful or not
    */
    'success'?: boolean;
    'data'?: OrganizationRelationshipWithCalculatedFieldsAllOf;
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
            "type": "OrganizationRelationshipWithCalculatedFieldsAllOf"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "GetOrganizationRelationshipsResponse200AllOfRelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return UpdateOrganizationRelationshipResponse200.attributeTypeMap;
    }
}

