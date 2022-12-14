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
import { GetPersonProductsResponse200AllOfDataInnerDEALIDDeal } from './getPersonProductsResponse200AllOfDataInnerDEALIDDeal';
import { GetPersonProductsResponse200AllOfDataInnerDEALIDProduct } from './getPersonProductsResponse200AllOfDataInnerDEALIDProduct';

export class GetPersonProductsResponse200AllOfDataInnerDEALID {
    'deal'?: GetPersonProductsResponse200AllOfDataInnerDEALIDDeal;
    'product'?: GetPersonProductsResponse200AllOfDataInnerDEALIDProduct;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deal",
            "baseName": "deal",
            "type": "GetPersonProductsResponse200AllOfDataInnerDEALIDDeal"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "GetPersonProductsResponse200AllOfDataInnerDEALIDProduct"
        }    ];

    static getAttributeTypeMap() {
        return GetPersonProductsResponse200AllOfDataInnerDEALID.attributeTypeMap;
    }
}

