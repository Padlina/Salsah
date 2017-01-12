import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { BaseOntologyService } from 'app/components/admin/ontology/base-ontology.service';
import { KnoraBaseJson } from 'app/components/admin/ontology/api-objects/knora-base-json';

@Component({
  selector: 'salsah-select-properties',
  templateUrl: './select-properties.component.html',
  styleUrls: ['./select-properties.component.css']
})
export class SelectPropertiesComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<SelectPropertiesComponent>,
              private _baseOntologyService: BaseOntologyService) { }


    //Get data from base ontology json
    private errorMessage: string = undefined;
    public knoraBase: KnoraBaseJson = new KnoraBaseJson();
    public res: any = undefined;

    ngOnInit() {
        this._baseOntologyService.getData()
            .subscribe(
                data => {
                    this.knoraBase = data;
                    console.log(data.properties[13]);
                    this.res = data.properties[13];
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }
}
