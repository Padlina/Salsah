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
import {ProjectsList} from "../../../../model/classes/projects";
import {ProjectsService} from "../../../../model/api/projects.service";
import {Router} from "@angular/router";

@Component({
    selector: 'salsah-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

    isLoading: boolean = true;

    errorMessage: any = undefined;

    projects: ProjectsList = new ProjectsList();

    constructor(
        private _router: Router,
        private _projectsService: ProjectsService
    ) {
    }

    ngOnInit() {
        this._projectsService.getAllProjects()
            .subscribe(
                (data: ProjectsList) => {
                    this.projects = data;
                    this.isLoading = false;
                },
                error => {
                    this.errorMessage = <any>error;
                    this.isLoading = false;
                }
            );
    }

    openProject(id) {
        this._router.navigate(['/project/', id]);
    }

}