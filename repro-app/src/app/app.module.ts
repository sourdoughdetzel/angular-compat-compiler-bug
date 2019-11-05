import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestOneModule, TestTwoModule } from "test-package";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestOneModule,
    TestTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
