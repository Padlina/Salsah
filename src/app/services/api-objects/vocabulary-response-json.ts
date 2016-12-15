import { JsonObject, JsonProperty } from 'json2typescript';

import { UserdataJson } from './_userdata-json';
import { VocabularyItemJson } from './_vocabulary-item-json';

@JsonObject
export class VocabularyResponseJson {
  @JsonProperty('vocabularies', [VocabularyItemJson])
  public vocabularies: VocabularyItemJson[] = undefined;

  @JsonProperty('userdata', UserdataJson)
  public userdata: UserdataJson = undefined;

  // TODO: change Number to KnoraStatusCode
  @JsonProperty('status', Number)
  public status: number = undefined;
}
