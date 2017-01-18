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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//
// import the material design modules
//
import { MaterialModule } from '@angular/material';

//
// import other third party modules
//
import { NgUploaderModule } from 'ngx-uploader';
import { CKEditorModule } from 'ng2-ckeditor';

//
// import all services
//
import { ProjectsService } from './services/projects.service';
import { ResourcesService } from './services/resources.service';
import { SearchService } from './services/search.service';
import { SessionService } from './services/session.service';
import { VocabulariesService } from './services/vocabularies.service';

//
// import all directives
//
import { CenterElementDirective } from './directives/center-element.directive';

import { UserProjectsPipe } from './pipes/user-projects.pipe';

//
// import all pipes
//
import { LimitToPipe } from './pipes/limit-to.pipe';

//
//  import all components
//
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/framework/header/header.component';
import { OverlayComponent } from './components/framework/overlay/overlay.component';

import { AdminComponent } from './components/admin/admin.component';
import { ExtendedSearchComponent } from './components/search/extended-search/extended-search.component';
import { DashboardViewComponent } from './components/view/dashboard-view/dashboard-view.component';
import { FooterComponent } from './components/framework/footer/footer.component';
import { GridViewComponent } from './components/view/grid-view/grid-view.component';
import { ListViewComponent } from './components/view/list-view/list-view.component';
import { PageNotFoundComponent } from './components/framework/page-not-found/page-not-found.component';
import { ProjectAdminComponent } from './components/admin/project-admin/project-admin.component';
import { ProjectButtonsComponent } from './components/framework/header/project-buttons/project-buttons.component';
import { ResourceViewComponent } from './components/view/resource-view/resource-view.component';
import { ResourcesAdminComponent } from './components/admin/resources-admin/resources-admin.component';
import { ResultsViewComponent } from './components/view/results-view/results-view.component';
import { SearchComponent } from './components/search/search.component';
import { SimpleSearchComponent } from './components/search/simple-search/simple-search.component';
import { TableViewComponent } from './components/view/table-view/table-view.component';
import { TeamAdminComponent } from './components/admin/team-admin/team-admin.component';
import { ToolbarButtonsComponent } from './components/framework/header/toolbar-buttons/toolbar-buttons.component';
import { UserLoginComponent } from './components/admin/user-login/user-login.component';
import { VideoObjectComponent } from './components/object/video-object/video-object.component';

import { UserAdminComponent } from './components/admin/user-admin/user-admin.component';
import { NewProjectComponent } from './components/admin/project-admin/new-project/new-project.component';
import { NewUserComponent } from './components/admin/user-admin/new-user/new-user.component';
import { UserComponent } from './components/user/user.component';
import { ProfileSettingsComponent } from './components/user/profile-settings/profile-settings.component';
import { CollectionsSettingsComponent } from './components/user/collections-settings/collections-settings.component';
import { ProjectsViewComponent } from './components/view/projects-view/projects-view.component';

//
// define all routes
//
const appRoutes: Routes = [
    {
        path: '',
        component: DashboardViewComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'search/:query',
        component: ResultsViewComponent
    },
    {
        path: 'resources/:uri',
        component: ResourceViewComponent    // default view for search results
    },
    {
        path: 'new',
        component: NewProjectComponent
    },
    {
        path: 'projects',           // project dashboard / public overview
        component: ProjectsViewComponent
    },
    {
        path: 'projects/:project',           // project dashboard / public overview
        component: ProjectsViewComponent
    },
    {
        path: 'project/:project/settings',  // project, team and resources (ontology) administration
        component: AdminComponent,

        children: [
            {
                path: '',
                redirectTo: 'project',
                pathMatch: 'full'
            },
            {
                path: 'project',
                component: ProjectAdminComponent
            },
            {
                path: 'team',
                component: TeamAdminComponent
            },
            {
                path: 'resources',
                component: ResourcesAdminComponent
            },
            { path: '**', component: PageNotFoundComponent }
        ]
    },

    {
        path: 'user/:user',  // user profile and collections administration
        component: UserComponent,

        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: ProfileSettingsComponent
            },
            {
                path: 'collections',
                component: CollectionsSettingsComponent
            },
/*            {
                path: 'collections/:name',
                component: ResourceViewComponent
            }, */
            {
                path: 'projects',
                component: ProjectsViewComponent
            },
            { path: '**', component: PageNotFoundComponent }
        ]
    },
    {
        path: 'user/:name/collections',         // user dashboard / public overview
        component: GridViewComponent
    },
    {
        path: 'user/:name/collections/:id',        // TODO: check the right term on pinterest
        component: ResourceViewComponent
    },
    {
        path: 'user/:name/settings',
        component: UserAdminComponent

    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OverlayComponent,
        VideoObjectComponent,
        SimpleSearchComponent,
        SearchComponent,
        ExtendedSearchComponent,
        GridViewComponent,
        ListViewComponent,
        TableViewComponent,
        DashboardViewComponent,
        PageNotFoundComponent,
        ResultsViewComponent,
        ResourceViewComponent,
        ToolbarButtonsComponent,
        ProjectButtonsComponent,
        UserProjectsPipe,
        ProjectAdminComponent,
        UserLoginComponent,
        FooterComponent,
        TeamAdminComponent,
        ResourcesAdminComponent,
        AdminComponent,
        UserAdminComponent,
        NewProjectComponent,
        NewUserComponent,
        UserComponent,
        ProfileSettingsComponent,
        CollectionsSettingsComponent,
        ProjectsViewComponent,
        CenterElementDirective,
        LimitToPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        NgUploaderModule,
        CKEditorModule
    ],
    providers: [
        ProjectsService,
        ResourcesService,
        SearchService,
        SessionService,
        VocabulariesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
