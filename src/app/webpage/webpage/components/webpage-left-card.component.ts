import { Component, Input} from '@angular/core';
import { WebpageService }  from '../../webpage.service';


@Component({
  selector: 'webpage-left-card ',
  templateUrl: './webpage-left-card.component.html',
  styleUrls: [ './webpage-left-card.component.scss' ]
})

export class WebpageLeftCardComponent{
  @Input() webpage: any;
  points: Number;
  grade: String;
  favourite: Boolean;

  constructor(
    private webpageService: WebpageService
  ) {}


  changePertinence() {
    this.webpageService.updatePertinence(this.points,this.webpage);
  }

  changeGrade() {
    this.webpageService.updateGrade(this.grade,this.webpage);
  }

  changeFavourite() {
    this.webpageService.updateFavourite(this.favourite,this.webpage);
  }

  ngOnChanges(...args: any[]) {
    if(args[0].webpage.currentValue._id != undefined) {
      this.points = args[0].webpage.currentValue.pertinence.length == 0 ? -1 : args[0].webpage.currentValue.pertinence[0].points;
      this.grade =  args[0].webpage.currentValue.grade.length == 0 ? "" : args[0].webpage.currentValue.grade[0].status;
      this.favourite = args[0].webpage.currentValue.favourite.length == 0 ? false : args[0].webpage.currentValue.favourite[0].fav;
    }
  }
}
