import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class ResdataJson {
    @JsonProperty('restype_label', String)
    public restype_label: string = undefined;

    @JsonProperty('restype_name', String)
    public restype_name: string = undefined;

    @JsonProperty('iconsrc', String)
    public iconsrc: string = undefined;

    @JsonProperty('rights', Number)
    public rights: number = undefined;

    @JsonProperty('res_id', String)
    public res_id: string = undefined;

}
