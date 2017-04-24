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
import {escape} from "querystring";

export interface ReadPropertyItem {

    id: string;

    type:string;

    toHtml:() => string;
}

export class ReadTextValueAsString implements ReadPropertyItem {

    constructor(id:string, str:string) {

        this.id = id;

        this.str = str;
    }

    id:string;

    type = AppConfig.TextValue;

    toHtml = function(): string {

        return this.str;
    };

    str:string;

}


export class ReadTextValueAsHtml implements ReadPropertyItem {

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

export class ReadTextValueAsXml implements ReadPropertyItem {

    constructor(id:string, xml:string, mappingIri:string) {

        this.id = id;

        this.xml = xml;

        this.mappingIri = mappingIri;
    }

    id:string;

    type = AppConfig.TextValue;

    toHtml = function(): string {
        return escape(this.html);
    };

    xml:string;

    mappingIri:string;

}

export class ReadDateValue implements ReadPropertyItem {

    constructor(id:string, calendar:string, startYear:number, endYear:number, startMonth?:number, endMonth?:number, startDay?:number, endDay?:number) {

        this.id = id;

        this.calendar = calendar;

        this.startYear = startYear;

        this.endYear = endYear;

        this.startMonth = startMonth;

        this.endMonth = endMonth;

        this.startDay = startDay;

        this.endDay = endDay;
    }

    id:string;

    type = AppConfig.DateValue;

    separator = "-";

    toHtml = function(): string {
        // consider precision

        let startDate:string;

        if (this.startMonth === undefined) {
            // year precision
            startDate = this.startYear;
        } else if (this.startDay === undefined) {
            // month precision
            startDate = this.startYear + this.separator + this.startMonth
        } else {
            // day precision
            startDate = this.startYear + this.separator + this.startMonth + this.separator + this.startDay;
        }

        let endDate:string;

        if (this.endMonth === undefined) {
            // year precision
            endDate = this.endYear;
        } else if (this.endDay === undefined) {
            // month precision
            endDate = this.endYear + this.separator + this.endMonth
        } else {
            // day precision
            endDate = this.endYear + this.separator + this.endMonth + this.separator + this.endDay;
        }

        if (startDate == endDate) {
            return this.calendar + ":" + startDate
        } else {
            return this.calendar + ":" + startDate + this.separator + endDate;
        }
    };

    calendar:string;

    startYear:number;

    endYear:number;

    startMonth?:number;

    endMonth?:number;

    startDay?:number;

    endDay?:number;
}

export class ReadLinkValue implements ReadPropertyItem {

    constructor(id:string, referredResource: ReadResource) {

        this.id = id;

        this.referredResource = referredResource;
    }

    id:string;

    type = AppConfig.LinkValue;

    referredResource: ReadResource;

    toHtml = function():string {
        return this.referredResource.label;
    }

}

export class ReadIntegerValue implements ReadPropertyItem {

    constructor(id:string, integer:number) {

        this.id = id;

        this.integer = integer;

    }

    id:string;

    type = AppConfig.IntValue;

    integer: number;

    toHtml = function():string {
        return this.integer;
    }


}

export class ReadDecimalValue implements ReadPropertyItem {

    constructor(id:string, decimal:number) {

        this.id = id;

        this.decimal = decimal;

    }

    id:string;

    type = AppConfig.DecimalValue;

    decimal: number;

    toHtml = function():string {
        return this.decimal;
    }


}

export class ReadStillImageFileValue {

    constructor(id:string, pathToImage:string, isPreview: boolean) {

        this.id = id;

        this.pathToImage = pathToImage;

        this.isPreview = isPreview

    }

    id:string;

    type = AppConfig.StillImageFileValue;

    pathToImage: string;

    isPreview: boolean;

    toHtml = function(): string {
        return '<img src="' + this.pathToImage + '"/>';
    }

}
