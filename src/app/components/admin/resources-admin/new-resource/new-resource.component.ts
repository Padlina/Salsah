import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { BaseOntologyService } from 'app/components/admin/ontology/base-ontology.service';
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

    private counter: number = 0;
    public newResource: any;
    public props: any;


  //selector of cardinalities (don't need it now for the basic resource creation)
    cardinality = [
        {id: 'card-0', label: '1'},
        {id: 'card-1', label: '1 - n'},
        {id: 'card-2', label: '0 - 1'},
        {id: 'card-3', label: '0 - n'}
    ];

    //selector of permissions
    perms = [
        {id: 'perm-0', label: 'group 1'},
        {id: 'perm-1', label: 'group 2'},
        {id: 'perm-2', label: 'group 3'},
        {id: 'perm-3', label: 'group 4'}
    ];



    //form functions
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

    //END form functions



    //Get data from base ontology json
    private errorMessage: string = undefined;
    public knoraBase: AnythingOntologyJson = new AnythingOntologyJson();
    public resourceTypes: any = undefined;

    ngOnInit() {
        this._baseOntologyService.getData()
            .subscribe(
                data => {
                    this.knoraBase = data;
//                    console.log(data.resourcetypes[0].properties[0].label);
                    this.resourceTypes = data.resourcetypes;
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }


}


