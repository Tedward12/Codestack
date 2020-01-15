import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { CartCountComponent } from './landing/component/cart-count/cart-count.component';
import { CartListComponent } from './landing/component/cart-list/cart-list.component';



@NgModule({
  declarations: [LandingComponent, CartCountComponent, CartListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ]
})
export class ViewsModule { }
