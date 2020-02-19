import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CateringComponent } from './pages/catering/catering.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { PhotosComponent } from './pages/photos/photos.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'catering', component:CateringComponent},
  {path:'menu', component:MenuComponent},
  {path:'about', component:AboutComponent},
  {path:'photos', component:PhotosComponent},
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
