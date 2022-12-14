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
import { AddDealParticipantResponse200Data } from './addDealParticipantResponse200Data';
import { GetDealsResponse200RelatedObjects } from './getDealsResponse200RelatedObjects';

export class AddDealParticipantResponse200 {
    /**
    * If the request was successful or not
    */
    'success'?: boolean;
    'data'?: AddDealParticipantResponse200Data;
    'relatedObjects'?: GetDealsResponse200RelatedObjects;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "AddDealParticipantResponse200Data"
        },
        {
            "name": "relatedObjects",
            "baseName": "related_objects",
            "type": "GetDealsResponse200RelatedObjects"
        }    ];

    static getAttributeTypeMap() {
        return AddDealParticipantResponse200.attributeTypeMap;
    }
}

