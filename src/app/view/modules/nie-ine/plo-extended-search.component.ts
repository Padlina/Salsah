import {Component, OnInit, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'salsah-plo-extended-search',
    templateUrl: './plo-extended-search.component.html',
    styleUrls: ['./plo-extended-search.component.css'],
    animations: [
        trigger('simpleSearchMenu',
            [
                state('inactive', style({height: '0px', display: 'none'})),
                state('active', style({height: '560px', display: 'block'})),
                transition('inactive => active', [
                    style({transform: 'translateY(100%)'}),
                    animate('100ms ease-in')
                ]),
                transition('active => inactive', [
                    style({transform: 'translateY(-100%)'}),
                    animate('100ms ease-out')
                ])
            ]),
        trigger('extendedSearchMenu',
            [
                state('inactive', style({height: '0px', display: 'none'})),
                state('active', style({'min-height': '560px', display: 'block'})),
                transition('inactive => active', [
                    style({transform: 'translateY(100%)'}),
                    animate('100ms ease-in')
                ]),
                transition('active => inactive', [
                    style({transform: 'translateY(-100%)'}),
                    animate('100ms ease-out')
                ])
            ]),
        trigger('size',
            [
                state('small, void', style({height: '50px', 'margin-top': '0px', 'margin-left': '0px'})),
                state('large, void', style({height: '100px', 'margin-top': '30px'})),
                transition(
                    'small <=> large', [
                        animate(500)
                    ]
                )
            ])
    ]
})


export class PloSearchComponent implements OnInit {

    searchQuery: string;

    yearFrom: number;
    yearTo: number;

    resourceType: string;

    searchPanelFocus: boolean = false;

    prevSearch: string[] = JSON.parse(localStorage.getItem('prevSearch'));

    focusOnSimple: string = 'inactive';
    focusOnExtended: string = 'inactive';

    searchLabel: string = 'Search';

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _eleRef: ElementRef) {

    }

    ngOnInit() {
    }
    /*
     @HostListener('document:click', ['$event'])
     onClick(event) {
     if (!this._eleRef.nativeElement.contains(event.target)) {
     if (this.focusOnSimple) this.toggleMenu('simpleSearch');
     if (this.focusOnExtended) this.toggleMenu('extendedSearch');
     }
     }
     */

    onKey(search_ele: HTMLElement, event) {
        this.focusOnSimple = 'active';
        this.prevSearch = JSON.parse(localStorage.getItem('prevSearch'));
        if (this.searchQuery && (event.key === 'Enter' || event.keyCode === 13 || event.which === 13)) {
            this.doSearch(search_ele);
        }
    }

    doSearch(search_ele: HTMLElement) {
        if (this.searchQuery !== undefined && this.searchQuery !== null) {
            this.toggleMenu('simpleSearch');
            this._router.navigate(['/search/' + this.searchQuery], {relativeTo: this._route});

            // push the search query into the local storage prevSearch array (previous search)
            // to have a list of recent search requests
            let existingPrevSearch: string[] = JSON.parse(localStorage.getItem('prevSearch'));
            if (existingPrevSearch === null) { existingPrevSearch = [] };
            let i: number = 0;
            for (let entry of existingPrevSearch) {
                // remove entry, if exists already
                if (this.searchQuery === entry) { existingPrevSearch.splice(i, 1) };
                i++;
            }

            existingPrevSearch.push(this.searchQuery);
            localStorage.setItem('prevSearch', JSON.stringify(existingPrevSearch));
            // TODO: save the previous search queries somewhere in the user's profile

        } else {
            search_ele.focus();
            this.prevSearch = JSON.parse(localStorage.getItem('prevSearch'));
        }
    }

    doExtendedSearch(search_ele: HTMLElement) {

        let yearRestriction = '';
        let wordRestriction = '';
        let typeRestriction = '';

        // Perform fulltext search if a keyword is entered. Else perform extended search
        if (this.searchQuery !== undefined && this.searchQuery !== null) {
            wordRestriction = this.searchQuery;
        }

        // Limit to years if given
        if (this.yearFrom !== undefined && this.yearFrom !== null || this.yearTo !== undefined && this.yearTo !== null) {
            if (this.yearFrom === undefined || this.yearFrom == null) {
                this.yearFrom = 500;
            }
            if (this.yearTo === undefined || this.yearTo == null) {
                this.yearTo = new Date().getFullYear()
            }

            // A date from incunabula as placeholder
            const date_id = 'http%3A%2F%2Fwww.knora.org%2Fontology%2Fincunabula%23pubdate';
            yearRestriction = '&property_id=' + date_id + '&compop=EQ&searchval=GREGORIAN%2F'
                + this.yearFrom + '-01-01%2F' + this.yearTo + '-12-31';
        }

        // Restrict to one resource type
        if (this.resourceType !== undefined && this.searchQuery !== null) {
            if (this.resourceType === 'person') {
                typeRestriction = '&filter_by_restype=http%3A%2F%2Fwww.knora.org%2Fontology%2Fincunabula%23page'
            } else if (this.resourceType === 'comment') {
                typeRestriction = '&filter_by_restype=http%3A%2F%2Fwww.knora.org%2Fontology%2Fincunabula%23page'
            } else if (this.resourceType === 'manifestation') {
                typeRestriction = '&filter_by_restype=http%3A%2F%2Fwww.knora.org%2Fontology%2Fincunabula%23page'
            } else {
                typeRestriction = '';
            }
        }

        this.toggleMenu('simpleSearch');
        console.log(['/search/' + wordRestriction + yearRestriction]);
        this._router.navigate(['/search/' + wordRestriction + yearRestriction + typeRestriction], {relativeTo: this._route});
    }

    resetSearch(search_ele: HTMLElement) {
        this.searchQuery = null;
        this.yearFrom = null;
        this.yearTo = null;
        search_ele.focus();
        this.focusOnSimple = 'inactive';
        this.searchPanelFocus = !this.searchPanelFocus;
    }

    doPrevSearch(query: string) {
        this.searchQuery = query;
        this._router.navigate(['/search/' + query], {relativeTo: this._route});
        this.toggleMenu('simpleSearch');
    }

    resetPrevSearch(name: string = null) {
        if (name) {
            // delete only this item with the name ...
            let i: number = this.prevSearch.indexOf(name);
            this.prevSearch.splice(i, 1);
            localStorage.setItem('prevSearch', JSON.stringify(this.prevSearch));
        } else {
            // delete the whole "previous search" array
            localStorage.removeItem('prevSearch');
        }
        this.prevSearch = JSON.parse(localStorage.getItem('prevSearch'));

    }

    setFocus() {
        this.prevSearch = JSON.parse(localStorage.getItem('prevSearch'));
        this.focusOnSimple = 'active';
        this.searchPanelFocus = !this.searchPanelFocus;
    }

    toggleMenu(name: string) {
        switch (name) {
            case 'simpleSearch':
                this.prevSearch = JSON.parse(localStorage.getItem('prevSearch'));
                this.focusOnSimple = (this.focusOnSimple === 'active' ? 'inactive' : 'active');
                break;
            case 'extendedSearch':
                this.focusOnExtended = (this.focusOnExtended === 'active' ? 'inactive' : 'active');
                break;
        }
    }
}
