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
import { BasicResponse } from './basic-response';

/**
 * existing resourcetypes / resourceclasses in a project (based on vocabulary/ontology)
 */
@JsonObject
export class ResourceTypes extends BasicResponse {

    @JsonProperty('resourcetypes', ResourcetypeItem)
    public resourcetypes: ResourcetypeItem = undefined;

}

@JsonObject
export class Property {

    @JsonProperty('id', String)
    public id: string = undefined;

    @JsonProperty('label', String)
    public label: string = undefined;

}

@JsonObject
export class ResourcetypeItem extends Property {

    @JsonProperty('properties', [Property])
    public properties: Property[] = undefined;

}
