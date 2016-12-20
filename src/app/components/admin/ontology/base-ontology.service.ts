/**
 * Created by sofia on 05/12/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { JsonConvert } from 'json2typescript';

import { BaseOntologyJson } from './api-objects/base-ontology-json';


@Injectable()
export class BaseOntologyService {

//    private resourcesUrl = './json/Knora-base.json';  // URL to ontology (don't use right now)

//    private txt = 'Simple text'; //test text

    constructor(private http: Http) { }
    //
    // getResources(){
    //     return http.get('./json/Knora-base.json')
    //         .map(response => response.json());
    // }

    //this should create a function that I can call with a string (i.e. "resource") that signifies the part of the json I want to read and it gives me this string and its contents
    getData(): Observable<BaseOntologyJson> {
        let ontologyData: string = './json/Knora-base.json';
        return this.http.get(ontologyData)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        try {
            // console.log(res.json());
            return JsonConvert.deserializeObject(res.json(), BaseOntologyJson);
        } catch (e) {
            // console.log(e);
            return Observable.throw('Data error in salsah\'s search service.');
        }
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }



/*    textResource(){
        return this.http.get(this.resourcesUrl);
    }

    getResources(): void{}
*/
}


