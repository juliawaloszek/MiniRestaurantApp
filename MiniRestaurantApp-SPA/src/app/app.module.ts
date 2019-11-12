import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSlickgridModule  } from 'angular-slickgrid';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { RestaurantService } from './_services/restaurant.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      TranslateModule.forRoot(),
      AngularSlickgridModule.forRoot(),
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatTabsModule,
      NoopAnimationsModule,
      NgxPaginationModule
   ],
   providers: [
      RestaurantService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
