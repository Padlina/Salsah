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

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { ResourcesService } from '../../_services';
import { ResourcesResponseJson } from '../../_services';

import {PropertyJsonValue} from '../../_services';


// import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'salsah-resource-view',
    templateUrl: './resource-view.component.html',
    styleUrls: ['./resource-view.component.css']
})

export class ResourceViewComponent implements OnInit {

    private errorMessage: string = undefined;
    public resourcesResponse: ResourcesResponseJson = new ResourcesResponseJson();

    constructor( private _resourcesService: ResourcesService,
                 private _route: ActivatedRoute ) {

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
                    (data: ResourcesResponseJson) => {
                        this.resourcesResponse = data;
/*
                        for (let i in data.props) {
                            console.log(data.props[i].guielement);
                            console.log(data.props[i].values);
                            switch(data.props[i].values) {
                                case 'fileupload':
                                    let valueNumbers: Number[] = data.props[i].getValuesAsNumbers();
                                    break;

                                case 'spinbox':
                                    let valueStrings: String[] = data.props[i].getValuesAsStrings();
                                    break;

                                default:
                                    let valueObjects: PropertyJsonValue[] = data.props[i].getValuesAsPropertyJsonValues();
                            }

                        }
*/
                    },
                    error => {
                        this.errorMessage = <any>error;
                    }
                );
        });
    }

}
