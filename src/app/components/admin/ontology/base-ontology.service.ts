/**
 * Created by sofia on 05/12/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { JsonConvert } from 'json2typescript';

import { BaseOntologyJson } from './api-objects/base-ontology-json';
import { KnoraBaseJson } from './api-objects/knora-base-json';
import { AnythingOntologyJson } from './api-objects/anything-ontology-json';


@Injectable()
export class BaseOntologyService {

    constructor(private http: Http) { }

    // this works with the json file Resource.json and base-ontology-json.ts
    //this should create a function that I can call with a string (i.e. "resource") that signifies the part of the json I want to read and it gives me this string and its contents
    // getData(): Observable<BaseOntologyJson> {
    //     let ontologyData: string = 'http://localhost/Resource.json';
    //     return this.http.get(ontologyData)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    // private extractData(res: Response) {
    //     try {
    //         // console.log(res.json());
    //         return JsonConvert.deserializeObject(res.json(), BaseOntologyJson);
    //     } catch (e) {
    //         // console.log(e);
    //         return Observable.throw('Data error in salsah\'s ontology service.');
    //     }
    // }
    // private handleError (error: any) {
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     return Observable.throw(errMsg);
    // }


    getData(): Observable<AnythingOntologyJson> {
//        let ontologyData: string = 'http://localhost/Knora-base.json';
        let ontologyData: string = 'http://localhost:3333/v1/resourcetypes?vocabulary=http%3A%2F%2Fwww.knora.org%2Fontology%2Fanything';
        return this.http.get(ontologyData)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        try {
            // console.log(res.json());
            return JsonConvert.deserializeObject(res.json(), AnythingOntologyJson);
        } catch (e) {
            // console.log(e);
            return Observable.throw('Data error in salsah\'s ontology service.');
        }
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }




}


