/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/12/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../app-material.module';

import { KitchensinkRoutingModule } from './kitchensink-routing.module';

import { KitchensinkComponent } from './kitchensink.component';
import { DummySinkComponent } from './sinks/dummysink.component';

@NgModule({
    declarations: [
        KitchensinkComponent,
        DummySinkComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        KitchensinkRoutingModule
    ]
})
export class KitchensinkModule {

}
