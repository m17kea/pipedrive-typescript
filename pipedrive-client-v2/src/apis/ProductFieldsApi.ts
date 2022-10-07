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
  DeleteProductFieldResponse200,
  DeleteProductFieldsResponse200,
  FailResponse,
  GetProductFieldResponse200,
  GetProductFieldsResponse200,
  ProductFieldAllOf,
  UpdateProductFieldResponse200,
} from '../models';
import {
    DeleteProductFieldResponse200FromJSON,
    DeleteProductFieldResponse200ToJSON,
    DeleteProductFieldsResponse200FromJSON,
    DeleteProductFieldsResponse200ToJSON,
    FailResponseFromJSON,
    FailResponseToJSON,
    GetProductFieldResponse200FromJSON,
    GetProductFieldResponse200ToJSON,
    GetProductFieldsResponse200FromJSON,
    GetProductFieldsResponse200ToJSON,
    ProductFieldAllOfFromJSON,
    ProductFieldAllOfToJSON,
    UpdateProductFieldResponse200FromJSON,
    UpdateProductFieldResponse200ToJSON,
} from '../models';

export interface AddProductFieldRequest {
    productFieldAllOf?: ProductFieldAllOf;
}

export interface DeleteProductFieldRequest {
    id: number;
}

export interface DeleteProductFieldsRequest {
    ids: string;
}

export interface GetProductFieldRequest {
    id: number;
}

export interface GetProductFieldsRequest {
    start?: number;
    limit?: number;
}

export interface UpdateProductFieldRequest {
    id: number;
    updateProductFieldResponse200?: UpdateProductFieldResponse200;
}

/**
 * ProductFieldsApi - interface
 * 
 * @export
 * @interface ProductFieldsApiInterface
 */
export interface ProductFieldsApiInterface {
    /**
     * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * @summary Add a new product field
     * @param {ProductFieldAllOf} [productFieldAllOf] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFieldsApiInterface
     */
    addProductFieldRaw(requestParameters: AddProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldResponse200>>;

    /**
     * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * Add a new product field
     */
    addProductField(requestParameters: AddProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldResponse200>;

    /**
     * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * @summary Delete a product field
     * @param {number} id The ID of the product field
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFieldsApiInterface
     */
    deleteProductFieldRaw(requestParameters: DeleteProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteProductFieldResponse200>>;

    /**
     * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * Delete a product field
     */
    deleteProductField(requestParameters: DeleteProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteProductFieldResponse200>;

    /**
     * Marks multiple fields as deleted.
     * @summary Delete multiple product fields in bulk
     * @param {string} ids The comma-separated field IDs to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFieldsApiInterface
     */
    deleteProductFieldsRaw(requestParameters: DeleteProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteProductFieldsResponse200>>;

    /**
     * Marks multiple fields as deleted.
     * Delete multiple product fields in bulk
     */
    deleteProductFields(requestParameters: DeleteProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteProductFieldsResponse200>;

    /**
     * Returns data about a specific product field.
     * @summary Get one product field
     * @param {number} id The ID of the product field
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFieldsApiInterface
     */
    getProductFieldRaw(requestParameters: GetProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldResponse200>>;

    /**
     * Returns data about a specific product field.
     * Get one product field
     */
    getProductField(requestParameters: GetProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldResponse200>;

    /**
     * Returns data about all product fields.
     * @summary Get all product fields
     * @param {number} [start] Pagination start
     * @param {number} [limit] Items shown per page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFieldsApiInterface
     */
    getProductFieldsRaw(requestParameters: GetProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldsResponse200>>;

    /**
     * Returns data about all product fields.
     * Get all product fields
     */
    getProductFields(requestParameters: GetProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldsResponse200>;

    /**
     * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
     * @summary Update a product field
     * @param {number} id The ID of the product field
     * @param {UpdateProductFieldResponse200} [updateProductFieldResponse200] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductFieldsApiInterface
     */
    updateProductFieldRaw(requestParameters: UpdateProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldResponse200>>;

    /**
     * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
     * Update a product field
     */
    updateProductField(requestParameters: UpdateProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldResponse200>;

}

/**
 * 
 */
export class ProductFieldsApi extends runtime.BaseAPI implements ProductFieldsApiInterface {

    /**
     * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * Add a new product field
     */
    async addProductFieldRaw(requestParameters: AddProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["products:full"]);
        }

        const response = await this.request({
            path: `/productFields`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductFieldAllOfToJSON(requestParameters.productFieldAllOf),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProductFieldResponse200FromJSON(jsonValue));
    }

    /**
     * Adds a new product field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * Add a new product field
     */
    async addProductField(requestParameters: AddProductFieldRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldResponse200> {
        const response = await this.addProductFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * Delete a product field
     */
    async deleteProductFieldRaw(requestParameters: DeleteProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteProductFieldResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteProductField.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["products:full"]);
        }

        const response = await this.request({
            path: `/productFields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteProductFieldResponse200FromJSON(jsonValue));
    }

    /**
     * Marks a product field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * Delete a product field
     */
    async deleteProductField(requestParameters: DeleteProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteProductFieldResponse200> {
        const response = await this.deleteProductFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Marks multiple fields as deleted.
     * Delete multiple product fields in bulk
     */
    async deleteProductFieldsRaw(requestParameters: DeleteProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteProductFieldsResponse200>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteProductFields.');
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["products:full"]);
        }

        const response = await this.request({
            path: `/productFields`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteProductFieldsResponse200FromJSON(jsonValue));
    }

    /**
     * Marks multiple fields as deleted.
     * Delete multiple product fields in bulk
     */
    async deleteProductFields(requestParameters: DeleteProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteProductFieldsResponse200> {
        const response = await this.deleteProductFieldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns data about a specific product field.
     * Get one product field
     */
    async getProductFieldRaw(requestParameters: GetProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductField.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["products:read", "products:full"]);
        }

        const response = await this.request({
            path: `/productFields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProductFieldResponse200FromJSON(jsonValue));
    }

    /**
     * Returns data about a specific product field.
     * Get one product field
     */
    async getProductField(requestParameters: GetProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldResponse200> {
        const response = await this.getProductFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns data about all product fields.
     * Get all product fields
     */
    async getProductFieldsRaw(requestParameters: GetProductFieldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldsResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["products:read", "products:full"]);
        }

        const response = await this.request({
            path: `/productFields`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProductFieldsResponse200FromJSON(jsonValue));
    }

    /**
     * Returns data about all product fields.
     * Get all product fields
     */
    async getProductFields(requestParameters: GetProductFieldsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldsResponse200> {
        const response = await this.getProductFieldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
     * Update a product field
     */
    async updateProductFieldRaw(requestParameters: UpdateProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProductFieldResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateProductField.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_token"] = this.configuration.apiKey("api_token"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["products:full"]);
        }

        const response = await this.request({
            path: `/productFields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateProductFieldResponse200ToJSON(requestParameters.updateProductFieldResponse200),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProductFieldResponse200FromJSON(jsonValue));
    }

    /**
     * Updates a product field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values</a>.
     * Update a product field
     */
    async updateProductField(requestParameters: UpdateProductFieldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProductFieldResponse200> {
        const response = await this.updateProductFieldRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
