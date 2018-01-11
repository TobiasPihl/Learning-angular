import { Component } from '@angular/core';

import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  styleUrls: ['./style.css']
})
export class AppComponent {
  title = 'app';
}