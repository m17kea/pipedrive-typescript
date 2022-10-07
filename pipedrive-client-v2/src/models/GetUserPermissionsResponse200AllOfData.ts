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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetUserPermissionsResponse200AllOfData
 */
export interface GetUserPermissionsResponse200AllOfData {
    /**
     * If the user can add custom fields
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_add_custom_fields?: boolean;
    /**
     * If the user can add products
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_add_products?: boolean;
    /**
     * If the user can add prospects as leads
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_add_prospects_as_leads?: boolean;
    /**
     * If the user can bulk edit items
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_bulk_edit_items?: boolean;
    /**
     * If the user can change visibility of items
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_change_visibility_of_items?: boolean;
    /**
     * If the user can convert deals to leads
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_convert_deals_to_leads?: boolean;
    /**
     * If the user can create workflows
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_create_own_workflow?: boolean;
    /**
     * If the user can delete activities
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_delete_activities?: boolean;
    /**
     * If the user can delete custom fields
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_delete_custom_fields?: boolean;
    /**
     * If the user can delete deals
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_delete_deals?: boolean;
    /**
     * If the user can edit custom fields
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_edit_custom_fields?: boolean;
    /**
     * If the user can edit deals' closed date
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_edit_deals_closed_date?: boolean;
    /**
     * If the user can edit products
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_edit_products?: boolean;
    /**
     * If the user can edit shared filters
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_edit_shared_filters?: boolean;
    /**
     * If the user can export data from item lists
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_export_data_from_lists?: boolean;
    /**
     * If the user can follow other users
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_follow_other_users?: boolean;
    /**
     * If the user can merge deals
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_merge_deals?: boolean;
    /**
     * If the user can merge organizations
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_merge_organizations?: boolean;
    /**
     * If the user can merge people
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_merge_people?: boolean;
    /**
     * If the user can modify labels
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_modify_labels?: boolean;
    /**
     * If the user can see company-wide statistics
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_see_company_wide_statistics?: boolean;
    /**
     * If the user can see the summary on the deals page
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_see_deals_list_summary?: boolean;
    /**
     * If the user can see the names of hidden items
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_see_hidden_items_names?: boolean;
    /**
     * If the user can see other users
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_see_other_users?: boolean;
    /**
     * If the user can see other users' statistics
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_see_other_users_statistics?: boolean;
    /**
     * If the user can see security dashboard
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_see_security_dashboard?: boolean;
    /**
     * If the user can share filters
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_share_filters?: boolean;
    /**
     * If the user can share insights
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_share_insights?: boolean;
    /**
     * If the user can use API
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_use_api?: boolean;
    /**
     * If the user can use email tracking
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_use_email_tracking?: boolean;
    /**
     * If the user can use import
     * @type {boolean}
     * @memberof GetUserPermissionsResponse200AllOfData
     */
    can_use_import?: boolean;
}

/**
 * Check if a given object implements the GetUserPermissionsResponse200AllOfData interface.
 */
export function instanceOfGetUserPermissionsResponse200AllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetUserPermissionsResponse200AllOfDataFromJSON(json: any): GetUserPermissionsResponse200AllOfData {
    return GetUserPermissionsResponse200AllOfDataFromJSONTyped(json, false);
}

export function GetUserPermissionsResponse200AllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserPermissionsResponse200AllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'can_add_custom_fields': !exists(json, 'can_add_custom_fields') ? undefined : json['can_add_custom_fields'],
        'can_add_products': !exists(json, 'can_add_products') ? undefined : json['can_add_products'],
        'can_add_prospects_as_leads': !exists(json, 'can_add_prospects_as_leads') ? undefined : json['can_add_prospects_as_leads'],
        'can_bulk_edit_items': !exists(json, 'can_bulk_edit_items') ? undefined : json['can_bulk_edit_items'],
        'can_change_visibility_of_items': !exists(json, 'can_change_visibility_of_items') ? undefined : json['can_change_visibility_of_items'],
        'can_convert_deals_to_leads': !exists(json, 'can_convert_deals_to_leads') ? undefined : json['can_convert_deals_to_leads'],
        'can_create_own_workflow': !exists(json, 'can_create_own_workflow') ? undefined : json['can_create_own_workflow'],
        'can_delete_activities': !exists(json, 'can_delete_activities') ? undefined : json['can_delete_activities'],
        'can_delete_custom_fields': !exists(json, 'can_delete_custom_fields') ? undefined : json['can_delete_custom_fields'],
        'can_delete_deals': !exists(json, 'can_delete_deals') ? undefined : json['can_delete_deals'],
        'can_edit_custom_fields': !exists(json, 'can_edit_custom_fields') ? undefined : json['can_edit_custom_fields'],
        'can_edit_deals_closed_date': !exists(json, 'can_edit_deals_closed_date') ? undefined : json['can_edit_deals_closed_date'],
        'can_edit_products': !exists(json, 'can_edit_products') ? undefined : json['can_edit_products'],
        'can_edit_shared_filters': !exists(json, 'can_edit_shared_filters') ? undefined : json['can_edit_shared_filters'],
        'can_export_data_from_lists': !exists(json, 'can_export_data_from_lists') ? undefined : json['can_export_data_from_lists'],
        'can_follow_other_users': !exists(json, 'can_follow_other_users') ? undefined : json['can_follow_other_users'],
        'can_merge_deals': !exists(json, 'can_merge_deals') ? undefined : json['can_merge_deals'],
        'can_merge_organizations': !exists(json, 'can_merge_organizations') ? undefined : json['can_merge_organizations'],
        'can_merge_people': !exists(json, 'can_merge_people') ? undefined : json['can_merge_people'],
        'can_modify_labels': !exists(json, 'can_modify_labels') ? undefined : json['can_modify_labels'],
        'can_see_company_wide_statistics': !exists(json, 'can_see_company_wide_statistics') ? undefined : json['can_see_company_wide_statistics'],
        'can_see_deals_list_summary': !exists(json, 'can_see_deals_list_summary') ? undefined : json['can_see_deals_list_summary'],
        'can_see_hidden_items_names': !exists(json, 'can_see_hidden_items_names') ? undefined : json['can_see_hidden_items_names'],
        'can_see_other_users': !exists(json, 'can_see_other_users') ? undefined : json['can_see_other_users'],
        'can_see_other_users_statistics': !exists(json, 'can_see_other_users_statistics') ? undefined : json['can_see_other_users_statistics'],
        'can_see_security_dashboard': !exists(json, 'can_see_security_dashboard') ? undefined : json['can_see_security_dashboard'],
        'can_share_filters': !exists(json, 'can_share_filters') ? undefined : json['can_share_filters'],
        'can_share_insights': !exists(json, 'can_share_insights') ? undefined : json['can_share_insights'],
        'can_use_api': !exists(json, 'can_use_api') ? undefined : json['can_use_api'],
        'can_use_email_tracking': !exists(json, 'can_use_email_tracking') ? undefined : json['can_use_email_tracking'],
        'can_use_import': !exists(json, 'can_use_import') ? undefined : json['can_use_import'],
    };
}

export function GetUserPermissionsResponse200AllOfDataToJSON(value?: GetUserPermissionsResponse200AllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'can_add_custom_fields': value.can_add_custom_fields,
        'can_add_products': value.can_add_products,
        'can_add_prospects_as_leads': value.can_add_prospects_as_leads,
        'can_bulk_edit_items': value.can_bulk_edit_items,
        'can_change_visibility_of_items': value.can_change_visibility_of_items,
        'can_convert_deals_to_leads': value.can_convert_deals_to_leads,
        'can_create_own_workflow': value.can_create_own_workflow,
        'can_delete_activities': value.can_delete_activities,
        'can_delete_custom_fields': value.can_delete_custom_fields,
        'can_delete_deals': value.can_delete_deals,
        'can_edit_custom_fields': value.can_edit_custom_fields,
        'can_edit_deals_closed_date': value.can_edit_deals_closed_date,
        'can_edit_products': value.can_edit_products,
        'can_edit_shared_filters': value.can_edit_shared_filters,
        'can_export_data_from_lists': value.can_export_data_from_lists,
        'can_follow_other_users': value.can_follow_other_users,
        'can_merge_deals': value.can_merge_deals,
        'can_merge_organizations': value.can_merge_organizations,
        'can_merge_people': value.can_merge_people,
        'can_modify_labels': value.can_modify_labels,
        'can_see_company_wide_statistics': value.can_see_company_wide_statistics,
        'can_see_deals_list_summary': value.can_see_deals_list_summary,
        'can_see_hidden_items_names': value.can_see_hidden_items_names,
        'can_see_other_users': value.can_see_other_users,
        'can_see_other_users_statistics': value.can_see_other_users_statistics,
        'can_see_security_dashboard': value.can_see_security_dashboard,
        'can_share_filters': value.can_share_filters,
        'can_share_insights': value.can_share_insights,
        'can_use_api': value.can_use_api,
        'can_use_email_tracking': value.can_use_email_tracking,
        'can_use_import': value.can_use_import,
    };
}

