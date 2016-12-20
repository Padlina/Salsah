import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'salsah-team-admin',
    templateUrl: './team-admin.component.html',
    styleUrls: ['./team-admin.component.css']
})
export class TeamAdminComponent implements OnInit {

    @Output() tabRequest = new EventEmitter<any>();

    public tab_id: number = 1;

    constructor() {
    }

    ngOnInit() {
        this.tabRequest.emit(this.tab_id);
    }

}
