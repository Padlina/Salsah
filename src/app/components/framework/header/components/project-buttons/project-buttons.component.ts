import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'salsah-project-buttons',
    templateUrl: './project-buttons.component.html',
    styleUrls: ['./project-buttons.component.css']
})
export class ProjectButtonsComponent implements OnInit {
    @Input() projects: Object[];
    @Input() current: Object;

    constructor() { }

    ngOnInit() {
    }

}
