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
import { ReceiveMessageRequestAttachmentsInner } from './receiveMessageRequestAttachmentsInner';

export class ReceiveMessageRequest {
    /**
    * The ID of the message
    */
    'id': string;
    /**
    * The channel ID as in the provider
    */
    'channelId': string;
    /**
    * The ID of the provider\'s user that sent the message
    */
    'senderId': string;
    /**
    * The ID of the conversation
    */
    'conversationId': string;
    /**
    * The body of the message
    */
    'message': string;
    /**
    * The status of the message
    */
    'status': ReceiveMessageRequest.StatusEnum;
    /**
    * The date and time when the message was created in the provider, in UTC. Format: YYYY-MM-DD HH:MM
    */
    'createdAt': Date;
    /**
    * The date and time when the message can no longer receive a reply, in UTC. Format: YYYY-MM-DD HH:MM
    */
    'replyBy'?: Date;
    /**
    * A URL that can open the conversation in the provider\'s side
    */
    'conversationLink'?: string;
    /**
    * The list of attachments available in the message
    */
    'attachments'?: Array<ReceiveMessageRequestAttachmentsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "channelId",
            "baseName": "channel_id",
            "type": "string"
        },
        {
            "name": "senderId",
            "baseName": "sender_id",
            "type": "string"
        },
        {
            "name": "conversationId",
            "baseName": "conversation_id",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ReceiveMessageRequest.StatusEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "replyBy",
            "baseName": "reply_by",
            "type": "Date"
        },
        {
            "name": "conversationLink",
            "baseName": "conversation_link",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<ReceiveMessageRequestAttachmentsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ReceiveMessageRequest.attributeTypeMap;
    }
}

export namespace ReceiveMessageRequest {
    export enum StatusEnum {
        Sent = <any> 'sent',
        Delivered = <any> 'delivered',
        Read = <any> 'read',
        Failed = <any> 'failed'
    }
}