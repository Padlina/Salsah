import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class LocationJson {
    @JsonProperty('duration', Number)
    public duration: number = undefined;

    @JsonProperty('nx', Number)
    public nx: number = undefined;

    @JsonProperty('path', String)
    public path: string = undefined;

    @JsonProperty('ny', Number)
    public ny: number = undefined;

    @JsonProperty('fps', Number)
    public fps: number = undefined;

    @JsonProperty('format_name', String)
    public format_name: string = undefined;

    @JsonProperty('origname', String)
    public origname: string = undefined;

    @JsonProperty('protocol', String)
    public protocol: string = undefined;

}

