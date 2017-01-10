/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Benjamin Geer, Ivan Subotic, Tobias Schweizer.
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
  selector: 'salsah-ontology',
  templateUrl: './ontology.component.html',
  styleUrls: ['./ontology.component.css']
})
export class OntologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    /* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    /* Developer object: just a sample to create a default resources dropdown menu*/
    /*                                                          */

    // default resources

    addResource: Object = {
        name: 'Resource Type',
        icon: 'add',
        menuItems: [
            {
                text: 'Simple Text',
                icon: 'view_headline',
                routerLink: '/'
            },
            {
                text: 'Document (pdf)',
                icon: 'bookmark',
                routerLink: '/'
            },
            {
                text: 'Book',
                icon: 'book',
                routerLink: '/'
            },
            {
                text: 'Book Page (pdf or image)',
                icon: 'bookmark_outline',
                routerLink: '/'
            },
            {
                text: 'Image (tiff, jpeg, jpeg2000, png, raw, ...)',
                icon: 'image',
                routerLink: '/'
            },
            {
                text: 'Video (mp4, avi, mov, wmv, ...)',
                icon: 'movie',
                routerLink: '/'
            },
            {
                text: 'Audio (mp3, wav, aiff, wav, ...)',
                icon: 'volume_up',
                routerLink: '/'
            },
            {
                text: '3D Image',
                icon: '3d_rotation',
                routerLink: '/'
            },
            {
                text: 'Add new resource type (advanced option)',
                icon: 'add',
                routerLink: 'http://www.salsah.org/'
            },
        ],
    };



    /*                                                          */
    /* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */


}
