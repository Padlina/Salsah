/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/12/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../app-material.module';

import { KitchensinkRoutingModule } from './kitchensink-routing.module';

import { KitchensinkComponent } from './kitchensink.component';
import { KitchensinkStubModule } from '../kitchensink-stub/kitchensink-stub.module';

@NgModule({
    declarations: [
        KitchensinkComponent,
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        KitchensinkRoutingModule,
        KitchensinkStubModule,
    ]
})
export class KitchensinkModule {

}
