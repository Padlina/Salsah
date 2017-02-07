import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class PropertiesJson {
    @JsonProperty('id', String)
    public id: string = undefined;

    @JsonProperty('label', String)
    public label: string = undefined;

    @JsonProperty('cardinality', String)
    public cardinality: string = undefined;
}
