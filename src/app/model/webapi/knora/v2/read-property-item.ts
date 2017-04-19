/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer.
 * This file is part of SALSAH.
 * SALSAH is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * SALSAH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * You should have received a copy of the GNU Affero General Public
 * License along with SALSAH.  If not, see <http://www.gnu.org/licenses/>.
 * */


import {AppConfig} from "../../../../app.config";
import {ReadResource} from "./read-resource";

export interface ReadPropertyItem {

    id: string;

    type:string;

    toHtml:() => string;
}

export class ReadTextValue implements ReadPropertyItem {

    constructor(id:string, html:string) {

        this.id = id;

        this.html = html;
    }

    id:string;

    type = AppConfig.TextValue;

    toHtml = function(): string {
        return this.html;
    };

    html:string;

}

export class ReadDateValue implements ReadPropertyItem {

    constructor(id:string, calendar:string, dateStart:string, dateEnd:string) {

        this.id = id;

        this.calendar = calendar;

        this.dateStart = dateStart;

        this.dateEnd = dateEnd;
    }

    id:string;

    type = AppConfig.DateValue;

    toHtml = function(): string {
        return this.dateStart + ' - ' + this.dateEnd;
    };

    calendar:string;

    dateStart:string;

    dateEnd:string;
}

export class ReadLinkValue implements ReadPropertyItem {

    constructor(id:string, subject:string, predicate: string, object:string, referredResource?: ReadResource) {

        this.id = id;

        this.subject = subject;

        this.predicate = predicate;

        this.object = object;

        if (referredResource !== undefined) this.referredResource = referredResource;
    }

    id:string;

    type = AppConfig.LinkValue;

    subject:string;

    predicate:string;

    object:string;

    referredResource?: ReadResource;

    toHtml = function():string {
        return (this.referredResource !== undefined) ? this.referredResource.label : this.object;
    }

}
