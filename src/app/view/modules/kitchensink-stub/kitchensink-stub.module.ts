/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/15/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Routes } from '@angular/router';

import { AppMaterialModule } from '../../../app-material.module';

import { KitchensinkStubOverviewComponent } from './kitchensink/kitchensink-stub-overview.component';
import { KitchensinkStubApiComponent } from './kitchensink/kitchensink-stub-api.component';
import { KitchensinkStubExamplesComponent } from './kitchensink/kitchensink-stub-examples.component';

// import { KitchensinkRoutingModule } from './kitchensink-stub-routing.module';

/*const routes: Routes = [
    {
        path: 'kitchensink-stub', component: KitchensinkStubOverviewComponent,
        children: [
            { path: 'api', component: KitchensinkStubApiComponent }
        ]
    }
]*/

@NgModule({
    declarations: [
        KitchensinkStubOverviewComponent,
        KitchensinkStubApiComponent,
        KitchensinkStubExamplesComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule
    ]
})
export class KitchensinkStubModule {

}
