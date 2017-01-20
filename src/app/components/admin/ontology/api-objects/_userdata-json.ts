import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class UserdataJson {
    @JsonProperty('email', String)
    public email: string = undefined;

    @JsonProperty('firstname', String)
    public firstname: string = undefined;

    @JsonProperty('user_id', String)
    public user_id: string = undefined;

    @JsonProperty('lastname', String)
    public lastname: string = undefined;

    @JsonProperty('isActiveUser', String)
    public isActiveUser: string = undefined;

    @JsonProperty('token', String)
    public token: string = undefined;

    @JsonProperty('active_project', String)
    public active_project: string = undefined;

    @JsonProperty('lang', String)
    public lang: string = undefined;

    @JsonProperty('password', String)
    public password: string = undefined;
}
