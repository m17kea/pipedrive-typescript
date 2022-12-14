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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AddLeadRequest } from '../model/addLeadRequest';
import { GetLeadsResponse200 } from '../model/getLeadsResponse200';
import { LeadIdResponse200 } from '../model/leadIdResponse200';
import { LeadResponse404 } from '../model/leadResponse404';
import { OneLeadResponse200 } from '../model/oneLeadResponse200';
import { SearchLeadsResponse200 } from '../model/searchLeadsResponse200';
import { UpdateLeadRequest } from '../model/updateLeadRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.pipedrive.com/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum LeadsApiApiKeys {
    api_key,
}

export class LeadsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'api_key': new ApiKeyAuth('query', 'api_token'),
        'oauth2': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: LeadsApiApiKeys, value: string) {
        (this.authentications as any)[LeadsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source `API` assigned. Here\'s the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a lead</a>. If a lead contains custom fields, the fields\' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field\'s value hasn\'t been set for the lead, it won\'t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields\' structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields\' values tutorial</a>.
     * @summary Add a lead
     * @param addLeadRequest 
     */
    public async addLead (addLeadRequest?: AddLeadRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: OneLeadResponse200;  }> {
        const localVarPath = this.basePath + '/leads';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(addLeadRequest, "AddLeadRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: OneLeadResponse200;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "OneLeadResponse200");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Deletes a specific lead.
     * @summary Delete a lead
     * @param id The ID of the lead
     */
    public async deleteLead (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LeadIdResponse200;  }> {
        const localVarPath = this.basePath + '/leads/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteLead.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: LeadIdResponse200;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "LeadIdResponse200");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns details of a specific lead. If a lead contains custom fields, the fields\' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field\'s value hasn\'t been set for the lead, it won\'t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields??? structure from deals.
     * @summary Get one lead
     * @param id The ID of the lead
     */
    public async getLead (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: OneLeadResponse200;  }> {
        const localVarPath = this.basePath + '/leads/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLead.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: OneLeadResponse200;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "OneLeadResponse200");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a lead contains custom fields, the fields\' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field\'s value hasn\'t been set for the lead, it won\'t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields\' structure from deals. 
     * @summary Get all leads
     * @param limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param start For pagination, the position that represents the first result for the page
     * @param archivedStatus Filtering based on the archived status of a lead. If not provided, &#x60;All&#x60; is used.
     * @param ownerId If supplied, only leads matching the given user will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;owner_id&#x60; when supplied.
     * @param personId If supplied, only leads matching the given person will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;person_id&#x60; when supplied.
     * @param organizationId If supplied, only leads matching the given organization will be returned. However, &#x60;filter_id&#x60; takes precedence over &#x60;organization_id&#x60; when supplied.
     * @param filterId The ID of the filter to use
     * @param sort The field names and sorting mode separated by a comma (&#x60;field_name_1 ASC&#x60;, &#x60;field_name_2 DESC&#x60;). Only first-level field keys are supported (no nested keys).
     */
    public async getLeads (limit?: number, start?: number, archivedStatus?: 'archived' | 'not_archived' | 'all', ownerId?: number, personId?: number, organizationId?: number, filterId?: number, sort?: 'id' | 'title' | 'owner_id' | 'creator_id' | 'was_seen' | 'expected_close_date' | 'next_activity_id' | 'add_time' | 'update_time', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetLeadsResponse200;  }> {
        const localVarPath = this.basePath + '/leads';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (start !== undefined) {
            localVarQueryParameters['start'] = ObjectSerializer.serialize(start, "number");
        }

        if (archivedStatus !== undefined) {
            localVarQueryParameters['archived_status'] = ObjectSerializer.serialize(archivedStatus, "'archived' | 'not_archived' | 'all'");
        }

        if (ownerId !== undefined) {
            localVarQueryParameters['owner_id'] = ObjectSerializer.serialize(ownerId, "number");
        }

        if (personId !== undefined) {
            localVarQueryParameters['person_id'] = ObjectSerializer.serialize(personId, "number");
        }

        if (organizationId !== undefined) {
            localVarQueryParameters['organization_id'] = ObjectSerializer.serialize(organizationId, "number");
        }

        if (filterId !== undefined) {
            localVarQueryParameters['filter_id'] = ObjectSerializer.serialize(filterId, "number");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'id' | 'title' | 'owner_id' | 'creator_id' | 'was_seen' | 'expected_close_date' | 'next_activity_id' | 'add_time' | 'update_time'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetLeadsResponse200;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetLeadsResponse200");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Searches all leads by title, notes and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope. Found leads can be filtered by the person ID and the organization ID.
     * @summary Search leads
     * @param term The search term to look for. Minimum 2 characters (or 1 if using &#x60;exact_match&#x60;).
     * @param fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param exactMatch When enabled, only full exact matches against the given term are returned. It is &lt;b&gt;not&lt;/b&gt; case sensitive.
     * @param personId Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
     * @param organizationId Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
     * @param includeFields Supports including optional fields in the results which are not provided by default
     * @param start Pagination start. Note that the pagination is based on main results and does not include related items when using &#x60;search_for_related_items&#x60; parameter.
     * @param limit Items shown per page
     */
    public async searchLeads (term: string, fields?: 'custom_fields' | 'notes' | 'title', exactMatch?: boolean, personId?: number, organizationId?: number, includeFields?: 'lead.was_seen', start?: number, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SearchLeadsResponse200;  }> {
        const localVarPath = this.basePath + '/leads/search';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'term' is not null or undefined
        if (term === null || term === undefined) {
            throw new Error('Required parameter term was null or undefined when calling searchLeads.');
        }

        if (term !== undefined) {
            localVarQueryParameters['term'] = ObjectSerializer.serialize(term, "string");
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "'custom_fields' | 'notes' | 'title'");
        }

        if (exactMatch !== undefined) {
            localVarQueryParameters['exact_match'] = ObjectSerializer.serialize(exactMatch, "boolean");
        }

        if (personId !== undefined) {
            localVarQueryParameters['person_id'] = ObjectSerializer.serialize(personId, "number");
        }

        if (organizationId !== undefined) {
            localVarQueryParameters['organization_id'] = ObjectSerializer.serialize(organizationId, "number");
        }

        if (includeFields !== undefined) {
            localVarQueryParameters['include_fields'] = ObjectSerializer.serialize(includeFields, "'lead.was_seen'");
        }

        if (start !== undefined) {
            localVarQueryParameters['start'] = ObjectSerializer.serialize(start, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: SearchLeadsResponse200;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SearchLeadsResponse200");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Updates one or more properties of a lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a lead contains custom fields, the fields\' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field\'s value hasn\'t been set for the lead, it won\'t appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields??? structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields??? values tutorial</a>.
     * @summary Update a lead
     * @param id The ID of the lead
     * @param updateLeadRequest 
     */
    public async updateLead (id: string, updateLeadRequest?: UpdateLeadRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: OneLeadResponse200;  }> {
        const localVarPath = this.basePath + '/leads/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLead.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateLeadRequest, "UpdateLeadRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: OneLeadResponse200;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "OneLeadResponse200");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
