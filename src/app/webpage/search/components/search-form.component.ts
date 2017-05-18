import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums  from '../../../config/enums/enums.actions';
import { WebpageService } from '../../webpage.service';
import { Tag } from '../../../models/tag';

@Component({
    selector: 'search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.styl']
})

export class SearchFormComponent {
    search: any;
    tags: Observable<Tag[]>;
    tag: string;
    private searchTerms = new Subject<string>();
    themes$: Observable<any[]>;
    categories$: Observable<any[]>;
    tags$: Observable<any[]>;

    constructor(
        private webpageService: WebpageService,
        private store: Store<fromRoot.AppState>,
    ) {
        this.search = { tags:[]};
        this.themes$ = store.select(enums.getThemesState);
        this.categories$ = store.select(enums.getCategoriesState);
        this.tags$ = store.select(enums.getTagsState);
    }

    searchWebsites() {
        this.webpageService.searchWebsites(this.search);
    }

    searchTag(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.tags = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.searchService(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Tag[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Tag[]>([]);
            });  
    }

    searchService(term: string): Observable<Tag[]> {
        return this.tags$
            .map(x => {
                return x.filter(y => y.name.toLowerCase().includes(term.toLowerCase()))
            })
    }

    addTag(tag) {
        this.search.tags.push(tag.name);
        this.searchTerms.next("");
        this.tag = "";       
    }

}
