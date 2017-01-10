import { Component, OnInit } from '@angular/core';
import { BaseOntologyService } from 'app/components/admin/ontology/base-ontology.service';
import { KnoraBaseJson } from 'app/components/admin/ontology/api-objects/knora-base-json';

@Component({
  selector: 'salsah-document-object',
  templateUrl: './document-object.component.html',
  styleUrls: ['./document-object.component.css']
})
export class DocumentObjectComponent implements OnInit {

    constructor(private _baseOntologyService: BaseOntologyService) { }

    private errorMessage: string = undefined;
    // public baseOntology: BaseOntologyJson = new BaseOntologyJson();
    public knoraBase: KnoraBaseJson = new KnoraBaseJson();
    public res: any = undefined;


    ngOnInit() {

        this._baseOntologyService.getData()
            .subscribe(
                data => {
                    this.knoraBase = data;
                    console.log(data.properties[0]);
                    this.res = data.properties[0];
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );

        //    console.log("I AM HERE");
    }

}
