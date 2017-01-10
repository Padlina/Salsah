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

import { Component, OnInit, ViewContainerRef, animate } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'salsah-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

//    public _isLoading: boolean = true;

    public settings: any = [
        {
            name: 'Project',
            path: 'project'
        },
        {
            name: 'Team',
            path: 'team'
        },
        {
            name: 'Resources',
            path: 'resources'
        },
        {
            name: 'Advanced',
            path: 'advanced'
        }
    ];

    public cur_project: string = "SALSAH";

    constructor(private route: ActivatedRoute,
                private router: Router
    ) { }

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            this.cur_project = params['project'];
        });

        if(this.cur_project === 'new') {
            alert("Create a new project!?");
        }
    }

}
