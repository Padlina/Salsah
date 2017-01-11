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
  selector: 'salsah-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public menu: any = [
        {
            name: 'Profile',
            path: 'profile'
        },
        {
            name: 'Projects',
            path: 'projects'
        },
        {
            name: 'Collections',
            path: 'collections'
        }

    ];

    public username: string;

    constructor(private route: ActivatedRoute,
                private router: Router
    ) { }

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            this.username = params['user'];
        });

        if(this.username === 'new') {
            alert("Create new user!?");
        }
    }

}
