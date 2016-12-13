import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class ResinfoJson {

//    "locations": null,
    @JsonProperty('locations', null)
    public locations: string = null;

//    "restype_label": "Book",
    @JsonProperty('restype_label', String)
    public restype_label: string = undefined;

//    "resclass_has_location": false,
    @JsonProperty('resclass_has_location', Boolean)
    public resclass_has_location: boolean = undefined;

//    "preview": null,
    @JsonProperty('preview', null)
    public preview: string = null;

//    "person_id": "http://data.knora.org/users/91e19f1e01",
    @JsonProperty('person_id', String)
    public person_id: string = undefined;

//    "value_of": 0,
    @JsonProperty('value_of', Number)
    public value_of: number = undefined;

//    "lastmod": "0000-00-00 00:00:00",
    @JsonProperty('lastmod', String)
    public lastmod: string = undefined;

//    "resclass_name": "object",
    @JsonProperty('resclass_name', String)
    public resclass_name: string = undefined;

//    "firstproperty": "Bereitung zu dem Heiligen Sakrament",
    @JsonProperty('firstproperty', String)
    public firstproperty: string = undefined;

//    "restype_iconsrc": "http://localhost:3335/project-icons/incunabula/book.gif",
    @JsonProperty('restype_iconsrc', String)
    public restype_iconsrc: string = undefined;

//    "restype_name": "http://www.knora.org/ontology/incunabula#book",
    @JsonProperty('restype_name', String)
    public restype_name: string = undefined;

//    "regions": null,
    @JsonProperty('regions', null)
    public regions: string = null;

//    "restype_description": "Diese Resource-Klasse beschreibt ein Buch",
    @JsonProperty('restype_description', String)
    public restype_description: string = undefined;

//    "project_id": "http://data.knora.org/projects/77275339",
    @JsonProperty('project_id', String)
    public project_id: string = undefined;

//    "locdata": null,
    @JsonProperty('locdata', null)
    public locdata: string = null;

//    "restype_id": "http://www.knora.org/ontology/incunabula#book"
    @JsonProperty('restype_id', String)
    public restype_id: string = undefined;
}
