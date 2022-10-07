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

export class DeleteDealProductResponse200Data {
    /**
    * The ID of an attached product that was deleted from the deal
    */
    'id'?: number;
    /**
    * The ID of an attached product that was deleted from the deal
    */
    'productAttachmentId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "productAttachmentId",
            "baseName": "product_attachment_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DeleteDealProductResponse200Data.attributeTypeMap;
    }
}

