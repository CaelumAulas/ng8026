import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmailHeaderComponent } from './components/cmail-header/cmail-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CmailHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
