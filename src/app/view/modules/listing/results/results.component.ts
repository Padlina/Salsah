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

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ApiServiceResult} from "../../../../model/services/api-service-result";
import {ApiServiceError} from "../../../../model/services/api-service-error";
import {SearchService} from "../../../../model/services/search.service";
import {Search} from "../../../../model/webapi/knora/";
import {ReadResourcesSequence} from "../../../../model/webapi/knora/v2/read-resources-sequence";



@Component({
    selector: 'salsah-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

    isLoading: boolean = true;
    isLoadingSubModule: boolean = true;
    errorMessage: any;

    selectedView: string = 'list';

    result: ReadResourcesSequence = new ReadResourcesSequence([], 0);

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

    position = {
        preview: 'left',        // top
        detail: 'right'         // bottom
    };

    size: string = 'large';
    cols: number = 3;
    resource: string = undefined;


    constructor(private _route: ActivatedRoute,
                private _searchService: SearchService) {
    }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            let query = params['q'];

            this._searchService.doSearch(query)
                .subscribe(
                    (result: ApiServiceResult) => {

                        this.result = result.getJSONLD(result.body);

                        this.isLoading = false;
                    },
                    (error: ApiServiceError) => {
                        this.errorMessage = <any>error;

                        this.isLoading = false;
                    }
                );

        });


    }

    openResource(resourceIri: string) {
        if(this.size === 'large') this.size = 'small'; this.cols = 1;
        this.isLoadingSubModule = true;
        this.resource = resourceIri;
        this.isLoadingSubModule = false;
    }

    closeDetailView() {
        this.size = 'large';
        this.cols = 3;
        this.resource = undefined;
    }

}
