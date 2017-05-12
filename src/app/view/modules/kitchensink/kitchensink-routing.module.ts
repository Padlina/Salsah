/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/12/17.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummySinkComponent } from './sinks/dummysink.component';
import { KitchensinkComponent } from './kitchensink.component';

const kitchensinkRoutes: Routes = [
    {
        path: 'kitchensink', component: KitchensinkComponent,
        children: [
            { path: 'dummysink', component: DummySinkComponent }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(kitchensinkRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class KitchensinkRoutingModule {
}
