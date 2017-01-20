import { JsonObject, JsonProperty } from 'json2typescript';
import {PropertiesJson} from "./_properties-json";

@JsonObject
export class ResourcetypesJson {
    @JsonProperty('id', String)
    public id: string = undefined;

    @JsonProperty('label', String)
    public label: string = undefined;

    @JsonProperty('properties', [PropertiesJson])
    public properties: PropertiesJson[] = undefined;


}
