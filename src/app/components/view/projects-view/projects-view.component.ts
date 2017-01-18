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
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectsService, ProjectListJson, ProjectJson } from '../../_services';

@Component({
  selector: 'salsah-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {

    private errorMessage: string = undefined;
    public projectsListResponse: ProjectListJson = new ProjectListJson();
    public projectsDetailResponse: ProjectJson = new ProjectJson();

    public _isLoading: boolean = true;

    public project: string;

    constructor( private _projectsService: ProjectsService,
                 private route: ActivatedRoute,
                 private router: Router) {

    }

    ngOnInit() {
        // projects list or single project?

        this.route.params.forEach((params: Params) => {
            this.project = params['project'];
            if(this.project !== undefined) {
                // show the project
                this._projectsService.getProject(this.project)
                    .subscribe(
                        (data: ProjectJson) => {
                            this.projectsDetailResponse = data;
                            this._isLoading = false;
                        },
                        error => {
                            this.errorMessage = <any>error;
                        }
                    )
            }
            else {
                // show the list of projects
                this._projectsService.getProjectsList()
                    .subscribe(
                        (data: ProjectListJson) => {
                            this.projectsListResponse = data;
                            this._isLoading = false;
                        },
                        error => {
                            this.errorMessage = <any>error;
                        }
                    )
            }


        });




    }

    public openProject(id: string): void {
        this.router.navigate(['/projects/' + encodeURIComponent(id)], {relativeTo: this.route});
    }

}
