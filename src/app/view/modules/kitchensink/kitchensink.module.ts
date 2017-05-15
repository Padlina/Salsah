/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/12/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../app-material.module';

import { KitchensinkRoutingModule } from './kitchensink-routing.module';

import { KitchensinkComponent } from './kitchensink.component';
import { KitchensinkStubComponent } from '../kitchensink-stub/kitchensink-stub.component';

@NgModule({
    declarations: [
        KitchensinkComponent,
        KitchensinkStubComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        KitchensinkRoutingModule
    ]
})
export class KitchensinkModule {

}
