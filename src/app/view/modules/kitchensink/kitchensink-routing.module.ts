/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/12/17.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitchensinkComponent } from './kitchensink.component';
import { KitchensinkStubComponent } from '../kitchensink-stub/kitchensink-stub.component';

const kitchensinkRoutes: Routes = [
    {
        path: 'kitchensink', component: KitchensinkComponent,
        children: [
            { path: 'stub', component: KitchensinkStubComponent }
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
