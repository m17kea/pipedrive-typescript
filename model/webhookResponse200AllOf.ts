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
import { GetWebhooksResponse200AllOfDataInner } from './getWebhooksResponse200AllOfDataInner';

export class WebhookResponse200AllOf {
    'data'?: GetWebhooksResponse200AllOfDataInner;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetWebhooksResponse200AllOfDataInner"
        }    ];

    static getAttributeTypeMap() {
        return WebhookResponse200AllOf.attributeTypeMap;
    }
}
