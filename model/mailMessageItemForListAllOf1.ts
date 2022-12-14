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

export class MailMessageItemForListAllOf1 {
    /**
    * The Mail Message ID assigned by the sync provider
    */
    'nylasId'?: string;
    /**
    * The name of the S3 bucket
    */
    's3Bucket'?: string;
    /**
    * The path of the S3 bucket
    */
    's3BucketPath'?: string;
    /**
    * If the Mail Message has been deleted on the provider side or not
    */
    'externalDeletedFlag'?: boolean;
    /**
    * The Mail Message ID assigned by the mail user agent
    */
    'muaMessageId'?: string;
    /**
    * The ID of the mail template
    */
    'templateId'?: number;
    /**
    * The add date and time of the Mail Message
    */
    'timestamp'?: string;
    /**
    * The type of the data item
    */
    'itemType'?: string;
    /**
    * The ID of the company
    */
    'companyId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nylasId",
            "baseName": "nylas_id",
            "type": "string"
        },
        {
            "name": "s3Bucket",
            "baseName": "s3_bucket",
            "type": "string"
        },
        {
            "name": "s3BucketPath",
            "baseName": "s3_bucket_path",
            "type": "string"
        },
        {
            "name": "externalDeletedFlag",
            "baseName": "external_deleted_flag",
            "type": "boolean"
        },
        {
            "name": "muaMessageId",
            "baseName": "mua_message_id",
            "type": "string"
        },
        {
            "name": "templateId",
            "baseName": "template_id",
            "type": "number"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "itemType",
            "baseName": "item_type",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "company_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MailMessageItemForListAllOf1.attributeTypeMap;
    }
}

