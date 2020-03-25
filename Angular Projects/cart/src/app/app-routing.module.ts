import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { AddToCartComponent } from './views/add-to-cart/add-to-cart.component';


const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'cart', component: AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
