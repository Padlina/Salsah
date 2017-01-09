import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'salsah-project-buttons',
    templateUrl: './project-buttons.component.html',
    styleUrls: ['./project-buttons.component.css']
})
export class ProjectButtonsComponent implements OnInit {
    @Input() projects: Object[];
    @Input() current: Object;
    @Output() selectRequest: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    selectProject(id: string) {
        this.selectRequest.emit(id);
    }
}
