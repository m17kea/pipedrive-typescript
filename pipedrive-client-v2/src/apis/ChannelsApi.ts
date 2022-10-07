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


import * as runtime from '../runtime';
import type {
  AddChannel200Response,
  AddChannel400Response,
  AddChannel403Response,
  AddChannelRequest,
  DeleteChannel200Response,
  DeleteConversation403Response,
  DeleteConversation404Response,
  ReceiveMessage200Response,
  ReceiveMessage400Response,
  ReceiveMessageRequest,
} from '../models';
import {
    AddChannel200ResponseFromJSON,
    AddChannel200ResponseToJSON,
    AddChannel400ResponseFromJSON,
    AddChannel400ResponseToJSON,
    AddChannel403ResponseFromJSON,
    AddChannel403ResponseToJSON,
    AddChannelRequestFromJSON,
    AddChannelRequestToJSON,
    DeleteChannel200ResponseFromJSON,
    DeleteChannel200ResponseToJSON,
    DeleteConversation403ResponseFromJSON,
    DeleteConversation403ResponseToJSON,
    DeleteConversation404ResponseFromJSON,
    DeleteConversation404ResponseToJSON,
    ReceiveMessage200ResponseFromJSON,
    ReceiveMessage200ResponseToJSON,
    ReceiveMessage400ResponseFromJSON,
    ReceiveMessage400ResponseToJSON,
    ReceiveMessageRequestFromJSON,
    ReceiveMessageRequestToJSON,
} from '../models';

export interface AddChannelOperationRequest {
    addChannelRequest?: AddChannelRequest;
}

export interface DeleteChannelRequest {
    id: string;
}

export interface DeleteConversationRequest {
    channelId: string;
    conversationId: string;
}

export interface ReceiveMessageOperationRequest {
    receiveMessageRequest?: ReceiveMessageRequest;
}

/**
 * ChannelsApi - interface
 * 
 * @export
 * @interface ChannelsApiInterface
 */
export interface ChannelsApiInterface {
    /**
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Add a channel
     * @param {AddChannelRequest} [addChannelRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiInterface
     */
    addChannelRaw(requestParameters: AddChannelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddChannel200Response>>;

    /**
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Add a channel
     */
    addChannel(requestParameters: AddChannelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddChannel200Response>;

    /**
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Delete a channel
     * @param {string} id The ID of the channel provided by the integration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiInterface
     */
    deleteChannelRaw(requestParameters: DeleteChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteChannel200Response>>;

    /**
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Delete a channel
     */
    deleteChannel(requestParameters: DeleteChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteChannel200Response>;

    /**
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Delete a conversation
     * @param {string} channelId The ID of the channel provided by the integration
     * @param {string} conversationId The ID of the conversation provided by the integration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiInterface
     */
    deleteConversationRaw(requestParameters: DeleteConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteChannel200Response>>;

    /**
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Delete a conversation
     */
    deleteConversation(requestParameters: DeleteConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteChannel200Response>;

    /**
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * @summary Receives an incoming message
     * @param {ReceiveMessageRequest} [receiveMessageRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiInterface
     */
    receiveMessageRaw(requestParameters: ReceiveMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReceiveMessage200Response>>;

    /**
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Receives an incoming message
     */
    receiveMessage(requestParameters: ReceiveMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReceiveMessage200Response>;

}

/**
 * 
 */
export class ChannelsApi extends runtime.BaseAPI implements ChannelsApiInterface {

    /**
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Add a channel
     */
    async addChannelRaw(requestParameters: AddChannelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddChannel200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/channels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddChannelRequestToJSON(requestParameters.addChannelRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddChannel200ResponseFromJSON(jsonValue));
    }

    /**
     * Adds a new messaging channel, only admins are able to register new channels. It will use the getConversations endpoint to fetch conversations, participants and messages afterward. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Add a channel
     */
    async addChannel(requestParameters: AddChannelOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddChannel200Response> {
        const response = await this.addChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Delete a channel
     */
    async deleteChannelRaw(requestParameters: DeleteChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteChannel200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteChannel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/channels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteChannel200ResponseFromJSON(jsonValue));
    }

    /**
     * Deletes an existing messenger’s channel and all related entities (conversations and messages). To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Delete a channel
     */
    async deleteChannel(requestParameters: DeleteChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteChannel200Response> {
        const response = await this.deleteChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Delete a conversation
     */
    async deleteConversationRaw(requestParameters: DeleteConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteChannel200Response>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling deleteConversation.');
        }

        if (requestParameters.conversationId === null || requestParameters.conversationId === undefined) {
            throw new runtime.RequiredError('conversationId','Required parameter requestParameters.conversationId was null or undefined when calling deleteConversation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/channels/{channel-id}/conversations/{conversation-id}`.replace(`{${"channel-id"}}`, encodeURIComponent(String(requestParameters.channelId))).replace(`{${"conversation-id"}}`, encodeURIComponent(String(requestParameters.conversationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteChannel200ResponseFromJSON(jsonValue));
    }

    /**
     * Deletes an existing conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Delete a conversation
     */
    async deleteConversation(requestParameters: DeleteConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteChannel200Response> {
        const response = await this.deleteConversationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Receives an incoming message
     */
    async receiveMessageRaw(requestParameters: ReceiveMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReceiveMessage200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/channels/messages/receive`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReceiveMessageRequestToJSON(requestParameters.receiveMessageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReceiveMessage200ResponseFromJSON(jsonValue));
    }

    /**
     * Adds a message to a conversation. To use the endpoint, you need to have **Messengers integration** OAuth scope enabled and the Messaging manifest ready for the [Messaging app extension](https://pipedrive.readme.io/docs/messaging-app-extension).
     * Receives an incoming message
     */
    async receiveMessage(requestParameters: ReceiveMessageOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReceiveMessage200Response> {
        const response = await this.receiveMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}