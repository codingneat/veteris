import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params }   from '@angular/router';
/*
import { WebpagesActions } from '../webpages.actions'; */


@Component({
  selector: 'webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent {

  constructor(    
    private route: ActivatedRoute) {
  }

  //@select(['webpages', 'webpage', 'webpage']) readonly webpage$: Observable<any[]>


  ngOnInit() {
   /*  this.route.params
      .subscribe((params: Params) => this.ngRedux.dispatch(this.actions.loadWebpage((params['id']))));*/
  } 


}
