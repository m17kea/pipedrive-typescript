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
 * @interface PersonItemAllOfPictureIdAllOf1Pictures
 */
export interface PersonItemAllOfPictureIdAllOf1Pictures {
    /**
     * The URL of the 128*128 picture
     * @type {string}
     * @memberof PersonItemAllOfPictureIdAllOf1Pictures
     */
    _128?: string;
    /**
     * The URL of the 512*512 picture
     * @type {string}
     * @memberof PersonItemAllOfPictureIdAllOf1Pictures
     */
    _512?: string;
}

/**
 * Check if a given object implements the PersonItemAllOfPictureIdAllOf1Pictures interface.
 */
export function instanceOfPersonItemAllOfPictureIdAllOf1Pictures(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonItemAllOfPictureIdAllOf1PicturesFromJSON(json: any): PersonItemAllOfPictureIdAllOf1Pictures {
    return PersonItemAllOfPictureIdAllOf1PicturesFromJSONTyped(json, false);
}

export function PersonItemAllOfPictureIdAllOf1PicturesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonItemAllOfPictureIdAllOf1Pictures {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_128': !exists(json, '128') ? undefined : json['128'],
        '_512': !exists(json, '512') ? undefined : json['512'],
    };
}

export function PersonItemAllOfPictureIdAllOf1PicturesToJSON(value?: PersonItemAllOfPictureIdAllOf1Pictures | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '128': value._128,
        '512': value._512,
    };
}

