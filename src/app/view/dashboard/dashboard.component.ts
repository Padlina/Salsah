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
import {Router} from "@angular/router";
import {Session} from "../../model/webapi/knora/";

function getDocument(): any {
    return document;
}

@Component({
    selector: 'salsah-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    errorMessage: string = undefined;
    session: Session = new Session();

    constructor(
        private _router: Router
    ) {
    }

    ngOnInit() {

        if (this._router.url === '/logout') DashboardComponent.logout();
    }

    static logout() {
        // remove all the session cookies
        getDocument().cookie = "sid=;expires=-1";
        getDocument().cookie = "KnoraAuthentication=;expires=-1";
        // remove the local storage authentication values
        localStorage.removeItem('auth');
        // go to the start page with a reload of the whole app
        window.location.replace('/');
    }

}
