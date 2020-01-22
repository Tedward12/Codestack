import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/header/header.component';
import { HomeComponent } from './views/pages/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { SearchComponent } from './views/pages/search/search.component';
import { DealsComponent } from './views/pages/deals/deals.component';
import { PokeballsComponent } from './views/pages/pokeballs/pokeballs.component';
import { ApricornsComponent } from './views/pages/apricorns/apricorns.component';
import { HealingItemsComponent } from './views/pages/healing-items/healing-items.component';
import { VitaminsComponent } from './views/pages/vitamins/vitamins.component';
import { XItemsComponent } from './views/pages/x-items/x-items.component';
import { MiscItemsComponent } from './views/pages/misc-items/misc-items.component';
import { CartComponent } from './views/pages/cart/cart.component';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ScrollPanelModule} from 'primeng/scrollpanel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    SearchComponent,
    DealsComponent,
    PokeballsComponent,
    ApricornsComponent,
    HealingItemsComponent,
    VitaminsComponent,
    XItemsComponent,
    MiscItemsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    NgbModule,
    PanelModule,
    ToastModule,
    SplitButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
