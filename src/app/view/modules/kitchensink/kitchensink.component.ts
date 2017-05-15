/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 5/11/17.
 */
import { MdSnackBar } from '@angular/material';

import { Component } from '@angular/core';

@Component({
    selector: 'salsah-nie-kitchensink',
    templateUrl: './kitchensink.component.html',
    styleUrls: [ './kitchensink.component.css' ]
})
export class KitchensinkComponent {
    constructor(public snackBar: MdSnackBar) {
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }

    openNotYetImplemented() {
        this.snackBar.open('Not yet implemented!', 'I see', {
            duration: 2000
        });
    }
}
