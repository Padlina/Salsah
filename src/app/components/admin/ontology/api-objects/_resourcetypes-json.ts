import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class ResourcetypesJson {
    @JsonProperty('id', String)
    public id: string = undefined;

    @JsonProperty('label', String)
    public valuetype_id: string = undefined;

    @JsonProperty('properties', [String])
    public properties: string[] = undefined;


}
