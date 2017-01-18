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
import { AppConfig } from '../app.config';

import { JsonConvert } from 'json2typescript';

import { SessionJson } from './api-objects';


@Injectable()
export class SessionService {

    constructor(private _http: Http) { }

    getSession(): Observable<SessionJson> {
        let sessionData: string = `${AppConfig.API_ENDPOINT}` + 'session';
        return this._http.get(sessionData)
            .map(this.extractSessionData)
            .catch(this.handleError);
    }

    private extractSessionData(res: Response) {
        try {
            // console.log(res.json());
            return JsonConvert.deserializeObject(res.json(), SessionJson);
        } catch (e) {
            // console.log(e);
            return Observable.throw('Data error in salsah\'s session service.');
        }
    }


    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

}
