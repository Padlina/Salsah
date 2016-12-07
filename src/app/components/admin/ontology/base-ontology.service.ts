/**
 * Created by sofia on 05/12/16.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BaseOntologyService {

    private resourcesUrl = './json/Knora-base.json';  // URL to ontology

    private txt = 'Simple text'; //test text

    constructor(private http: Http) { }

    textResource(){
        return this.http.get(this.resourcesUrl);
    }

    getResources(): void{}

}


