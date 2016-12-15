import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'salsah-toolbar-buttons',
    templateUrl: './toolbar-buttons.component.html',
    styleUrls: ['./toolbar-buttons.component.css']
})
export class ToolbarButtonsComponent implements OnInit {
    @Input() toolbar: Object[];

    constructor() { }

    ngOnInit() {
    }

}
