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

export class ActivityResponseObjectAllOf1 {
    /**
    * The activity ID, generated when the activity was created
    */
    'id'?: string;
    /**
    * Whether the activity is done or not
    */
    'done'?: boolean;
    /**
    * The subject of the activity
    */
    'subject'?: string;
    /**
    * The type of the activity. This is in correlation with the `key_string` parameter of ActivityTypes.
    */
    'type'?: string;
    /**
    * The ID of the user whom the activity is assigned to
    */
    'userId'?: number;
    /**
    * List of multiple persons (participants) this activity is associated with
    */
    'participants'?: Array<object>;
    /**
    * Marks if the activity is set as \'Busy\' or \'Free\'. If the flag is set to `true`, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset. When the value of the flag is unset (`null`), the flag defaults to \'Busy\' if it has a time set, and \'Free\' if it is an all-day event without specified time.
    */
    'busyFlag'?: ActivityResponseObjectAllOf1.BusyFlagEnum;
    /**
    * The attendees of the activity. This can be either your existing Pipedrive contacts or an external email address.
    */
    'attendees'?: Array<object>;
    /**
    * The user\'s company ID
    */
    'companyId'?: number;
    /**
    * If the activity references some other object, it is indicated here. For example, value `Salesphone` refers to activities created with Caller.
    */
    'referenceType'?: string;
    /**
    * Together with the `reference_type`, gives the ID of the other object
    */
    'referenceId'?: number;
    /**
    * The ID of Marketplace app, which is connected to this activity
    */
    'conferenceMeetingClient'?: string;
    /**
    * The link to join the meeting which is associated with this activity
    */
    'conferenceMeetingUrl'?: string;
    /**
    * The meeting ID of the meeting provider (Zoom, MS Teams etc.) that is associated with this activity
    */
    'conferenceMeetingId'?: string;
    /**
    * The creation date and time of the activity in UTC. Format: YYYY-MM-DD HH:MM:SS.
    */
    'addTime'?: string;
    /**
    * The date and time this activity was marked as done. Format: YYYY-MM-DD HH:MM:SS.
    */
    'markedAsDoneTime'?: string;
    /**
    * The date and time of latest notifications sent about this activity to the participants or the attendees of this activity
    */
    'lastNotificationTime'?: string;
    /**
    * The ID of the user who triggered the sending of the latest notifications about this activity to the participants or the attendees of this activity
    */
    'lastNotificationUserId'?: number;
    /**
    * The ID of the language the notifications are sent in
    */
    'notificationLanguageId'?: number;
    /**
    * The ID of the lead in the UUID format this activity is associated with
    */
    'leadId'?: string;
    /**
    * Whether the activity is active or not
    */
    'activeFlag'?: boolean;
    /**
    * The last update date and time of the activity. Format: YYYY-MM-DD HH:MM:SS.
    */
    'updateTime'?: string;
    /**
    * The ID of the user who was the last to update this activity
    */
    'updateUserId'?: number;
    /**
    * For the activity which syncs to Google calendar, this is the Google event ID. NB! This field is related to old Google calendar sync and will be deprecated soon.
    */
    'gcalEventId'?: string;
    /**
    * The Google calendar ID that this activity syncs to. NB! This field is related to old Google calendar sync and will be deprecated soon.
    */
    'googleCalendarId'?: string;
    /**
    * The Google calendar API etag (version) that is used for syncing this activity. NB! This field is related to old Google calendar sync and will be deprecated soon.
    */
    'googleCalendarEtag'?: string;
    /**
    * For activities that sync to an external calendar, this setting indicates if the activity syncs with context (what are the deals, persons, organizations this activity is related to)
    */
    'calendarSyncIncludeContext'?: string;
    /**
    * The timezone the activity was created in an external calendar
    */
    'sourceTimezone'?: string;
    /**
    * The rule for the recurrence of the activity. Is important for activities synced into Pipedrive from an external calendar. Example: \"RRULE:FREQ=WEEKLY;BYDAY=WE\"
    */
    'recRule'?: string;
    /**
    * Additional rules for the recurrence of the activity, extend the `rec_rule`. Is important for activities synced into Pipedrive from an external calendar.
    */
    'recRuleExtension'?: string;
    /**
    * The ID of parent activity for a recurrent activity if the current activity is an exception to recurrence rules
    */
    'recMasterActivityId'?: number;
    /**
    * The list of recurring activity instances. It is in a structure as follows: `[{due_date: \"2020-06-24\", due_time: \"10:00:00\"}]`
    */
    'series'?: Array<object>;
    /**
    * The ID of the user who created the activity
    */
    'createdByUserId'?: number;
    /**
    * Subfield of location field. Indicates apartment/suite number.
    */
    'locationSubpremise'?: string;
    /**
    * Subfield of location field. Indicates house number.
    */
    'locationStreetNumber'?: string;
    /**
    * Subfield of location field. Indicates street name.
    */
    'locationRoute'?: string;
    /**
    * Subfield of location field. Indicates district/sublocality.
    */
    'locationSublocality'?: string;
    /**
    * Subfield of location field. Indicates city/town/village/locality.
    */
    'locationLocality'?: string;
    /**
    * Subfield of location field. Indicates state/county.
    */
    'locationAdminAreaLevel1'?: string;
    /**
    * Subfield of location field. Indicates region.
    */
    'locationAdminAreaLevel2'?: string;
    /**
    * Subfield of location field. Indicates country.
    */
    'locationCountry'?: string;
    /**
    * Subfield of location field. Indicates ZIP/postal code.
    */
    'locationPostalCode'?: string;
    /**
    * Subfield of location field. Indicates full/combined address.
    */
    'locationFormattedAddress'?: string;
    /**
    * Subfield of location field. Indicates latitude.
    */
    'locationLat'?: number;
    /**
    * Subfield of location field. Indicates longitude.
    */
    'locationLong'?: number;
    /**
    * The name of the organization this activity is associated with
    */
    'orgName'?: string;
    /**
    * The name of the person this activity is associated with
    */
    'personName'?: string;
    /**
    * The name of the deal this activity is associated with
    */
    'dealTitle'?: string;
    /**
    * The name of the user this activity is owned by
    */
    'ownerName'?: string;
    /**
    * The BCC email address of the person
    */
    'personDropboxBcc'?: string;
    /**
    * The BCC email address of the deal
    */
    'dealDropboxBcc'?: string;
    /**
    * The ID of the user to whom the activity is assigned to. Equal to `user_id`.
    */
    'assignedToUserId'?: number;
    /**
    * The file that is attached to this activity. For example, this can be a reference to an audio note file generated with Pipedrive mobile app.
    */
    'file'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "done",
            "baseName": "done",
            "type": "boolean"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "participants",
            "baseName": "participants",
            "type": "Array<object>"
        },
        {
            "name": "busyFlag",
            "baseName": "busy_flag",
            "type": "ActivityResponseObjectAllOf1.BusyFlagEnum"
        },
        {
            "name": "attendees",
            "baseName": "attendees",
            "type": "Array<object>"
        },
        {
            "name": "companyId",
            "baseName": "company_id",
            "type": "number"
        },
        {
            "name": "referenceType",
            "baseName": "reference_type",
            "type": "string"
        },
        {
            "name": "referenceId",
            "baseName": "reference_id",
            "type": "number"
        },
        {
            "name": "conferenceMeetingClient",
            "baseName": "conference_meeting_client",
            "type": "string"
        },
        {
            "name": "conferenceMeetingUrl",
            "baseName": "conference_meeting_url",
            "type": "string"
        },
        {
            "name": "conferenceMeetingId",
            "baseName": "conference_meeting_id",
            "type": "string"
        },
        {
            "name": "addTime",
            "baseName": "add_time",
            "type": "string"
        },
        {
            "name": "markedAsDoneTime",
            "baseName": "marked_as_done_time",
            "type": "string"
        },
        {
            "name": "lastNotificationTime",
            "baseName": "last_notification_time",
            "type": "string"
        },
        {
            "name": "lastNotificationUserId",
            "baseName": "last_notification_user_id",
            "type": "number"
        },
        {
            "name": "notificationLanguageId",
            "baseName": "notification_language_id",
            "type": "number"
        },
        {
            "name": "leadId",
            "baseName": "lead_id",
            "type": "string"
        },
        {
            "name": "activeFlag",
            "baseName": "active_flag",
            "type": "boolean"
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string"
        },
        {
            "name": "updateUserId",
            "baseName": "update_user_id",
            "type": "number"
        },
        {
            "name": "gcalEventId",
            "baseName": "gcal_event_id",
            "type": "string"
        },
        {
            "name": "googleCalendarId",
            "baseName": "google_calendar_id",
            "type": "string"
        },
        {
            "name": "googleCalendarEtag",
            "baseName": "google_calendar_etag",
            "type": "string"
        },
        {
            "name": "calendarSyncIncludeContext",
            "baseName": "calendar_sync_include_context",
            "type": "string"
        },
        {
            "name": "sourceTimezone",
            "baseName": "source_timezone",
            "type": "string"
        },
        {
            "name": "recRule",
            "baseName": "rec_rule",
            "type": "string"
        },
        {
            "name": "recRuleExtension",
            "baseName": "rec_rule_extension",
            "type": "string"
        },
        {
            "name": "recMasterActivityId",
            "baseName": "rec_master_activity_id",
            "type": "number"
        },
        {
            "name": "series",
            "baseName": "series",
            "type": "Array<object>"
        },
        {
            "name": "createdByUserId",
            "baseName": "created_by_user_id",
            "type": "number"
        },
        {
            "name": "locationSubpremise",
            "baseName": "location_subpremise",
            "type": "string"
        },
        {
            "name": "locationStreetNumber",
            "baseName": "location_street_number",
            "type": "string"
        },
        {
            "name": "locationRoute",
            "baseName": "location_route",
            "type": "string"
        },
        {
            "name": "locationSublocality",
            "baseName": "location_sublocality",
            "type": "string"
        },
        {
            "name": "locationLocality",
            "baseName": "location_locality",
            "type": "string"
        },
        {
            "name": "locationAdminAreaLevel1",
            "baseName": "location_admin_area_level_1",
            "type": "string"
        },
        {
            "name": "locationAdminAreaLevel2",
            "baseName": "location_admin_area_level_2",
            "type": "string"
        },
        {
            "name": "locationCountry",
            "baseName": "location_country",
            "type": "string"
        },
        {
            "name": "locationPostalCode",
            "baseName": "location_postal_code",
            "type": "string"
        },
        {
            "name": "locationFormattedAddress",
            "baseName": "location_formatted_address",
            "type": "string"
        },
        {
            "name": "locationLat",
            "baseName": "location_lat",
            "type": "number"
        },
        {
            "name": "locationLong",
            "baseName": "location_long",
            "type": "number"
        },
        {
            "name": "orgName",
            "baseName": "org_name",
            "type": "string"
        },
        {
            "name": "personName",
            "baseName": "person_name",
            "type": "string"
        },
        {
            "name": "dealTitle",
            "baseName": "deal_title",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "owner_name",
            "type": "string"
        },
        {
            "name": "personDropboxBcc",
            "baseName": "person_dropbox_bcc",
            "type": "string"
        },
        {
            "name": "dealDropboxBcc",
            "baseName": "deal_dropbox_bcc",
            "type": "string"
        },
        {
            "name": "assignedToUserId",
            "baseName": "assigned_to_user_id",
            "type": "number"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ActivityResponseObjectAllOf1.attributeTypeMap;
    }
}

export namespace ActivityResponseObjectAllOf1 {
    export enum BusyFlagEnum {
        True = <any> true,
        False = <any> false
    }
}
