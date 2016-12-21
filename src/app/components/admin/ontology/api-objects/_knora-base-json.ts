/**
 * Created by sofia on 21/12/16.
 */
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class KnoraBaseJson {
    @JsonProperty('classes', [String])
    public classes: string[] = undefined;

    @JsonProperty('properties', [String])
    public properties: string[] = undefined;

}
