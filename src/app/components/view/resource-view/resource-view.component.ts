import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {ResourcesService} from '../../_services';
import {ResourcesResponseJson} from '../../_services';


// import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'salsah-resource-view',
    templateUrl: './resource-view.component.html',
    styleUrls: ['./resource-view.component.css']
})

export class ResourceViewComponent implements OnInit {


    private errorMessage: string = undefined;
    public resourcesResponse: ResourcesResponseJson = new ResourcesResponseJson();

    constructor(private _resourcesService: ResourcesService,
                private _route: ActivatedRoute
                ) {

    }

    /*
     constructor(public dialogRef: MdDialogRef<ResourceViewComponent>) {

     }
     */

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let query = params['uri'];
            this._resourcesService.getData(query)
                .subscribe(
                    data => {
                        this.resourcesResponse = data;
                    },
                    error => {
                        this.errorMessage = <any>error;
                    }
                );
        });
        console.log(this.resourcesResponse);
    }

}
