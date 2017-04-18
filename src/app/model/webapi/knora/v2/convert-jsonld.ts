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
import {ReadPropertyItem, ReadTextValue} from "./read-property-item";
import {AppConfig} from "../../../../app.config";

export module ConvertJSONLD {

    /**
     * Turns an API response in JSONLD representing a sequence of resources into a [[ReadResourcesSequence]].
     *
     * @param resourcesResponseJSONLD   a sequence of resources, represented as a JSON-LD object.
     * @returns {ReadResourcesSequence} a [[ReadResourcesSequence]].
     */
    export function createReadResourcesSequenceFromJsonLD(resourcesResponseJSONLD: Object): ReadResourcesSequence {

        let resources: Array<ReadResource> = [];
        let numberOfResources: number = resourcesResponseJSONLD['numberOfItems'];

        for (let resourceJSONLD of resourcesResponseJSONLD['itemListElement']) {
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
                    let genericProp: ReadPropertyItem = {
                        id: propValue['@id']
                    };

                    let valueSpecificProp: ReadPropertyItem;

                    // check for the property's value type
                    switch (propValue['@type']) {
                        case AppConfig.TextValue:
                            let textValue = new ReadTextValue(genericProp.id, propValue['html']);

                            valueSpecificProp = textValue;

                            break;

                        default:
                            valueSpecificProp = genericProp;
                            break;
                    }

                    // add the property value to the array of property values
                    propValues.push(valueSpecificProp);

                }

                // add the property to the properties object
                properties[propName] = propValues;
            }

            // add the resource to the resources
            resources.push({
                id: resourceJSONLD['@id'],
                type: resourceJSONLD['@type'],
                label: resourceJSONLD['name'],
                properties: properties
            });
        }

        return new ReadResourcesSequence(resources, numberOfResources);

    }

}
