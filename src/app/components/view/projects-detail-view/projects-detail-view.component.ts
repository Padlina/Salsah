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

@Component({
  selector: 'salsah-projects-detail-view',
  templateUrl: './projects-detail-view.component.html',
  styleUrls: ['./projects-detail-view.component.css']
})
export class ProjectsDetailViewComponent implements OnInit {

    public tiles = [
        {text: 'Project info', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Quick links', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'dashboard info 1', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'dashboard info 2', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
