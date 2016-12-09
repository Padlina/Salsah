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

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubjectJson } from '../../_services';
//import {EventEmitter} from "events";

@Component({
  selector: 'salsah-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {

  constructor() { }

    @Input() searchResponse: SubjectJson[];
    @Output() openRequest = new EventEmitter<any>();
    @Output() errorRequest = new EventEmitter<any>();

    ngOnInit() {
  }

  openResource(id){
        this.openRequest.emit(id);
  }
  previewError(){
        this.errorRequest.emit(event);
  }

}
