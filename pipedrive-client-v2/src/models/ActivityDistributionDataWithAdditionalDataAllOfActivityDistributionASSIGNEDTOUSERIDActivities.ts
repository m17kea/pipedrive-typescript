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
 * The count of activities related to the user grouped by activity type
 * @export
 * @interface ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities
 */
export interface ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities {
    /**
     * The count of activities related to a specific type
     * @type {number}
     * @memberof ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities
     */
    ACTIVITY_TYPE_NAME?: number;
}

/**
 * Check if a given object implements the ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities interface.
 */
export function instanceOfActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivitiesFromJSON(json: any): ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities {
    return ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivitiesFromJSONTyped(json, false);
}

export function ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ACTIVITY_TYPE_NAME': !exists(json, 'ACTIVITY_TYPE_NAME') ? undefined : json['ACTIVITY_TYPE_NAME'],
    };
}

export function ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivitiesToJSON(value?: ActivityDistributionDataWithAdditionalDataAllOfActivityDistributionASSIGNEDTOUSERIDActivities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ACTIVITY_TYPE_NAME': value.ACTIVITY_TYPE_NAME,
    };
}
