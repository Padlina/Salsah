import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {AppMaterialModule} from '../../app-material.module';
import {AppRoutingModule} from '../../app-routing.module';
import {DevelopersCollectionComponent} from './developers-collection.component';

describe('DevelopersCollectionComponent', () => {
    let component: DevelopersCollectionComponent;
    let fixture: ComponentFixture<DevelopersCollectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                AppMaterialModule,
                AppRoutingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevelopersCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
