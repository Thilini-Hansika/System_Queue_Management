import { TranslateService } from './../../translate.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-welcom-page',
  templateUrl: './welcom-page.component.html',
  styleUrls: ['./welcom-page.component.css']
})
export class WelcomPageComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
  }

  setLang(lang: string) {
    this.translate.use(lang);
  

}

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
