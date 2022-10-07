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
  CreateUpdateDeleteActivityTypeResponse200,
  DeleteActivityTypesResponse200,
  GetActivityTypesResponse200,
} from '../models';
import {
    CreateUpdateDeleteActivityTypeResponse200FromJSON,
    CreateUpdateDeleteActivityTypeResponse200ToJSON,
    DeleteActivityTypesResponse200FromJSON,
    DeleteActivityTypesResponse200ToJSON,
    GetActivityTypesResponse200FromJSON,
    GetActivityTypesResponse200ToJSON,
} from '../models';

export interface AddActivityTypeRequest {
    name: string;
    iconKey: AddActivityTypeIconKeyEnum;
    color?: string;
}

export interface DeleteActivityTypeRequest {
    id: number;
}

export interface DeleteActivityTypesRequest {
    ids: string;
}

export interface UpdateActivityTypeRequest {
    id: number;
    name?: string;
    iconKey?: UpdateActivityTypeIconKeyEnum;
    color?: string;
    orderNr?: number;
}

/**
 * ActivityTypesApi - interface
 * 
 * @export
 * @interface ActivityTypesApiInterface
 */
export interface ActivityTypesApiInterface {
    /**
     * Adds a new activity type.
     * @summary Add new activity type
     * @param {string} name The name of the activity type
     * @param {string} iconKey Icon graphic to use for representing this activity type
     * @param {string} [color] A designated color for the activity type in 6-character HEX format (e.g. &#x60;FFFFFF&#x60; for white, &#x60;000000&#x60; for black)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityTypesApiInterface
     */
    addActivityTypeRaw(requestParameters: AddActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUpdateDeleteActivityTypeResponse200>>;

    /**
     * Adds a new activity type.
     * Add new activity type
     */
    addActivityType(requestParameters: AddActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUpdateDeleteActivityTypeResponse200>;

    /**
     * Marks an activity type as deleted.
     * @summary Delete an activity type
     * @param {number} id The ID of the activity type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityTypesApiInterface
     */
    deleteActivityTypeRaw(requestParameters: DeleteActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUpdateDeleteActivityTypeResponse200>>;

    /**
     * Marks an activity type as deleted.
     * Delete an activity type
     */
    deleteActivityType(requestParameters: DeleteActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUpdateDeleteActivityTypeResponse200>;

    /**
     * Marks multiple activity types as deleted.
     * @summary Delete multiple activity types in bulk
     * @param {string} ids The comma-separated activity type IDs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityTypesApiInterface
     */
    deleteActivityTypesRaw(requestParameters: DeleteActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteActivityTypesResponse200>>;

    /**
     * Marks multiple activity types as deleted.
     * Delete multiple activity types in bulk
     */
    deleteActivityTypes(requestParameters: DeleteActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteActivityTypesResponse200>;

    /**
     * Returns all activity types.
     * @summary Get all activity types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityTypesApiInterface
     */
    getActivityTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivityTypesResponse200>>;

    /**
     * Returns all activity types.
     * Get all activity types
     */
    getActivityTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivityTypesResponse200>;

    /**
     * Updates an activity type.
     * @summary Update an activity type
     * @param {number} id The ID of the activity type
     * @param {string} [name] The name of the activity type
     * @param {string} [iconKey] Icon graphic to use for representing this activity type
     * @param {string} [color] A designated color for the activity type in 6-character HEX format (e.g. &#x60;FFFFFF&#x60; for white, &#x60;000000&#x60; for black)
     * @param {number} [orderNr] An order number for this activity type. Order numbers should be used to order the types in the activity type selections.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityTypesApiInterface
     */
    updateActivityTypeRaw(requestParameters: UpdateActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUpdateDeleteActivityTypeResponse200>>;

    /**
     * Updates an activity type.
     * Update an activity type
     */
    updateActivityType(requestParameters: UpdateActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUpdateDeleteActivityTypeResponse200>;

}

/**
 * 
 */
export class ActivityTypesApi extends runtime.BaseAPI implements ActivityTypesApiInterface {

    /**
     * Adds a new activity type.
     * Add new activity type
     */
    async addActivityTypeRaw(requestParameters: AddActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUpdateDeleteActivityTypeResponse200>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling addActivityType.');
        }

        if (requestParameters.iconKey === null || requestParameters.iconKey === undefined) {
            throw new runtime.RequiredError('iconKey','Required parameter requestParameters.iconKey was null or undefined when calling addActivityType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["admin"]);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.name !== undefined) {
            formParams.append('name', requestParameters.name as any);
        }

        if (requestParameters.iconKey !== undefined) {
            formParams.append('icon_key', requestParameters.iconKey as any);
        }

        if (requestParameters.color !== undefined) {
            formParams.append('color', requestParameters.color as any);
        }

        const response = await this.request({
            path: `/activityTypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUpdateDeleteActivityTypeResponse200FromJSON(jsonValue));
    }

    /**
     * Adds a new activity type.
     * Add new activity type
     */
    async addActivityType(requestParameters: AddActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUpdateDeleteActivityTypeResponse200> {
        const response = await this.addActivityTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks an activity type as deleted.
     * Delete an activity type
     */
    async deleteActivityTypeRaw(requestParameters: DeleteActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUpdateDeleteActivityTypeResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteActivityType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["admin"]);
        }

        const response = await this.request({
            path: `/activityTypes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUpdateDeleteActivityTypeResponse200FromJSON(jsonValue));
    }

    /**
     * Marks an activity type as deleted.
     * Delete an activity type
     */
    async deleteActivityType(requestParameters: DeleteActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUpdateDeleteActivityTypeResponse200> {
        const response = await this.deleteActivityTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks multiple activity types as deleted.
     * Delete multiple activity types in bulk
     */
    async deleteActivityTypesRaw(requestParameters: DeleteActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteActivityTypesResponse200>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteActivityTypes.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["admin"]);
        }

        const response = await this.request({
            path: `/activityTypes`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteActivityTypesResponse200FromJSON(jsonValue));
    }

    /**
     * Marks multiple activity types as deleted.
     * Delete multiple activity types in bulk
     */
    async deleteActivityTypes(requestParameters: DeleteActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteActivityTypesResponse200> {
        const response = await this.deleteActivityTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all activity types.
     * Get all activity types
     */
    async getActivityTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivityTypesResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:read", "activities:full", "admin"]);
        }

        const response = await this.request({
            path: `/activityTypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetActivityTypesResponse200FromJSON(jsonValue));
    }

    /**
     * Returns all activity types.
     * Get all activity types
     */
    async getActivityTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivityTypesResponse200> {
        const response = await this.getActivityTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates an activity type.
     * Update an activity type
     */
    async updateActivityTypeRaw(requestParameters: UpdateActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUpdateDeleteActivityTypeResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateActivityType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["admin"]);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.name !== undefined) {
            formParams.append('name', requestParameters.name as any);
        }

        if (requestParameters.iconKey !== undefined) {
            formParams.append('icon_key', requestParameters.iconKey as any);
        }

        if (requestParameters.color !== undefined) {
            formParams.append('color', requestParameters.color as any);
        }

        if (requestParameters.orderNr !== undefined) {
            formParams.append('order_nr', requestParameters.orderNr as any);
        }

        const response = await this.request({
            path: `/activityTypes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUpdateDeleteActivityTypeResponse200FromJSON(jsonValue));
    }

    /**
     * Updates an activity type.
     * Update an activity type
     */
    async updateActivityType(requestParameters: UpdateActivityTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUpdateDeleteActivityTypeResponse200> {
        const response = await this.updateActivityTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
  * @export
  * @enum {string}
  */
export enum AddActivityTypeIconKeyEnum {
    Task = 'task',
    Email = 'email',
    Meeting = 'meeting',
    Deadline = 'deadline',
    Call = 'call',
    Lunch = 'lunch',
    Calendar = 'calendar',
    Downarrow = 'downarrow',
    Document = 'document',
    Smartphone = 'smartphone',
    Camera = 'camera',
    Scissors = 'scissors',
    Cogs = 'cogs',
    Bubble = 'bubble',
    Uparrow = 'uparrow',
    Checkbox = 'checkbox',
    Signpost = 'signpost',
    Shuffle = 'shuffle',
    Addressbook = 'addressbook',
    Linegraph = 'linegraph',
    Picture = 'picture',
    Car = 'car',
    World = 'world',
    Search = 'search',
    Clip = 'clip',
    Sound = 'sound',
    Brush = 'brush',
    Key = 'key',
    Padlock = 'padlock',
    Pricetag = 'pricetag',
    Suitcase = 'suitcase',
    Finish = 'finish',
    Plane = 'plane',
    Loop = 'loop',
    Wifi = 'wifi',
    Truck = 'truck',
    Cart = 'cart',
    Bulb = 'bulb',
    Bell = 'bell',
    Presentation = 'presentation'
}
/**
  * @export
  * @enum {string}
  */
export enum UpdateActivityTypeIconKeyEnum {
    Task = 'task',
    Email = 'email',
    Meeting = 'meeting',
    Deadline = 'deadline',
    Call = 'call',
    Lunch = 'lunch',
    Calendar = 'calendar',
    Downarrow = 'downarrow',
    Document = 'document',
    Smartphone = 'smartphone',
    Camera = 'camera',
    Scissors = 'scissors',
    Cogs = 'cogs',
    Bubble = 'bubble',
    Uparrow = 'uparrow',
    Checkbox = 'checkbox',
    Signpost = 'signpost',
    Shuffle = 'shuffle',
    Addressbook = 'addressbook',
    Linegraph = 'linegraph',
    Picture = 'picture',
    Car = 'car',
    World = 'world',
    Search = 'search',
    Clip = 'clip',
    Sound = 'sound',
    Brush = 'brush',
    Key = 'key',
    Padlock = 'padlock',
    Pricetag = 'pricetag',
    Suitcase = 'suitcase',
    Finish = 'finish',
    Plane = 'plane',
    Loop = 'loop',
    Wifi = 'wifi',
    Truck = 'truck',
    Cart = 'cart',
    Bulb = 'bulb',
    Bell = 'bell',
    Presentation = 'presentation'
}