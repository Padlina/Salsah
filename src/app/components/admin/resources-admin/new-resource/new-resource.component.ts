import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { OntologyComponent } from 'app/components/admin/ontology/ontology.component';
import { BaseOntologyService } from 'app/components/admin/ontology/base-ontology.service';
import { KnoraBaseJson } from 'app/components/admin/ontology/api-objects/knora-base-json';
import { SelectPropertiesComponent } from './select-properties/select-properties.component';

@Component({
  selector: 'salsah-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.css']
})
export class NewResourceComponent implements OnInit {
  constructor(public dialog: MdDialog,
              public dialogRef: MdDialogRef<NewResourceComponent>,
              private _baseOntologyService: BaseOntologyService) { }

    //Open next Properties dialogue
    selectedOption: string;

    selectResourceProperties() {
        let dialogRef = this.dialog.open(SelectPropertiesComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    //Get data from base ontology json
    private errorMessage: string = undefined;
    public knoraBase: KnoraBaseJson = new KnoraBaseJson();
    public res: any = undefined;

    ngOnInit() {
        this._baseOntologyService.getData()
            .subscribe(
                data => {
                    this.knoraBase = data;
                    console.log(data.classes.resource[13]);
                    this.res = data.classes.resource[13];
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }
}
