import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class ClassesJson {
    @JsonProperty('resource', [String])
    public resource: string[] = undefined;

    @JsonProperty('representation', [String])
    public representation: string[] = undefined;

    @JsonProperty('value', [String])
    public value: string[] = undefined;

}
