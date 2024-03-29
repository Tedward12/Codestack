import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescComponent } from './product-desc/product-desc.component';


const routes: Routes = [
  {path: '', redirectTo: 'productList', pathMatch: 'full'},
  {path: 'productList', component: ProductListComponent},
  {path: ':productName/:id', component: ProductDescComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }