import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salsah-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

    public form: any = {        // TODO: create a language json file or db file for multilingual use
        project: {
            name: 'Project name',
            description: 'Description'
        }
    };

  constructor() { }

  ngOnInit() {
  }

}
