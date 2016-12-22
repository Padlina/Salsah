/**
 * Created by sofia on 21/12/16.
 */
import { JsonObject, JsonProperty } from 'json2typescript';

import { ClassesJson } from "./_classes-json";

@JsonObject
export class KnoraBaseJson {
    @JsonProperty('classes', ClassesJson)
    public classes: ClassesJson = undefined;

    @JsonProperty('properties', [String])
    public properties: string[] = undefined;

}
