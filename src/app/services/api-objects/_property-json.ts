import { JsonConvert, JsonObject, JsonProperty} from 'json2typescript';
import { PropvalJson } from './_propval-json';

@JsonObject
export class PropertyJsonValue {
    @JsonProperty('utf8str', String)
    public utf8str: string = undefined;

    @JsonProperty('textattr', String)
    public textattr: string = undefined;

    @JsonProperty('resource_reference', [String])
    public resource_reference: string[] = undefined;
}


@JsonObject
export class PropertyJson {

    @JsonProperty('regular_property', Number)
    public regular_property: number = undefined;

    @JsonProperty('value_restype', [String], true)
    public value_restype: string[] = undefined;

    @JsonProperty('guiorder', Number)
    public guiorder: number = undefined;

    @JsonProperty('value_firstprops', [String], true)
    public value_firstprops: string[] = undefined;

    @JsonProperty('is_annotation', String)
    public is_annotation: string = undefined;

    @JsonProperty('valuetype_id', String, true)
    public valuetype_id: string = undefined;

    @JsonProperty('label', String)
    public label: string = undefined;

    @JsonProperty('value_iconsrcs', [String], true)
    public value_iconsrcs: string[] = undefined;

    @JsonProperty('guielement', String)
    public guielement: string = undefined;

    @JsonProperty('attributes', String)
    public attributes: string = undefined;

    @JsonProperty('occurrence', String)
    public occurrence: string = undefined;

    @JsonProperty('value_ids', [String], true)
    public value_ids: string[] = undefined;

    @JsonProperty('value_rights', [Number], true)
    public value_rights: number[] = undefined;

    @JsonProperty('pid', String)
    public pid: string = undefined;

    @JsonProperty('values', undefined, true)
    public values: any = undefined;

    @JsonProperty('comments', [String], true)
    public comments: string[] = null;

    public getValuesAsPropertyJsonValues(): PropertyJsonValue[] {
        try {
            return JsonConvert.deserializeArray(this.values, PropertyJsonValue);
        } catch(e) {
            return [];
        }
    }
    public getValuesAsStrings(): string[] {
        try {
            return JsonConvert.deserializeArray(this.values, String);
        } catch(e) {
            return [];
        }
    }
    public getValuesAsNumbers(): number[] {
        try {
            return JsonConvert.deserializeArray(this.values, Number);
        } catch(e) {
            return [];
        }
    }

}
