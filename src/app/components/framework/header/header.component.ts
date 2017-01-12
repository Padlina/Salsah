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

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'salsah-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public projects: Object[];
    public currentProject: Object;
    public toolbar: Object[];

    constructor() {}

    onSelectProject(id: string) {
        console.log('Selected project has the id ' + id);
    }

    ngOnInit() {

    /* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    /* Developer object: just a sample to create a dummy header */
    /*                                                          */

        // default project settings

    /*
        let user: Object = {
            // TODO: decide how userdata shall be made available/saved in Salsah
        };
    */

        // object for projectButtons
        this.projects = [
            {
                shortname: 'SALSAH',
                description: '',
                uri: '',
                project_id: '',
                longname: 'System for Annotation and Linkage of Sources in Arts and Humanities',
                active: true,
                logo: './assets/images/salsah-logo.png',
                admin: false,
                login: 'http://salsah.org',
            },
            {
                shortname: 'BMF',
                description: '',
                uri: '',
                project_id: '19',
                longname: 'Bruno Manser Fonds',
                active: false,
                logo: ''
            }
        ];

    let user: Object = {
        name: '',
        icon: 'person',
        menuItems: [
            {
                text: 'Projects',
                icon: 'assignment',
                routerLink: '/user/username/projects'
            },
            {
                text: 'Collections',
                icon: 'bookmark_outline',
                routerLink: '/user/username/collections'
            },
            {
                text: 'Profile',
                //icon: 'account_box'
                icon: 'fingerprint',
                routerLink: '/user/username'
            },
            {
                text: 'Sign out',
                icon: 'power_settings_new',
                routerLink: '/login'
            }
        ],
        userProjects: [
            {
                id: "19",
                shortname: "BMF",
                longname: "Bruno Manser Fonds",
                admin: true
            },
            {
                shortname: 'sgv',
                description: '',
                uri: '',
                project_id: '18',
                longname: 'Bilddatenbank der Schweizerischen Gesellschaft für Volkskunde',
                active: true,
                logo: '',
                admin: true
            },
            {
                shortname: 'travis',
                description: '',
                uri: '',
                project_id: '21',
                longname: 'trAVis',
                active: false,
                logo: '',
                admin: false
            },
            {
                shortname: 'kuhaba',
                description: '',
                uri: '',
                project_id: '12',
                longname: 'Fotosammlung der Kunsthalle Basel',
                active: false,
                logo: '',
                admin: false
            },
            {
                shortname: 'dhlab-web',
                description: '',
                uri: '',
                project_id: '25',
                longname: 'Digital Humanities Lab',
                active: false,
                logo: '',
                admin: true
            },
            {
                shortname: 'smp',
                description: '',
                uri: '',
                project_id: '26',
                longname: 'SALSAH Movie Player',
                active: false,
                logo: '',
                admin: true
            }
        ]
    };

        this.currentProject = this.projects[0]; // SALSAH

        // object for toolbarButtons
        this.toolbar = [
            {
                name: 'add',
                label: 'Add new elements',
                icon: 'add',
                menu: 'addMenu',
                menuItems: [
                    {
                        label: 'New resource',
                        icon: 'note_add',
                        link: ''
                    },
                    {
                        label: 'New collection',
                        icon: 'library_add',
                        link: ''
                    },
                    {
                        label: 'New project',
                        icon: 'add',
                        link: ''
                    }
                ]
            },
            {
                name: 'documentation',
                label: 'Documentation',
                icon: 'help',
                menu: false,
                link: 'http://dhlab-basel.github.io/Salsah'
            },
            {
                name: 'user',
                label: 'User',
                icon: 'person',
                menu: 'userMenu',
                menuItems: [
                    {
                        label: 'Activity',
                        // icon: 'playlist_add_check'
                        icon: 'done',
                        routerLink: '/gridview'
                    },
                    {
                        label: 'Collections',
                        icon: 'bookmark_outline',
                        routerLink: '/'
                    },
                    {
                        label: 'Profile',
                        // icon: 'account_box'
                        icon: 'fingerprint',
                        routerLink: '/'
                    },
                    {
                        label: 'Sign out',
                        icon: 'power_settings_new',
                        routerLink: '/',
                        divider: 'true'
                    }
                ],
            }
        ];

        /*                                                          */
        /* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    }
}
