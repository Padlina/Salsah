import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class UserdataJson {
    @JsonProperty('email', null)
    public email: string = null;

    @JsonProperty('firstname', null)
    public firstname: string = undefined;

    @JsonProperty('user_id', null)
    public user_id: string = undefined;

    @JsonProperty('lastname', null)
    public lastname: string = undefined;

    @JsonProperty('isActiveUser', null)
    public isActiveUser: string = undefined;

    @JsonProperty('token', null)
    public token: string = undefined;

    @JsonProperty('active_project', null)
    public active_project: string = undefined;

    @JsonProperty('lang', String)
    public lang: string = undefined;

    @JsonProperty('password', null)
    public password: string = null;
}


}