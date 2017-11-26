import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FiliaisComponent } from './filial/filiais.component';
import { FilialService } from './filial/filial.service';
import { FilialFormComponent } from './filial/filial-form/filial-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FiliaisComponent,
    FilialFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ FilialService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
