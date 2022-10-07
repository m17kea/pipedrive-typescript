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

export class AddOrganizationRelationshipRequest {
    /**
    * The ID of the base organization for the returned calculated values
    */
    'orgId'?: number;
    /**
    * The type of organization relationship
    */
    'type': AddOrganizationRelationshipRequest.TypeEnum;
    /**
    * The owner of the relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
    */
    'relOwnerOrgId': number;
    /**
    * The linked organization in the relationship. If type is `parent`, then the linked organization is the daughter.
    */
    'relLinkedOrgId': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orgId",
            "baseName": "org_id",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AddOrganizationRelationshipRequest.TypeEnum"
        },
        {
            "name": "relOwnerOrgId",
            "baseName": "rel_owner_org_id",
            "type": "number"
        },
        {
            "name": "relLinkedOrgId",
            "baseName": "rel_linked_org_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AddOrganizationRelationshipRequest.attributeTypeMap;
    }
}

export namespace AddOrganizationRelationshipRequest {
    export enum TypeEnum {
        Parent = <any> 'parent',
        Related = <any> 'related'
    }
}
