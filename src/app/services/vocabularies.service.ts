import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { JsonConvert } from 'json2typescript';

import { AppConfig } from '../app.config';

import { VocabularyResponseJson } from './api-objects/vocabulary-response-json';

@Injectable()
export class VocabulariesService {

    constructor( private _http: Http ) {
            JsonConvert.debugMode = true;
    }

    getData(): Observable<VocabularyResponseJson> {
        let vocabulariesData: string = `${AppConfig.API_ENDPOINT}` + 'vocabularies';
            return this._http.get(vocabulariesData)
                .map(this.extractData)
                .catch(this.handleError);
            }

    private extractData(res: Response) {
        try {
            console.log(res.json());
            return JsonConvert.deserializeObject(res.json(), VocabularyResponseJson);
        } catch (e) {
            console.log(e);
            return Observable.throw('Data error in salsah\'s vocabulary service.');
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
