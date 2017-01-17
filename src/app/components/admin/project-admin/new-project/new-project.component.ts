import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'salsah-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

    public form: any = {        // TODO: create a language json file or db file for multilingual use
        project: {
            title: 'Create a new project',
            name: 'Project name',
            shortname: 'Project short name',
            description: 'Description',
            logo: 'Upload a project logo'
        }
    };

    constructor() { }

    ngOnInit() {
    }

    browseFile(): void {

    }

    //
    // ngX file upload settings
    //
    uploadFile: any;
    hasBaseDropZoneOver: boolean = true;
    options: NgUploaderOptions = {
        url: 'http://localhost:10050/upload'
    };
    sizeLimit = 2000000;

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    }

    fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    beforeUpload(uploadingFile): void {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    }
}
