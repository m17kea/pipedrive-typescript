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
import { MailMessageItemForListAllOfFromInner } from './mailMessageItemForListAllOfFromInner';

export class MailMessageItemForList {
    /**
    * ID of the mail message.
    */
    'id'?: number;
    /**
    * The array of mail message sender (object)
    */
    'from'?: Array<MailMessageItemForListAllOfFromInner>;
    /**
    * The array of mail message receiver (object)
    */
    'to'?: Array<MailMessageItemForListAllOfFromInner>;
    /**
    * The array of mail message copies (object)
    */
    'cc'?: Array<MailMessageItemForListAllOfFromInner>;
    /**
    * The array of mail message blind copies (object)
    */
    'bcc'?: Array<MailMessageItemForListAllOfFromInner>;
    /**
    * The mail message body URL
    */
    'bodyUrl'?: string;
    /**
    * The connection account ID
    */
    'accountId'?: string;
    /**
    * ID of the user whom mail message will be assigned to
    */
    'userId'?: number;
    /**
    * ID of the mail message thread
    */
    'mailThreadId'?: number;
    /**
    * The subject of mail message
    */
    'subject'?: string;
    /**
    * The snippet of mail message. Snippet length is up to 225 characters.
    */
    'snippet'?: string;
    /**
    * The status of tracking mail message. Value is `null` if tracking is not enabled.
    */
    'mailTrackingStatus'?: MailMessageItemForList.MailTrackingStatusEnum;
    'mailLinkTrackingEnabledFlag'?: MailMessageItemForList.MailLinkTrackingEnabledFlagEnum = MailMessageItemForList.MailLinkTrackingEnabledFlagEnum.NUMBER_0;
    'readFlag'?: MailMessageItemForList.ReadFlagEnum = MailMessageItemForList.ReadFlagEnum.NUMBER_0;
    /**
    * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise `null`.
    */
    'draft'?: string;
    'draftFlag'?: MailMessageItemForList.DraftFlagEnum = MailMessageItemForList.DraftFlagEnum.NUMBER_0;
    'syncedFlag'?: MailMessageItemForList.SyncedFlagEnum = MailMessageItemForList.SyncedFlagEnum.NUMBER_0;
    'deletedFlag'?: MailMessageItemForList.DeletedFlagEnum = MailMessageItemForList.DeletedFlagEnum.NUMBER_0;
    'hasBodyFlag'?: MailMessageItemForList.HasBodyFlagEnum = MailMessageItemForList.HasBodyFlagEnum.NUMBER_0;
    'sentFlag'?: MailMessageItemForList.SentFlagEnum = MailMessageItemForList.SentFlagEnum.NUMBER_0;
    'sentFromPipedriveFlag'?: MailMessageItemForList.SentFromPipedriveFlagEnum = MailMessageItemForList.SentFromPipedriveFlagEnum.NUMBER_0;
    'smartBccFlag'?: MailMessageItemForList.SmartBccFlagEnum = MailMessageItemForList.SmartBccFlagEnum.NUMBER_0;
    /**
    * Creation or receival time of the mail message
    */
    'messageTime'?: Date;
    /**
    * The insertion into the database time of the mail message
    */
    'addTime'?: Date;
    /**
    * The updating time in the database of the mail message
    */
    'updateTime'?: Date;
    'hasAttachmentsFlag'?: MailMessageItemForList.HasAttachmentsFlagEnum = MailMessageItemForList.HasAttachmentsFlagEnum.NUMBER_0;
    'hasInlineAttachmentsFlag'?: MailMessageItemForList.HasInlineAttachmentsFlagEnum = MailMessageItemForList.HasInlineAttachmentsFlagEnum.NUMBER_0;
    'hasRealAttachmentsFlag'?: MailMessageItemForList.HasRealAttachmentsFlagEnum = MailMessageItemForList.HasRealAttachmentsFlagEnum.NUMBER_0;
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
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "Array<MailMessageItemForListAllOfFromInner>"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<MailMessageItemForListAllOfFromInner>"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<MailMessageItemForListAllOfFromInner>"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<MailMessageItemForListAllOfFromInner>"
        },
        {
            "name": "bodyUrl",
            "baseName": "body_url",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "mailThreadId",
            "baseName": "mail_thread_id",
            "type": "number"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "snippet",
            "baseName": "snippet",
            "type": "string"
        },
        {
            "name": "mailTrackingStatus",
            "baseName": "mail_tracking_status",
            "type": "MailMessageItemForList.MailTrackingStatusEnum"
        },
        {
            "name": "mailLinkTrackingEnabledFlag",
            "baseName": "mail_link_tracking_enabled_flag",
            "type": "MailMessageItemForList.MailLinkTrackingEnabledFlagEnum"
        },
        {
            "name": "readFlag",
            "baseName": "read_flag",
            "type": "MailMessageItemForList.ReadFlagEnum"
        },
        {
            "name": "draft",
            "baseName": "draft",
            "type": "string"
        },
        {
            "name": "draftFlag",
            "baseName": "draft_flag",
            "type": "MailMessageItemForList.DraftFlagEnum"
        },
        {
            "name": "syncedFlag",
            "baseName": "synced_flag",
            "type": "MailMessageItemForList.SyncedFlagEnum"
        },
        {
            "name": "deletedFlag",
            "baseName": "deleted_flag",
            "type": "MailMessageItemForList.DeletedFlagEnum"
        },
        {
            "name": "hasBodyFlag",
            "baseName": "has_body_flag",
            "type": "MailMessageItemForList.HasBodyFlagEnum"
        },
        {
            "name": "sentFlag",
            "baseName": "sent_flag",
            "type": "MailMessageItemForList.SentFlagEnum"
        },
        {
            "name": "sentFromPipedriveFlag",
            "baseName": "sent_from_pipedrive_flag",
            "type": "MailMessageItemForList.SentFromPipedriveFlagEnum"
        },
        {
            "name": "smartBccFlag",
            "baseName": "smart_bcc_flag",
            "type": "MailMessageItemForList.SmartBccFlagEnum"
        },
        {
            "name": "messageTime",
            "baseName": "message_time",
            "type": "Date"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "Date"
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "Date"
        },
        {
            "name": "hasAttachmentsFlag",
            "baseName": "has_attachments_flag",
            "type": "MailMessageItemForList.HasAttachmentsFlagEnum"
        },
        {
            "name": "hasInlineAttachmentsFlag",
            "baseName": "has_inline_attachments_flag",
            "type": "MailMessageItemForList.HasInlineAttachmentsFlagEnum"
        },
        {
            "name": "hasRealAttachmentsFlag",
            "baseName": "has_real_attachments_flag",
            "type": "MailMessageItemForList.HasRealAttachmentsFlagEnum"
        },
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
        return MailMessageItemForList.attributeTypeMap;
    }
}

export namespace MailMessageItemForList {
    export enum MailTrackingStatusEnum {
        Opened = <any> 'opened',
        NotOpened = <any> 'not opened'
    }
    export enum MailLinkTrackingEnabledFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum ReadFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum DraftFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum SyncedFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum DeletedFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum HasBodyFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum SentFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum SentFromPipedriveFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum SmartBccFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum HasAttachmentsFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum HasInlineAttachmentsFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
    export enum HasRealAttachmentsFlagEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}
