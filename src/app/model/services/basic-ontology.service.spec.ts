import {TestBed, inject} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {BasicOntologyService} from './basic-ontology.service';


describe('BasicOntologyService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
            providers: [
                BasicOntologyService,
            ]
        });
    });

    it('should ...', inject([BasicOntologyService], (service: BasicOntologyService) => {
        expect(service).toBeTruthy();
    }));

});


