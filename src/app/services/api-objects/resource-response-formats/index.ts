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

/**
 *
 *              ResourceResponseFormats
 *
 * This module contains classes that represent responses to a resource GET request.
 *
 *
 */

import { ResourceContextResponseJson } from './src/resource-context-response-json';
import { ResourceFullResponseJson } from './src/resource-full-response-json';
import { ResourceInfoResponseJson } from './src/resource-info-response-json';
import { ResourcePropertiesResponseJson } from './src/resource-properties-response-json';
import { ResourceRightsResponseJson } from './src/resource-rights-response-json';
import { ResourceTypeResponseJson } from './src/resource-type-response-json';
import { VocabularyResponseJson } from './src/vocabulary-response-json';


export {
    ResourceContextResponseJson,
    ResourceFullResponseJson,
    ResourceInfoResponseJson,
    ResourcePropertiesResponseJson,
    ResourceRightsResponseJson,
    ResourceTypeResponseJson,
    VocabularyResponseJson
}
