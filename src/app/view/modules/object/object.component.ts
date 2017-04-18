import {Component, OnInit, Input, OnChanges, Directive, ElementRef} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {ResourceService} from "../../../model/services/resource.service";
import {ApiServiceResult} from "../../../model/services/api-service-result";
import {ApiServiceError} from "../../../model/services/api-service-error";
import {ReadResourcesSequence} from "../../../model/webapi/knora/v2/read-resources-sequence";

@Component({
    selector: 'salsah-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnChanges, OnInit {

    @Input() iri: string;

    isLoading: boolean = true;
    errorMessage: any;

    resource: ReadResourcesSequence = new ReadResourcesSequence([], 0);

    constructor(private _route: ActivatedRoute,
                private _resourceService: ResourceService) {
    }

    ngOnChanges() {
        this._resourceService.getResource(this.iri)
            .subscribe(
                (result: ApiServiceResult) => {
                    this.resource = result.getJSONLD(result.body);

                    console.log(this.resource);

                    this.isLoading = false;
                },
                (error: ApiServiceError) => {
                    this.errorMessage = <any>error;
                    this.isLoading = false;
                }
            );
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let resIri = ( params['rid'] !== undefined ? params['rid'] : this.iri );
            this._resourceService.getResource(resIri)
                .subscribe(
                    (result: ApiServiceResult) => {
                        this.resource = result.getJSONLD(result.body);

                        this.isLoading = false;
                    },
                    (error: ApiServiceError) => {
                        this.errorMessage = <any>error;
                        this.isLoading = false;
                    }
                );
        });
    }

}
