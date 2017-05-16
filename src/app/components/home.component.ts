import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './counter';


export interface CounterState {
  counter: number;
}

@Component({
    templateUrl: './home.component.html',
})

export class HomeComponent {
    counter: Observable<number>;

   	constructor(private store: Store<CounterState>){
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}

}
