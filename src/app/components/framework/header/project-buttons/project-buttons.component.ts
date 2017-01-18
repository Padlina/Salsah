import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SessionService, SessionJson } from '../../../_services';


@Component({
    selector: 'salsah-project-buttons',
    templateUrl: './project-buttons.component.html',
    styleUrls: ['./project-buttons.component.css']
})
export class ProjectButtonsComponent implements OnInit {
    @Input() projects: Object[];
    @Input() currentProject: Object;
    @Output() selectRequest: EventEmitter<any> = new EventEmitter();

    private errorMessage: string = undefined;
    private session: SessionJson = new SessionJson();

    constructor( private _sessionService: SessionService ) { }

    ngOnInit() {
        this._sessionService.getSession()
            .subscribe(
                (data: SessionJson) => {
                    this.session = data;
                },
                error => {
                    this.errorMessage = <any>error;
                }
            )
    }

    onSelectProject(id: string): void {
        console.log("Selected project has the id " + id);
    }
    selectProject(id: string) {
        this.selectRequest.emit(id);
    }
}
