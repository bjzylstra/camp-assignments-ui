import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For NgModel

import { AppComponent } from './app.component';
import { CampEditorComponent } from './camp-editor/camp-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CampEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // For binding to NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
