import { Component, Input } from '@angular/core';
import { WebpageService } from '../../webpage.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums  from '../../../config/enums/enums.actions';
import { Tag } from '../../../models/tag';

@Component({
  selector: 'webpage-tags',
  templateUrl: './webpage-tags.component.html',
  styleUrls: ['./webpage-tags.component.styl']
})

export class WebpageTagsComponent {
  @Input() webpage: any;
  tags: Observable<Tag[]>;
  tag: string;
  private searchTerms = new Subject<string>();
  tags$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private webpageService: WebpageService
  ) { 
    this.tags$ = store.select(enums.getTagsState);
  }

  search(term: string): void {
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
    this.webpageService.addTag(tag.name, this.webpage);
    this.searchTerms.next("");
    this.tag = "";
  }



}
