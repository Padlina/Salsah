import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { OntologyComponent } from 'app/components/admin/ontology/ontology.component';
import { BaseOntologyService } from 'app/components/admin/ontology/base-ontology.service';
import { KnoraBaseJson } from 'app/components/admin/ontology/api-objects/knora-base-json';
import { AnythingOntologyJson } from 'app/components/admin/ontology/api-objects/anything-ontology-json';

@Component({
  selector: 'salsah-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.css']
})
export class NewResourceComponent implements OnInit {
  constructor(public dialog: MdDialog,
              public dialogRef: MdDialogRef<NewResourceComponent>,
              private _baseOntologyService: BaseOntologyService) { }

    //counter
    private counter: number = 0;
    public newResource: any;

    // //save the data
    // private resdata: string = undefined;
    //
    // //Open next Properties dialogue
    // selectedOption: string;
    //
    //
    //
    // nextDialogPage(cntr: number, selectedResource: string) {
    //     this.counter = cntr + 1;
    //     this.resdata = selectedResource;
    //     console.log(selectedResource);
    //     console.log(cntr);
    // }
    //
    // goBack(cntr: number) {
    //     this.counter = cntr - 1;
    // }
    //
    //
    // saveInputData(){
    //     let dialogRef = this.dialog.closeAll();
    // }


    onSubmit(uf: any): void {
        console.log('you submitted value:', uf);
        this.dialog.closeAll();
    }


    nextFormSection(cntr: number, e) {
        e.preventDefault();
        // show the next section
        this.counter = cntr + 1;
    }

    prevFormSection(cntr: number, e) {
        e.preventDefault();
        // show the previous section
        this.counter = cntr - 1;
    }


    saveInputData(){
        let dialogRef = this.dialog.closeAll();
    }


    //Get data from base ontology json
    private errorMessage: string = undefined;
//    public knoraBase: KnoraBaseJson = new KnoraBaseJson();
    public knoraBase: AnythingOntologyJson = new AnythingOntologyJson();
    public resourceTypes: any = undefined;

    ngOnInit() {
        this._baseOntologyService.getData()
            .subscribe(
                data => {
                    this.knoraBase = data;
//                    console.log(data.resourcetypes[0].properties[0].label);
                    this.resourceTypes = data.resourcetypes;
//                    console.log(this.resourceTypes[1].label);
//                    this.props = data.resourcetypes[0].properties;
//                    console.log(this.resourceTypes[1].label);
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }
}


