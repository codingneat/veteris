import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as enums  from '../enums.actions';
import { EnumsService }  from '../enums.service';
//import { SocketService }    from '../../../core/services';


@Component({
  selector: 'tags-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Output() tagSelected = new EventEmitter();
  connection;
  tags$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>, 
    private enumService: EnumsService) {
    this.tags$ = store.select(enums.getTagsState);
  }


  getItemName(index, item) {
    return item.name;
  }

  delete(id, index) {
    this.enumService.deleteTag(id);
    this.store.dispatch(new enums.removeTag(index));
  }

  ngOnInit() {
     this.connection =  this.getMessage();
  }

  getMessage() {
   // return this.socketService.getSocket();
  }

 /* getMessag2() {
      return this.socketService
          .fromEvent<any>("newTweet")
          .map(data => data );
  }  */
    

  edit(tag) {
    this.tagSelected.emit(tag);
  }


}
