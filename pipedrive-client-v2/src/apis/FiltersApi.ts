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
  AddFilterRequest,
  DeleteFilterResponse200,
  DeleteFiltersResponse200,
  GetFilterResponse200,
  GetFiltersResponse200,
  PostFilterResponse200,
  UpdateFilterRequest,
} from '../models';
import {
    AddFilterRequestFromJSON,
    AddFilterRequestToJSON,
    DeleteFilterResponse200FromJSON,
    DeleteFilterResponse200ToJSON,
    DeleteFiltersResponse200FromJSON,
    DeleteFiltersResponse200ToJSON,
    GetFilterResponse200FromJSON,
    GetFilterResponse200ToJSON,
    GetFiltersResponse200FromJSON,
    GetFiltersResponse200ToJSON,
    PostFilterResponse200FromJSON,
    PostFilterResponse200ToJSON,
    UpdateFilterRequestFromJSON,
    UpdateFilterRequestToJSON,
} from '../models';

export interface AddFilterOperationRequest {
    addFilterRequest?: AddFilterRequest;
}

export interface DeleteFilterRequest {
    id: number;
}

export interface DeleteFiltersRequest {
    ids: string;
}

export interface GetFilterRequest {
    id: number;
}

export interface GetFiltersRequest {
    type?: GetFiltersTypeEnum;
}

export interface UpdateFilterOperationRequest {
    id: number;
    updateFilterRequest?: UpdateFilterRequest;
}

/**
 * FiltersApi - interface
 * 
 * @export
 * @interface FiltersApiInterface
 */
export interface FiltersApiInterface {
    /**
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @summary Add a new filter
     * @param {AddFilterRequest} [addFilterRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    addFilterRaw(requestParameters: AddFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostFilterResponse200>>;

    /**
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * Add a new filter
     */
    addFilter(requestParameters: AddFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostFilterResponse200>;

    /**
     * Marks a filter as deleted.
     * @summary Delete a filter
     * @param {number} id The ID of the filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    deleteFilterRaw(requestParameters: DeleteFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteFilterResponse200>>;

    /**
     * Marks a filter as deleted.
     * Delete a filter
     */
    deleteFilter(requestParameters: DeleteFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFilterResponse200>;

    /**
     * Marks multiple filters as deleted.
     * @summary Delete multiple filters in bulk
     * @param {string} ids The comma-separated filter IDs to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    deleteFiltersRaw(requestParameters: DeleteFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteFiltersResponse200>>;

    /**
     * Marks multiple filters as deleted.
     * Delete multiple filters in bulk
     */
    deleteFilters(requestParameters: DeleteFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFiltersResponse200>;

    /**
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * @summary Get one filter
     * @param {number} id The ID of the filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    getFilterRaw(requestParameters: GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFilterResponse200>>;

    /**
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * Get one filter
     */
    getFilter(requestParameters: GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFilterResponse200>;

    /**
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. Additionally, an exact date must be inserted in YYYY-MM-DD format and an exact time in HH:MM. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @summary Get all filter helpers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    getFilterHelpersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. Additionally, an exact date must be inserted in YYYY-MM-DD format and an exact time in HH:MM. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * Get all filter helpers
     */
    getFilterHelpers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * Returns data about all filters.
     * @summary Get all filters
     * @param {'deals' | 'leads' | 'org' | 'people' | 'products' | 'activity'} [type] The types of filters to fetch
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    getFiltersRaw(requestParameters: GetFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFiltersResponse200>>;

    /**
     * Returns data about all filters.
     * Get all filters
     */
    getFilters(requestParameters: GetFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFiltersResponse200>;

    /**
     * Updates an existing filter.
     * @summary Update filter
     * @param {number} id The ID of the filter
     * @param {UpdateFilterRequest} [updateFilterRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FiltersApiInterface
     */
    updateFilterRaw(requestParameters: UpdateFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostFilterResponse200>>;

    /**
     * Updates an existing filter.
     * Update filter
     */
    updateFilter(requestParameters: UpdateFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostFilterResponse200>;

}

/**
 * 
 */
export class FiltersApi extends runtime.BaseAPI implements FiltersApiInterface {

    /**
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * Add a new filter
     */
    async addFilterRaw(requestParameters: AddFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostFilterResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["deals:full", "activities:full", "contacts:full"]);
        }

        const response = await this.request({
            path: `/filters`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddFilterRequestToJSON(requestParameters.addFilterRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostFilterResponse200FromJSON(jsonValue));
    }

    /**
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with \'AND\', and only two second level condition groups are supported of which one must be glued with \'AND\' and the second with \'OR\'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * Add a new filter
     */
    async addFilter(requestParameters: AddFilterOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostFilterResponse200> {
        const response = await this.addFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks a filter as deleted.
     * Delete a filter
     */
    async deleteFilterRaw(requestParameters: DeleteFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteFilterResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteFilter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["deals:full", "activities:full", "contacts:full"]);
        }

        const response = await this.request({
            path: `/filters/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteFilterResponse200FromJSON(jsonValue));
    }

    /**
     * Marks a filter as deleted.
     * Delete a filter
     */
    async deleteFilter(requestParameters: DeleteFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFilterResponse200> {
        const response = await this.deleteFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks multiple filters as deleted.
     * Delete multiple filters in bulk
     */
    async deleteFiltersRaw(requestParameters: DeleteFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteFiltersResponse200>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteFilters.');
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["deals:full", "activities:full", "contacts:full"]);
        }

        const response = await this.request({
            path: `/filters`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteFiltersResponse200FromJSON(jsonValue));
    }

    /**
     * Marks multiple filters as deleted.
     * Delete multiple filters in bulk
     */
    async deleteFilters(requestParameters: DeleteFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFiltersResponse200> {
        const response = await this.deleteFiltersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * Get one filter
     */
    async getFilterRaw(requestParameters: GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFilterResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getFilter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["deals:read", "deals:full", "activities:read", "activities:full", "contacts:read", "contacts:full"]);
        }

        const response = await this.request({
            path: `/filters/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFilterResponse200FromJSON(jsonValue));
    }

    /**
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * Get one filter
     */
    async getFilter(requestParameters: GetFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFilterResponse200> {
        const response = await this.getFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. Additionally, an exact date must be inserted in YYYY-MM-DD format and an exact time in HH:MM. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * Get all filter helpers
     */
    async getFilterHelpersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        const response = await this.request({
            path: `/filters/helpers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. Additionally, an exact date must be inserted in YYYY-MM-DD format and an exact time in HH:MM. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * Get all filter helpers
     */
    async getFilterHelpers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getFilterHelpersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns data about all filters.
     * Get all filters
     */
    async getFiltersRaw(requestParameters: GetFiltersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFiltersResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["deals:read", "deals:full", "activities:read", "activities:full", "contacts:read", "contacts:full"]);
        }

        const response = await this.request({
            path: `/filters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFiltersResponse200FromJSON(jsonValue));
    }

    /**
     * Returns data about all filters.
     * Get all filters
     */
    async getFilters(requestParameters: GetFiltersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFiltersResponse200> {
        const response = await this.getFiltersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing filter.
     * Update filter
     */
    async updateFilterRaw(requestParameters: UpdateFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostFilterResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateFilter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["deals:full", "activities:full", "contacts:full"]);
        }

        const response = await this.request({
            path: `/filters/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFilterRequestToJSON(requestParameters.updateFilterRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostFilterResponse200FromJSON(jsonValue));
    }

    /**
     * Updates an existing filter.
     * Update filter
     */
    async updateFilter(requestParameters: UpdateFilterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostFilterResponse200> {
        const response = await this.updateFilterRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
  * @export
  * @enum {string}
  */
export enum GetFiltersTypeEnum {
    Deals = 'deals',
    Leads = 'leads',
    Org = 'org',
    People = 'people',
    Products = 'products',
    Activity = 'activity'
}
