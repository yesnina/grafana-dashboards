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
/**
 * 
 * @export
 * @interface InlineObject55
 */
export interface InlineObject55 {
    /**
     * pmm-agent ID where to run this Action.
     * @type {string}
     * @memberof InlineObject55
     */
    pmm_agent_id?: string;
    /**
     * Service ID for this Action. Required.
     * @type {string}
     * @memberof InlineObject55
     */
    service_id?: string;
    /**
     * Table name. Required. May additionally contain a database name.
     * @type {string}
     * @memberof InlineObject55
     */
    table_name?: string;
    /**
     * Database name. Required if not given in the table_name field.
     * @type {string}
     * @memberof InlineObject55
     */
    database?: string;
}

export function InlineObject55FromJSON(json: any): InlineObject55 {
    return InlineObject55FromJSONTyped(json, false);
}

export function InlineObject55FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject55 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pmm_agent_id': !exists(json, 'pmm_agent_id') ? undefined : json['pmm_agent_id'],
        'service_id': !exists(json, 'service_id') ? undefined : json['service_id'],
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'database': !exists(json, 'database') ? undefined : json['database'],
    };
}

export function InlineObject55ToJSON(value?: InlineObject55 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pmm_agent_id': value.pmm_agent_id,
        'service_id': value.service_id,
        'table_name': value.table_name,
        'database': value.database,
    };
}


