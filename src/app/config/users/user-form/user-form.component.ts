import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as users  from '../users.actions';
import { User } from '../../../models/user'
import { UserService }  from '../user.service';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit  {
  userForm: FormGroup; // <--- userForm is of type FormGroup
  user: User;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private store: Store<fromRoot.AppState>,
    private router: Router,
    private route: ActivatedRoute) { // <--- inject FormBuilder
      this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required ], // <--- the FormControl called "firstName"
      lastName: '', 
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });

  }

  onSubmit() {
    const userSubmit:User = this.prepareSaveUser();
    if(!userSubmit._id) {
      delete userSubmit["_id"];
      this.userService.create(userSubmit);
    }else{
      this.userService.update(userSubmit);
    }
    
    this.router.navigate(['/config/users']);
  }

  prepareSaveUser(): User {
     const formModel = this.userForm.value;
     const SaveUser: User = {
      _id: this.user ? this.user._id : "",
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      email: formModel.email,
      password: formModel.password,
    };
    return SaveUser;
  }

  revert(){
    this.userForm.setValue({
      firstName: this.user ? this.user.firstName : "",
      lastName: this.user ? this.user.lastName : "",
      email: this.user ? this.user.email : "",
      password: this.user ? this.user.password : "",
    });
  }


  ngOnInit() {
    if(this.route.snapshot.params['id']){
     
      this.route.params
        .switchMap((params: Params) => this.userService.getUser(params['id']))
        .subscribe((user: User) => {
          this.user = user;   
          this.userForm.setValue({
            firstName: this.user.firstName,
            lastName:  this.user.lastName,
            email:  this.user.email,
            password: this.user.password
          });
        });
    }
  }



}
