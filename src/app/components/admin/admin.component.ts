import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'salsah-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

//    public _isLoading: boolean = true;

    private url_params: any;
    private cur_project: string;
    private cur_path_array: string[];
    private cur_tab: number = 0;

    public settings: any = [
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
        }
    ];

    constructor(private _route: ActivatedRoute, private _router: Router) {


    }

    ngOnInit() {
        this.url_params = this._route.params;
        this.cur_project = this.url_params.value.project;

        /*
         * get the url route to set the active tab
         */
        this.cur_path_array = this._router.url.split( '/' );
        if(this.cur_path_array[3] === 'settings' && this.cur_path_array[4]) {
            for (let i=0; i < this.settings.length; i++) {
                if (this.settings[i]['name'].toUpperCase() === this.cur_path_array[4].toUpperCase()) {
                    this.cur_tab = i;
                }
            }
        }
    }


    public gotoSettings(path) {
        console.log(path);
    }


    activateTab(id: number) {
        console.log(id);
        this.cur_tab = id;
    }

}
