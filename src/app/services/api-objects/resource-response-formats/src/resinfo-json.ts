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
import { KnoraIRI, LocationJson } from '../../basic-message-components';
import { PropJson } from './prop-json';

/**
 * Represents information about a resource and its class.
 */
@JsonObject
export class ResinfoJson {

    /**
     * The resource's label
     * @param firstproperty: string
     */
    @JsonProperty('firstproperty', String)
    public firstproperty: string = undefined;

    /**
     * Date of last modification
     * @param lastmod: string
     */
    @JsonProperty('lastmod', String)
    public lastmod: string = undefined;

    /**
     * Digital representations of the resource
     * @param locations: Array<locationItem>
     */
    @JsonProperty('locations', [LocationJson])
    public locations: LocationJson[] = undefined;

    /**
     * Full quality representation of the resource
     * @param locdata: locationItem | null
     */
    @JsonProperty('locdata', LocationJson)
    public locdata: LocationJson = undefined;

    /**
     * The owner of the resource
     * @param person_id: string
     */
    @JsonProperty('person_id', String)
    public person_id: string = undefined;

    /**
     * Preview representation of the resource: Thumbnail or Icon
     * @param preview: locationItem | null
     */
    @JsonProperty('preview', LocationJson)
    public preview: LocationJson = undefined;

    /**
     * The project IRI the resource belongs to
     * @param project_id: KnoraIRI
     */
    @JsonProperty('project_id', String)
    public project_id: KnoraIRI = undefined;

    /**
     * Regions if there are any
     * @param regions: Array<region>
     * TODO: region has @type: [index: string]: prop | string
     * probably mistake? Salsah1 response for regions not identical with PropJson Response
     * there we have: "comment / region_of / geometry / color / res_id / iconsrc"
     * see e.g. http://www.salsah.org/api/resources/3550?resinfo=true&reqtype=context
     * compare Knora Api Doc for "region"
     */
    @JsonProperty('regions', [String])
    public regions: string[] = undefined;

    /**
     * Indicates if there is a location (digital representation) attached
     * @param resclass_has_location: boolean
     */
    @JsonProperty('resclass_has_location', Boolean)
    public resclass_has_location: boolean = undefined;

    /**
     * The resource class's name
     * @param resclass_name: string
     */
    @JsonProperty('resclass_name', String)
    public resclass_name: string = undefined;

    /**
     * Description of the resource type
     * @param restype_description: string
     */
    @JsonProperty('restype_description', String)
    public restype_description: string = undefined;

    /**
     * The URL of an icon for the resource class
     * @param restype_iconsrc: string
     */
    @JsonProperty('restype_iconsrc', String)
    public restype_iconsrc: string = undefined;

    /**
     * The Knora IRI identifying the resource's class
     * @param restype_id: KnoraIRI
     */
    @JsonProperty('restype_id', String)
    public restype_id: KnoraIRI = undefined;

    /**
     * Label of the resource's class
     * @param restype_label: string
     * TODO: refactor restye_label & restype_name as RestypeJson??
     * TODO: compare ResdataJson
     * TODO: compare also resTypeItem in KnoraAPI
     */
    @JsonProperty('restype_label', String)
    public restype_label: string = undefined;

    /**
     * The Knora IRI identifying the resource's class
     * @param restype_name: KnoraIRI
     * TODO: ISSUE QUESTION: what's the difference between restype_id and restype_name??
     * TODO: see restye_label above
     */
    @JsonProperty('restype_name', String)
    public restype_name: KnoraIRI = undefined;

    /**
     * Points to the parent resource in case the resource depends on it
     * @param value_of: string | number
     * TODO: expected type: string | number
     * check: https://www.typescriptlang.org/docs/handbook/advanced-types.html
     */
    @JsonProperty('value_of', Number)
    public value_of: number = undefined;
}
