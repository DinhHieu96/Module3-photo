import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoCreateComponent } from './photo-create/photo-create.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoDeleteComponent } from './photo-delete/photo-delete.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoCreateComponent,
    PhotoEditComponent,
    PhotoDeleteComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
