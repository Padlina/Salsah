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

import {ReadResourcesSequence} from "./read-resources-sequence";
import {ReadResource} from "./read-resource";
import {ReadProperties} from "./read-properties";
import {
    ReadPropertyItem, ReadTextValueAsHtml, ReadDateValue, ReadLinkValue,
    ReadTextValueAsString, ReadTextValueAsXml, ReadIntegerValue, ReadDecimalValue, ReadStillImageFileValue
} from "./read-property-item";
import {AppConfig} from "../../../../app.config";

export module ConvertJSONLD {

    /**
     * Construct a [[ReadResource]] from JSON-LD.
     *
     * @param resourceJSONLD an object describing the resource and its properties.
     * @param properties    a [[ReadProperties]] describing the resource's properties. if any.
     * @returns a [[ReadResource]]
     */
    function constructReadResource(resourceJSONLD: Object):ReadResource {

        let properties: ReadProperties = constructReadProperties(resourceJSONLD);

        return {
            id: resourceJSONLD['@id'],
            type: resourceJSONLD['@type'],
            label: resourceJSONLD['name'],
            properties: properties
        };
    }

    /**
     * Construct a [[ReadProperties]] from JSON-LD.
     *
     * @param resourceJSONLD an object describing the resource and its properties.
     * @returns a [[ReadProperties]].
     */
    function constructReadProperties(resourceJSONLD: Object):ReadProperties {

        let propNames = Object.keys(resourceJSONLD);
        // filter out everything that is not a Knora property name
        propNames = propNames.filter(propName => propName != '@id' && propName != '@type' && propName != 'name');

        let properties: ReadProperties = {};

        // iterate over all the given property names
        for (let propName of propNames) {

            let propValues: Array<ReadPropertyItem> = [];

            // for each property name, an array of property values is given, iterate over it
            for (let propValue of resourceJSONLD[propName]) {

                // convert a JSON-LD property value to a `ReadPropertyItem`

                let valueSpecificProp: ReadPropertyItem;

                // check for the property's value type
                switch (propValue['@type']) {
                    case AppConfig.TextValue:
                        // a text value might be given as plain string, html or xml.
                        let textValue: ReadPropertyItem;

                        if (propValue[AppConfig.valueAsString] !== undefined) {
                            textValue = new ReadTextValueAsString(propValue['@id'], propValue[AppConfig.valueAsString]);
                        } else if (propValue[AppConfig.textValueAsHtml] !== undefined) {
                            textValue = new ReadTextValueAsHtml(propValue['@id'], propValue[AppConfig.textValueAsHtml]);
                        } else if (propValue[AppConfig.textValueAsXml] !== undefined && propValue[AppConfig.textValueHasMapping] !== undefined) {
                            textValue = new ReadTextValueAsXml(propValue['@id'], propValue[AppConfig.textValueAsXml], propValue[AppConfig.textValueHasMapping]);
                        } else {
                            // expected text value members not defined
                            console.log("ERROR: Invalid text value: " + JSON.stringify(propValue))

                        }

                        valueSpecificProp = textValue;
                        break;

                    case AppConfig.DateValue:
                        let dateValue = new ReadDateValue(propValue['@id'],
                            propValue[AppConfig.dateValueHasCalendar],
                            propValue[AppConfig.dateValueHasStartYear],
                            propValue[AppConfig.dateValueHasEndYear],
                            propValue[AppConfig.dateValueHasStartMonth],
                            propValue[AppConfig.dateValueHasEndMonth],
                            propValue[AppConfig.dateValueHasStartDay],
                            propValue[AppConfig.dateValueHasEndDay]);

                        valueSpecificProp = dateValue;
                        break;

                    case AppConfig.LinkValue:

                        let linkValue: ReadLinkValue;

                        // check if the referred resource is given as an object or just as an IRI
                        if (propValue[AppConfig.linkValueHasTarget] !== undefined) {
                            // linkValueHasTarget contains the object

                            let referredResource: ReadResource = constructReadResource(propValue[AppConfig.linkValueHasTarget]);

                            linkValue = new ReadLinkValue(propValue['@id'], referredResource.id, referredResource);
                        } else {
                            // linkValueHasTargetIri contains the resource's Iri

                            let referredResourceIri = propValue[AppConfig.linkValueHasTargetIri];

                            linkValue = new ReadLinkValue(propValue['@id'], referredResourceIri);
                        }

                        valueSpecificProp = linkValue;
                        break;

                    case AppConfig.IntValue:

                        let intValue = new ReadIntegerValue(propValue['@id'], propValue[AppConfig.integerValueAsInteger]);
                        valueSpecificProp = intValue;

                        break;

                    case AppConfig.DecimalValue:

                        let decimalValue = new ReadDecimalValue(propValue['@id'], propValue[AppConfig.decimalValueAsDecimal]);
                        valueSpecificProp = decimalValue;

                        break;

                    case AppConfig.StillImageFileValue:

                        let stillImageFileValue: ReadStillImageFileValue = new ReadStillImageFileValue(
                            propValue['@id'],
                            propValue[AppConfig.fileValueHasFilename],
                            propValue[AppConfig.stillImageFileValueHasIIIFBaseUrl],
                            propValue[AppConfig.fileValueAsUrl],
                            propValue[AppConfig.stillImageFileValueHasDimX],
                            propValue[AppConfig.stillImageFileValueHasDimY],
                            propValue[AppConfig.fileValueIsPreview] // optional (may be undefined)
                        );

                        valueSpecificProp = stillImageFileValue;

                        break;

                    default:
                        // unsupported value type
                        console.log("ERROR: value type not implemented yet: " + propValue['@type']);
                        break;
                }

                // add the property value to the array of property values
                if (valueSpecificProp !== undefined) propValues.push(valueSpecificProp);

            }

            // add the property to the properties object
            properties[propName] = propValues;

        }

        return properties;
    }

    /**
     * Turns an API response in JSON-LD representing a sequence of resources into a [[ReadResourcesSequence]].
     *
     * @param resourcesResponseJSONLD   a sequence of resources, represented as a JSON-LD object.
     * @returns {ReadResourcesSequence} a [[ReadResourcesSequence]].
     */
    export function createReadResourcesSequenceFromJsonLD(resourcesResponseJSONLD: Object): ReadResourcesSequence {

        let resources: Array<ReadResource> = [];
        let numberOfResources: number = resourcesResponseJSONLD['numberOfItems'];

        for (let resourceJSONLD of resourcesResponseJSONLD['itemListElement']) {

            let resource: ReadResource = constructReadResource(resourceJSONLD);

            // add the resource to the resources array
            resources.push(resource);
        }

        return new ReadResourcesSequence(resources, numberOfResources);

    }

}
