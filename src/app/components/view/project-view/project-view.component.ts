import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salsah-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

    public tiles = [
        {text: 'Project info', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Quick links', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'dashboard info 1', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'dashboard info 2', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
