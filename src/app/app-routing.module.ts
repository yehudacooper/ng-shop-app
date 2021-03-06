import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './comps/home-page/home-page.component';
import { LightingCandlesListComponent } from './comps/lighting-candles-list/lighting-candles-list.component';
import { ChanukiaListComponent } from './comps/chanukia-list/chanukia-list.component';
import { SingleitemComponent } from './comps/singleitem/singleitem.component';
import { MyCartComponent } from './comps/my-cart/my-cart.component';
import { CheckOutComponent } from './comps/check-out/check-out.component';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { KidushComponent } from './comps/kidush/kidush.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { SigninComponent } from './comps/signin/signin.component';
import { KeepcontactComponent } from './comps/keepcontact/keepcontact.component';


const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'lightingsticks',component:LightingCandlesListComponent},
  {path:'chanukialist',component:ChanukiaListComponent},
  {path:'singleitem/:id' ,component:SingleitemComponent},
  {path:'shoppingcart/:id',component:MyCartComponent},
  {path:'shoppingcart',component:MyCartComponent},
  {path:'singleitem' ,component:SingleitemComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'chanukia',component:ChanukiaListComponent},
  {path:'kidush',component:KidushComponent},
  {path:'pathnotfind',component:PageNotFoundComponent},
  {path:'signup',component:SigninComponent},
  {path:'keepcontact',component:KeepcontactComponent},



  { path:'', redirectTo:'home', pathMatch: 'full'},
  { path:'**', redirectTo:'pathnotfind', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
