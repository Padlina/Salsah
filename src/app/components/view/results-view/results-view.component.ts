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

import {Component, OnInit, ViewContainerRef, animate} from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { SearchService } from '../../_services';
import { SearchResponseJson } from '../../_services';

// import { ResourceViewComponent } from '../resource-view/resource-view.component';
// import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
    selector: 'salsah-results-view',
    templateUrl: './results-view.component.html',
    styleUrls: ['./results-view.component.css']
})

export class ResultsViewComponent implements OnInit {

    private errorMessage: string = undefined;
    public searchResponse: SearchResponseJson = new SearchResponseJson();

    public _isLoading: boolean = true;

    selectedView: string = 'list';
    viewOptions = [
        {
            name: 'list',
            title: 'List',
            isDisabled: false,
            icon: 'view_headline'
        },
        {
            name: 'grid',
            title: 'Grid',
            isDisabled: false,
            icon: 'view_module'
        },
        {
            name: 'table',
            title: 'Table',
            isDisabled: true,
            icon: 'view_comfy'
        }
    ];

    constructor(private _searchService: SearchService,
                private route: ActivatedRoute,
                private router: Router
                // private _dialog: MdDialog,
                // private viewContainerRef: ViewContainerRef
                ) {
    }

    ngOnInit() {
//        this.getResults();
        console.log(this.route.params);
        this.route.params.forEach((params: Params) => {
            let query = params['query'];
            this._searchService.getData(query)
                .subscribe(
                    data => {
                        this.searchResponse = data;
                        this._isLoading = false;
                    },
                    error => {
                        this.errorMessage = <any>error;
                    }
                );
        });

    }

    public openResource(id: string): void {
        console.log(id);
        console.log(encodeURIComponent(id));

        this.router.navigate(['/resources/' + encodeURIComponent(id)], {relativeTo: this.route});

//        alert('Here we want to open the resource ' + id + ' as a modal dialog');
        /*
        let dialogRef: MdDialogRef<ResourceViewComponent>;
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        console.log(ResourceViewComponent);
        console.log(config);
        console.log(encodeURIComponent(id));

        dialogRef = this._dialog.open(ResourceViewComponent, config);
        */
    }

    public previewError($event: {event: Event, path: string}): void {
        console.log($event.event);
        console.log($event.path);

//      TODO: error preview
    }

    public toggleResourceSelection(): void {

    }

}
