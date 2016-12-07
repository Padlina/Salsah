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

import { Component, HostListener, OnInit, Input, animate, state, style, transition, trigger } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'salsah-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    animations: [
        trigger('visibility',
            [
                state('false, void', style({display: 'none'})),
                state('true', style({display: 'block'})),
                transition(
                    'false <=> true', [
                        animate(500)
                    ]
                )
            ]),
        trigger('size',
            [
                state('small, void', style({height: '50px', 'margin-top': '0px', 'margin-left': '0px'})),
                state('large, void', style({height: '100px', 'margin-top': '30px'})),
                transition(
                    'small <=> large', [
                        animate(500)
                    ]
                )
            ])
    ]
})

@HostListener('window:keydown', ['$event'])


export class SearchComponent implements OnInit {

    private searchSetting: any = {
        'placeholder': 'Search'
    };



    private _searchQuery: string;
    private defaultView: string = 'list';

    private activeElement: boolean = false;
    private panelSize: string = 'large';
    private showExtended: string = 'false';

    private simpleSearch(searchQuery: string) {
        this.router.navigate(['/search/' + this._searchQuery], {relativeTo: this.route});
    }

    constructor(private route: ActivatedRoute, private router: Router) { }

//    constructor() {}

    ngOnInit() {
    }


    onFocus() {
//        this.panelSize = 'large';
        this.showExtended = 'true';

//        this.panelSize = (this.panelSize === 'large') ? 'small' : 'large';


    }

    noFocus() {
        this.panelSize = 'small';
    }

    onKey(event: any) {
        this._searchQuery = event.target.value;
        if (this._searchQuery) {
            this.activeElement = true;
            // the ENTER key is active when the text input is not empty
            if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13) {
                this.simpleSearch(this._searchQuery);
            }
        }
        else {
            this.activeElement = false;
        }
    }

    doSearch(search_ele: HTMLElement) {
        if (this._searchQuery) {
            this.simpleSearch(this._searchQuery);
        }
        else {
            search_ele.focus();
        }
    }

    clearSearch(search_ele: HTMLElement) {
        if (this._searchQuery) {
            this._searchQuery = null;
            this.activeElement = false;
            search_ele.focus();
        }
        else {
            search_ele.focus();
        }
    }

}
