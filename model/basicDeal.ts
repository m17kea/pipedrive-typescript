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

export class BasicDeal {
    /**
    * The value of the deal. If omitted, value will be set to 0.
    */
    'value'?: string;
    /**
    * The currency of the deal. Accepts a 3-character currency code. If omitted, currency will be set to the default currency of the authorized user.
    */
    'currency'?: string;
    /**
    * The ID of the user which will be the owner of the created deal. If not provided, the user making the request will be used.
    */
    'userId'?: number;
    /**
    * The ID of a person which this deal will be linked to. If the person does not exist yet, it needs to be created first. This property is required unless `org_id` is specified.
    */
    'personId'?: number;
    /**
    * The ID of an organization which this deal will be linked to. If the organization does not exist yet, it needs to be created first. This property is required unless `person_id` is specified.
    */
    'orgId'?: number;
    /**
    * The ID of the pipeline this deal will be added to. By default, the deal will be added to the first stage of the specified pipeline. Please note that `pipeline_id` and `stage_id` should not be used together as `pipeline_id` will be ignored.
    */
    'pipelineId'?: number;
    /**
    * The ID of the stage this deal will be added to. Please note that a pipeline will be assigned automatically based on the `stage_id`. If omitted, the deal will be placed in the first stage of the default pipeline.
    */
    'stageId'?: number;
    /**
    * open = Open, won = Won, lost = Lost, deleted = Deleted. If omitted, status will be set to open.
    */
    'status'?: BasicDeal.StatusEnum;
    /**
    * The expected close date of the deal. In ISO 8601 format: YYYY-MM-DD.
    */
    'expectedCloseDate'?: string;
    /**
    * The success probability percentage of the deal. Used/shown only when `deal_probability` for the pipeline of the deal is enabled.
    */
    'probability'?: number;
    /**
    * The optional message about why the deal was lost (to be used when status = lost)
    */
    'lostReason'?: string;
    'visibleTo'?: BasicDeal.VisibleToEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "person_id",
            "type": "number"
        },
        {
            "name": "orgId",
            "baseName": "org_id",
            "type": "number"
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "number"
        },
        {
            "name": "stageId",
            "baseName": "stage_id",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BasicDeal.StatusEnum"
        },
        {
            "name": "expectedCloseDate",
            "baseName": "expected_close_date",
            "type": "string"
        },
        {
            "name": "probability",
            "baseName": "probability",
            "type": "number"
        },
        {
            "name": "lostReason",
            "baseName": "lost_reason",
            "type": "string"
        },
        {
            "name": "visibleTo",
            "baseName": "visible_to",
            "type": "BasicDeal.VisibleToEnum"
        }    ];

    static getAttributeTypeMap() {
        return BasicDeal.attributeTypeMap;
    }
}

export namespace BasicDeal {
    export enum StatusEnum {
        Open = <any> 'open',
        Won = <any> 'won',
        Lost = <any> 'lost',
        Deleted = <any> 'deleted'
    }
    export enum VisibleToEnum {
        _1 = <any> '1',
        _3 = <any> '3',
        _5 = <any> '5',
        _7 = <any> '7'
    }
}
