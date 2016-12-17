/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer.
 * This file is part of SALSAH.
 * SALSAH is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * SALSAH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * You should have received a copy of the GNU Affero General Public
 * License along with SALSAH.  If not, see <http://www.gnu.org/licenses/>.
 * */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { JsonConvert } from 'json2typescript';

import { AppConfig } from '../app.config';

import { VocabularyResponseJson } from './api-objects';

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
