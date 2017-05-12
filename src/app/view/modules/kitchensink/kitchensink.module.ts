/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/12/17.
 */

import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../../app-material.module';
import { AppRoutingModule } from '../../../app-routing.module';

import { KitchensinkComponent } from './kitchensink.component';

@NgModule({
    declarations: [
        KitchensinkComponent
    ],
    imports: [
        AppMaterialModule,
        AppRoutingModule
    ],
    exports: [
        KitchensinkComponent
    ]
})
export class KitchensinkModule {

}
