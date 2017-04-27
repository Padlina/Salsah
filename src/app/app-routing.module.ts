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

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {LoginComponent} from "./view/login/login.component";
import {DashboardComponent} from "./view/dashboard/dashboard.component";
import {UserComponent} from "./view/dashboard/user/user.component";

import {ProjectComponent} from "./view/dashboard/project/project.component";
import {ProjectSettingsComponent} from "./view/dashboard/project/project-settings/project-settings.component";
import {PageNotFoundComponent} from "./view/modules/error/page-not-found/page-not-found.component";
import {ProjectProfileComponent} from "./view/dashboard/project/project-profile/project-profile.component";
import {AccessDeniedComponent} from "./view/modules/error/access-denied/access-denied.component";
import {ResultsComponent} from "./view/modules/listing/results/results.component";
import {ProjectTeamComponent} from "./view/dashboard/project/project-team/project-team.component";
import {ProjectResourcesComponent} from "./view/dashboard/project/project-resources/project-resources.component";
import {ProjectFormComponent} from "./view/modules/form/project-form/project-form.component";
import {DocumentationComponent} from "./view/documentation/documentation.component";

import {ProjectAdvancedComponent} from "./view/dashboard/project/project-advanced/project-advanced.component";
import {ObjectComponent} from "./view/modules/object/object.component";



const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: DashboardComponent
    },
    {
        // Public user profile
        path: 'user/:uid', component: UserComponent
        /*
        children: [
            { path: '', component: UserProfileComponent },
            { path: '**', component: PageNotFoundComponent }
        ]
        */
    },
    {
        // User profile = Dashboard for logged in users
        path: 'profile', component: UserComponent
    },
    {
        // User settings
        path: 'settings', component: UserComponent
    },
    {
        // User projects
        path: 'projects', component: UserComponent
    },
    {
        // User collections
        path: 'collections', component: UserComponent
    },
    {
        path: 'search/:q',
        component: ResultsComponent
    },
    {
        path: 'object/:rid',
        component: ObjectComponent
    },
    {
        path: 'project/:pid', component: ProjectComponent,
        children: [
            {
                path: '', component: ProjectProfileComponent
            },
            {
                path: 'settings', component: ProjectSettingsComponent
            },
            {
                path: 'team', component: ProjectTeamComponent
            },
            {
                path: 'resources', component: ProjectResourcesComponent
            },
            {
                path: 'advanced', component: ProjectAdvancedComponent
            },

            { path: '**', component: PageNotFoundComponent }
        ]
    },
    {
        // create new project
        path: 'new', component: ProjectFormComponent
    },
    {
        path: 'documentation', component: DocumentationComponent
    },
    {
        path: 'denied',
        component: AccessDeniedComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
