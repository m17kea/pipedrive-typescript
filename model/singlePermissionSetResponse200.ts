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

export class SinglePermissionSetResponse200 {
    /**
    * The ID of user permission set
    */
    'id'?: string;
    /**
    * The name of the permission set
    */
    'name'?: string;
    /**
    * The description of the permission set
    */
    'description'?: string;
    /**
    * The app that permission set belongs to
    */
    'app'?: SinglePermissionSetResponse200.AppEnum;
    /**
    * The type of permission set
    */
    'type'?: SinglePermissionSetResponse200.TypeEnum;
    /**
    * The number of users assigned to this permission set
    */
    'assignmentCount'?: number;
    /**
    * A permission assigned to this permission set
    */
    'contents'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "app",
            "baseName": "app",
            "type": "SinglePermissionSetResponse200.AppEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SinglePermissionSetResponse200.TypeEnum"
        },
        {
            "name": "assignmentCount",
            "baseName": "assignment_count",
            "type": "number"
        },
        {
            "name": "contents",
            "baseName": "contents",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return SinglePermissionSetResponse200.attributeTypeMap;
    }
}

export namespace SinglePermissionSetResponse200 {
    export enum AppEnum {
        Sales = <any> 'sales',
        Projects = <any> 'projects',
        Campaigns = <any> 'campaigns',
        Global = <any> 'global',
        AccountSettings = <any> 'account_settings'
    }
    export enum TypeEnum {
        Admin = <any> 'admin',
        Manager = <any> 'manager',
        Regular = <any> 'regular',
        Custom = <any> 'custom'
    }
}
