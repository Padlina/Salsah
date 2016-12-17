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
// import { PropJson } from './prop-json';

/**
 * Represents the regions attached to a resource
 */
@JsonObject
export class RegionJson {

    /**
     *
     * TODO: probably mistake? Salsah1 response for regions not identical with PropJson Response
     * there we have: "comment / region_of / geometry / color / res_id / iconsrc"
     * see e.g. http://www.salsah.org/api/resources/3550?resinfo=true&reqtype=context
     * compare Knora Api Description for "region" here:
     *
     * A map of property types to property values and res_id and iconsrc
     * @param indexable: [index:string]: prop | str
     *
     */
/*
    @JsonProperty('color', String)
    public color: string = undefined;

    @JsonProperty('comment', String)
    public comment: string = undefined;

    @JsonProperty('geometry', String)
    public geometry: string = undefined;

    @JsonProperty('iconsrc', String)
    public iconsrc: string = undefined;

    @JsonProperty('region_of', String)
    public region_of: string = undefined;

    @JsonProperty('res_id', String)
    public res_id: string = undefined;
*/
}
