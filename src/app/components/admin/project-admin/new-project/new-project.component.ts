import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { ActivatedRoute, Router } from '@angular/router';

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

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
    }

    onSubmit(pf: any): void {
        console.log('you submitted value:', pf);
    }


    /**
     * saveProject()
     * check validity of the data in the form
     * if everything's fine, send the data to the api
     * and change the view from create project to the project admin view
     */
    saveProject(): void {
//        console.log();
//        this._router.navigate(['/project/' + ], {relativeTo: this._route});
    }

    resetProject(): void {
        this._router.navigate(['/new'], {relativeTo: this._route});
    }
    //
    // ngX file upload settings
    //
    uploadFile: any;
    hasBaseDropZoneOver: boolean = false;
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
