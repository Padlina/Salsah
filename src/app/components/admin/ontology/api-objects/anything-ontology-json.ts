/**
 * Created by sofia on 21/12/16.
 */
import { JsonObject, JsonProperty } from 'json2typescript';

import { ResourcetypesJson } from "./_resourcetypes-json";
import { UserdataJson } from "./_userdata-json";

@JsonObject
export class AnythingOntologyJson {
    @JsonProperty('resourcetypes', [ResourcetypesJson])
    public resourcetypes: ResourcetypesJson[] = undefined;

    @JsonProperty('userdata', UserdataJson)
    public userdata: ResourcetypesJson = undefined;

    @JsonProperty('status', String)
    public status: string = undefined;

}