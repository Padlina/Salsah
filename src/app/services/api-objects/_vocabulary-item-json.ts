import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class VocabularyItemJson {
  @JsonProperty('shortname', String)
  public shortname: string = undefined;

  @JsonProperty('description', String)
  public description: string = undefined;

  // TODO: change String to KnoraIRI
  @JsonProperty('uri', String)
  public uri: string = undefined;

  // TODO: change String to KnoraIRI
  @JsonProperty('id', String)
  public id: string = undefined;

  // TODO: change String to KnoraIRI
  @JsonProperty('project_id', String)
  public project_id: string = undefined;

  @JsonProperty('longname', String)
  public longname: string = undefined;

  @JsonProperty('active', Boolean)
  public active: boolean = undefined;
}
