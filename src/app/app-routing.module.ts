import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { MySecoundComponentComponent } from './my-secound-component/my-secound-component.component';

const routes: Routes = [
  {
      path: 'one',
      component: MyFirstComponentComponent,
  },  
  {
    path: 'secound',
    component: MySecoundComponentComponent,
}, 
  {path:'**', redirectTo:'one', pathMatch:'full'}
];


@NgModule({
  declarations: [],
  imports: [BrowserModule,CommonModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
