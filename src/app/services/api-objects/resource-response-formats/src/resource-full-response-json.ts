/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer.
 * This file is part of SALSAH.
 * SALSAH is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * SALSAH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * You should have received a copy of the GNU Affero General Public
 * License along with SALSAH.  If not, see <http://www.gnu.org/licenses/>.
 * */

import { JsonObject, JsonProperty } from 'json2typescript';

import { BasicResponseJson } from '../../basic-message-components';
import { ResdataJson } from './resdata-json';
import { ResinfoJson } from './resinfo-json';
import { PropertyJson } from './property-json';
import { KnoraAccess } from "../../basic-message-components";

/**
 * Represents the Knora API V1 response to a full resource request.
 *
 * HTTP GET to http://host/v1/resources/resourceIRI
 */
@JsonObject
export class ResourceFullResponseJson extends BasicResponseJson {

    /**
     * The given user's permissions on the resource (obsolete)
     * @param access: KnoraAccess
     */
    @JsonProperty('access', String)
    public access: KnoraAccess = undefined;

    /**
     * Resources referring to the requested resource
     * @param incoming: Array<incomingItem>
     * TODO
     */
    @JsonProperty('incoming', [String])
    public incoming: string[] = undefined;

    /**
     * The resource's properties
     * @param [index: string]: property
     */
    @JsonProperty('props', [PropertyJson])
    public props: PropertyJson[] = undefined;

    /**
     * Additional information about the requested resource (no parameters)
     * @param resdata: resdata
     */
    @JsonProperty('resdata', ResdataJson)
    public resdata: ResdataJson = undefined;

    /**
     * Description of the resource and its class
     * @param resinfo: resinfo
     */
    @JsonProperty('resinfo', ResinfoJson)
    public resinfo: ResinfoJson = undefined;
}
