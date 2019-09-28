import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TheCakeComponent } from './the-cake/the-cake.component';
import { AlphaComponent } from './alpha/alpha.component'
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component'


@NgModule({
  declarations: [
    AppComponent,
    TheCakeComponent,
    AlphaComponent,
    PagenotfoundcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
