import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component'
import {PagenotfoundcomponentComponent} from './pagenotfoundcomponent/pagenotfoundcomponent.component'


const routes: Routes = [
  {path: 'alpha', component:AlphaComponent},
  {path: 'beta', component:PagenotfoundcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
