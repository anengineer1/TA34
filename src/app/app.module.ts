import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsMod

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentCalculatorComponent } from './my-component-calculator/my-component-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentCalculatorComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
