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
  AddActivityRequest,
  AddActivityResponse200,
  DeleteActivitiesResponse200,
  DeleteActivityResponse200,
  GetActivitiesResponse200,
  GetActivityResponse200,
  UpdateActivityRequest,
  UpdateActivityResponse200,
} from '../models';
import {
    AddActivityRequestFromJSON,
    AddActivityRequestToJSON,
    AddActivityResponse200FromJSON,
    AddActivityResponse200ToJSON,
    DeleteActivitiesResponse200FromJSON,
    DeleteActivitiesResponse200ToJSON,
    DeleteActivityResponse200FromJSON,
    DeleteActivityResponse200ToJSON,
    GetActivitiesResponse200FromJSON,
    GetActivitiesResponse200ToJSON,
    GetActivityResponse200FromJSON,
    GetActivityResponse200ToJSON,
    UpdateActivityRequestFromJSON,
    UpdateActivityRequestToJSON,
    UpdateActivityResponse200FromJSON,
    UpdateActivityResponse200ToJSON,
} from '../models';

export interface AddActivityOperationRequest {
    addActivityRequest?: AddActivityRequest;
}

export interface DeleteActivitiesRequest {
    ids: string;
}

export interface DeleteActivityRequest {
    id: number;
}

export interface GetActivitiesRequest {
    userId?: number;
    filterId?: number;
    type?: string;
    limit?: number;
    start?: number;
    startDate?: Date;
    endDate?: Date;
    done?: GetActivitiesDoneEnum;
}

export interface GetActivityRequest {
    id: number;
}

export interface UpdateActivityOperationRequest {
    id: number;
    updateActivityRequest?: UpdateActivityRequest;
}

/**
 * ActivitiesApi - interface
 * 
 * @export
 * @interface ActivitiesApiInterface
 */
export interface ActivitiesApiInterface {
    /**
     * Adds a new activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-an-activity\" target=\"_blank\" rel=\"noopener noreferrer\">adding an activity</a>.
     * @summary Add an activity
     * @param {AddActivityRequest} [addActivityRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApiInterface
     */
    addActivityRaw(requestParameters: AddActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddActivityResponse200>>;

    /**
     * Adds a new activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-an-activity\" target=\"_blank\" rel=\"noopener noreferrer\">adding an activity</a>.
     * Add an activity
     */
    addActivity(requestParameters: AddActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddActivityResponse200>;

    /**
     * Marks multiple activities as deleted.
     * @summary Delete multiple activities in bulk
     * @param {string} ids The comma-separated IDs of activities that will be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApiInterface
     */
    deleteActivitiesRaw(requestParameters: DeleteActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteActivitiesResponse200>>;

    /**
     * Marks multiple activities as deleted.
     * Delete multiple activities in bulk
     */
    deleteActivities(requestParameters: DeleteActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteActivitiesResponse200>;

    /**
     * Marks an activity as deleted.
     * @summary Delete an activity
     * @param {number} id The ID of the activity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApiInterface
     */
    deleteActivityRaw(requestParameters: DeleteActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteActivityResponse200>>;

    /**
     * Marks an activity as deleted.
     * Delete an activity
     */
    deleteActivity(requestParameters: DeleteActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteActivityResponse200>;

    /**
     * Returns all activities assigned to a particular user.
     * @summary Get all activities assigned to a particular user
     * @param {number} [userId] The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.
     * @param {number} [filterId] The ID of the filter to use (will narrow down results if used together with &#x60;user_id&#x60; parameter)
     * @param {string} [type] The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the &#x60;key_string&#x60; parameter of ActivityTypes.
     * @param {number} [limit] For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {number} [start] For pagination, the position that represents the first result for the page
     * @param {Date} [startDate] Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format.
     * @param {Date} [endDate] Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format.
     * @param {0 | 1} [done] Whether the activity is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. If omitted returns both done and not done activities.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApiInterface
     */
    getActivitiesRaw(requestParameters: GetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivitiesResponse200>>;

    /**
     * Returns all activities assigned to a particular user.
     * Get all activities assigned to a particular user
     */
    getActivities(requestParameters: GetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivitiesResponse200>;

    /**
     * Returns the details of a specific activity.
     * @summary Get details of an activity
     * @param {number} id The ID of the activity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApiInterface
     */
    getActivityRaw(requestParameters: GetActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivityResponse200>>;

    /**
     * Returns the details of a specific activity.
     * Get details of an activity
     */
    getActivity(requestParameters: GetActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivityResponse200>;

    /**
     * Updates an activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).
     * @summary Update an activity
     * @param {number} id The ID of the activity
     * @param {UpdateActivityRequest} [updateActivityRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApiInterface
     */
    updateActivityRaw(requestParameters: UpdateActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateActivityResponse200>>;

    /**
     * Updates an activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).
     * Update an activity
     */
    updateActivity(requestParameters: UpdateActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateActivityResponse200>;

}

/**
 * 
 */
export class ActivitiesApi extends runtime.BaseAPI implements ActivitiesApiInterface {

    /**
     * Adds a new activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-an-activity\" target=\"_blank\" rel=\"noopener noreferrer\">adding an activity</a>.
     * Add an activity
     */
    async addActivityRaw(requestParameters: AddActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddActivityResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:full"]);
        }

        const response = await this.request({
            path: `/activities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddActivityRequestToJSON(requestParameters.addActivityRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddActivityResponse200FromJSON(jsonValue));
    }

    /**
     * Adds a new activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data). For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-an-activity\" target=\"_blank\" rel=\"noopener noreferrer\">adding an activity</a>.
     * Add an activity
     */
    async addActivity(requestParameters: AddActivityOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddActivityResponse200> {
        const response = await this.addActivityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks multiple activities as deleted.
     * Delete multiple activities in bulk
     */
    async deleteActivitiesRaw(requestParameters: DeleteActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteActivitiesResponse200>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteActivities.');
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:full"]);
        }

        const response = await this.request({
            path: `/activities`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteActivitiesResponse200FromJSON(jsonValue));
    }

    /**
     * Marks multiple activities as deleted.
     * Delete multiple activities in bulk
     */
    async deleteActivities(requestParameters: DeleteActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteActivitiesResponse200> {
        const response = await this.deleteActivitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks an activity as deleted.
     * Delete an activity
     */
    async deleteActivityRaw(requestParameters: DeleteActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteActivityResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteActivity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:full"]);
        }

        const response = await this.request({
            path: `/activities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteActivityResponse200FromJSON(jsonValue));
    }

    /**
     * Marks an activity as deleted.
     * Delete an activity
     */
    async deleteActivity(requestParameters: DeleteActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteActivityResponse200> {
        const response = await this.deleteActivityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all activities assigned to a particular user.
     * Get all activities assigned to a particular user
     */
    async getActivitiesRaw(requestParameters: GetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivitiesResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.filterId !== undefined) {
            queryParameters['filter_id'] = requestParameters.filterId;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['start_date'] = (requestParameters.startDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['end_date'] = (requestParameters.endDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.done !== undefined) {
            queryParameters['done'] = requestParameters.done;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:read", "activities:full"]);
        }

        const response = await this.request({
            path: `/activities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetActivitiesResponse200FromJSON(jsonValue));
    }

    /**
     * Returns all activities assigned to a particular user.
     * Get all activities assigned to a particular user
     */
    async getActivities(requestParameters: GetActivitiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivitiesResponse200> {
        const response = await this.getActivitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the details of a specific activity.
     * Get details of an activity
     */
    async getActivityRaw(requestParameters: GetActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetActivityResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getActivity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:read", "activities:full"]);
        }

        const response = await this.request({
            path: `/activities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetActivityResponse200FromJSON(jsonValue));
    }

    /**
     * Returns the details of a specific activity.
     * Get details of an activity
     */
    async getActivity(requestParameters: GetActivityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetActivityResponse200> {
        const response = await this.getActivityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).
     * Update an activity
     */
    async updateActivityRaw(requestParameters: UpdateActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateActivityResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateActivity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["activities:full"]);
        }

        const response = await this.request({
            path: `/activities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateActivityRequestToJSON(requestParameters.updateActivityRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateActivityResponse200FromJSON(jsonValue));
    }

    /**
     * Updates an activity. Includes `more_activities_scheduled_in_context` property in response\'s `additional_data` which indicates whether there are more undone activities scheduled with the same deal, person or organization (depending on the supplied data).
     * Update an activity
     */
    async updateActivity(requestParameters: UpdateActivityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateActivityResponse200> {
        const response = await this.updateActivityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
  * @export
  * @enum {string}
  */
export enum GetActivitiesDoneEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}