import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'salsah-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

//    public _isLoading: boolean = true;

    public cur_tab: number = 0;

    public admin: Object = {
        nav: [
            {
                name: 'Project',
                path: '/'
            },
            {
                name: 'Team',
                path: '/team'
            },
            {
                name: 'Resources',
                path: '/resources'
            },
            {
                name: 'Advanced',
                path: '/resources'
            },

        ]

    };

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
//        console.log(this._route.params);
        console.log(this._router.url);
        /* TODO get the url and compare the activated route with the admin object and set the cur_tab from there!? */
    }


    public gotoSettings(path) {
        console.log(path);
    }


    activateTab(id: number) {
        console.log(id);
        this.cur_tab = id;
    }

}
