/* tslint:disable */
/* eslint-disable */
/**
 * PMM QAN API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2003Labels,
    InlineResponse2003LabelsFromJSON,
    InlineResponse2003LabelsFromJSONTyped,
    InlineResponse2003LabelsToJSON,
} from './';

/**
 * ObjectDetailsLabelsReply is a map of labels names as keys and labels values as a list.
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {{ [key: string]: InlineResponse2003Labels; }}
     * @memberof InlineResponse2003
     */
    labels?: { [key: string]: InlineResponse2003Labels; };
}

export function InlineResponse2003FromJSON(json: any): InlineResponse2003 {
    return InlineResponse2003FromJSONTyped(json, false);
}

export function InlineResponse2003FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2003 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': !exists(json, 'labels') ? undefined : (mapValues(json['labels'], InlineResponse2003LabelsFromJSON)),
    };
}

export function InlineResponse2003ToJSON(value?: InlineResponse2003 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels === undefined ? undefined : (mapValues(value.labels, InlineResponse2003LabelsToJSON)),
    };
}


