import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as users from '../users.actions';
import { UserService } from '../user.service';


@Component({
  selector: 'users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.styl']
})
export class UserListComponent {
  users$: Observable<any[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private userService: UserService,
  ) {
    this.users$ = store.select(users.getUsersState);
  }


  getItemName(index, item) {
    return item.name;
  }

  delete(id, index) {
    //this.userService.delete(id).then(this.ngRedux.dispatch(this.actions.removeUser(index)));
  }


  ngOnInit() {
    return this.store.dispatch({ type: users.LOAD_USERS });
  }
}
