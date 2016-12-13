import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class PropvalJson {
    @JsonProperty('textval', String)
    public textval: string = undefined;

    @JsonProperty('person_id', String, true)
    public person_id: string = undefined;

    @JsonProperty('lastmod', String, true)
    public lastmod: string = undefined;

    @JsonProperty('id', String)
    public id: string = undefined;

    @JsonProperty('comment', String)
    public comment: string = undefined;

    @JsonProperty('lastmod_utc', String, true)
    public lastmod_utc: string = undefined;

    @JsonProperty('value', String)
    public value: string = undefined;

}

