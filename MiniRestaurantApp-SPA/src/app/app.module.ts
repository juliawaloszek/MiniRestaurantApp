import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSlickgridModule  } from 'angular-slickgrid';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';

@NgModule({
   declarations: [
      AppComponent,
      TestComponentComponent,
      GridBasicComponent
   ],
   imports: [
      TranslateModule.forRoot(),
      AngularSlickgridModule.forRoot(),
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
