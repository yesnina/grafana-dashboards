/* tslint:disable */
/* eslint-disable */
/**
 * PMM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse20020Generic,
    InlineResponse20020GenericFromJSON,
    InlineResponse20020GenericFromJSONTyped,
    InlineResponse20020GenericToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse20020
 */
export interface InlineResponse20020 {
    /**
     * 
     * @type {InlineResponse20020Generic}
     * @memberof InlineResponse20020
     */
    generic?: InlineResponse20020Generic;
}

export function InlineResponse20020FromJSON(json: any): InlineResponse20020 {
    return InlineResponse20020FromJSONTyped(json, false);
}

export function InlineResponse20020FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20020 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'generic': !exists(json, 'generic') ? undefined : InlineResponse20020GenericFromJSON(json['generic']),
    };
}

export function InlineResponse20020ToJSON(value?: InlineResponse20020 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'generic': InlineResponse20020GenericToJSON(value.generic),
    };
}


