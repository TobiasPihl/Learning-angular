import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router import which lets us navigate between components
import {RouterModule} from '@angular/router';

//Import components
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';

@NgModule({
  declarations: [
    AppComponent, 
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
  ],
  imports: [
    BrowserModule,

    //The router module import
    RouterModule.forRoot([
      {
        path: '',
        component: contentAreaComponent,
      },
      {
        path: 'about',
        component: aboutComponent,
      },
      //{
      //  path: 'contact',
      //  component: contactComponent,
      //},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
