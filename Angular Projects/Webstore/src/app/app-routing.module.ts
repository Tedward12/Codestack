import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { ApricornsComponent } from './views/pages/apricorns/apricorns.component';
import { CartComponent } from './views/pages/cart/cart.component';
import { HealingItemsComponent } from './views/pages/healing-items/healing-items.component';
import { MiscItemsComponent } from './views/pages/misc-items/misc-items.component';
import { PokeballsComponent } from './views/pages/pokeballs/pokeballs.component';
import { VitaminsComponent } from './views/pages/vitamins/vitamins.component';
import { XItemsComponent } from './views/pages/x-items/x-items.component';
import { LandingComponent } from './views/pages/landing/landing.component';
import { SignUpComponent } from './views/pages/sign-up/sign-up.component';
import { CheckoutComponent } from './views/pages/checkout/checkout.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'apricorns', component: ApricornsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'healing-items', component: HealingItemsComponent },
  { path: 'misc-items', component: MiscItemsComponent },
  { path: 'pokeballs', component: PokeballsComponent },
  { path: 'vitamin', component: VitaminsComponent },
  { path: 'x-items', component: XItemsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: '/landing',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
