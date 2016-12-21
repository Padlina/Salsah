import {Component, OnInit} from '@angular/core';

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

    constructor() {

    }

    ngOnInit() {

    }

}
