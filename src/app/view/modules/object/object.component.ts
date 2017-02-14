import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ResourceService} from "../../../model/api/resource.service";
import {Resource} from "../../../model/classes/resource";

@Component({
    selector: 'salsah-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

    @Input() iri: string;

    isLoading: boolean = true;
    errorMessage: any;

    resource: Resource = new Resource();


    constructor(private _route: ActivatedRoute,
                private _resourceService: ResourceService) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let resIri = ( params['res'] !== undefined ? params['res'] : this.iri );


            this._resourceService.getResource(resIri)
                .subscribe(
                    (data: Resource) => {
                        this.resource = data;
                        this.isLoading = false;
                    },
                    error => {
                        this.errorMessage = <any>error;
                        this.isLoading = false;
                    }
                );

        });
    }

}
