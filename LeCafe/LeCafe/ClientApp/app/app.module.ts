import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuPrincipalComponent } from './restaurant/menu-principal/menu-principal.component';
import { DesayunosComponent } from './desayunos/desayunos.component';
import { EntradasComponent } from './entradas/entradas.component';
import { HttpClientModule } from '@angular/common/http';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CafesComponent } from './bebidas/cafes/cafes.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';
import { FacturaComponent } from './factura/factura.component';
import { FormsModule } from "@angular/forms";
import { JugosComponent } from './bebidas/jugos/jugos.component';
import { VinosComponent } from './bebidas/vinos/vinos.component';
import { LicoresComponent } from './bebidas/licores/licores.component';
import { DesayunoComponent } from './desayunos/desayuno/desayuno.component';
import { PancakesComponent } from './desayunos/pancakes/pancakes.component';
import { SandwichesComponent } from './desayunos/sandwiches/sandwiches.component';
import { DesayunosCenasComponent } from './desayunos-cenas/desayunos-cenas.component';
import { PastasComponent } from './desayunos-cenas/pastas/pastas.component';
import { HamburguesasComponent } from './desayunos-cenas/hamburguesas/hamburguesas.component';
import { EnsaladasComponent } from './desayunos-cenas/ensaladas/ensaladas.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    MenuPrincipalComponent,
    DesayunosComponent,
    EntradasComponent,
    BebidasComponent,
    CafesComponent,
    OrderComponent,
    CartComponent,
    FacturaComponent,
    JugosComponent,
    VinosComponent,
    LicoresComponent,
    DesayunoComponent,
    PancakesComponent,
    SandwichesComponent,
    DesayunosCenasComponent,
    PastasComponent,
    HamburguesasComponent,
   EnsaladasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "userLogin", component: UserLoginComponent},
      {path: "menuPrincipal", component: MenuPrincipalComponent},
      {path: "desayunos", component: DesayunosComponent},
      {path: "entradas", component: EntradasComponent},
      {path: "bebidas", component: BebidasComponent},
      { path: "cafes", component: CafesComponent},
      { path: "jugos", component:JugosComponent},
      { path: "vinos", component: VinosComponent},
      { path: "licores", component: LicoresComponent},
      { path: "desayuno", component: DesayunoComponent},
      { path: "pancakes", component: PancakesComponent},
      { path: "sandwiches", component: SandwichesComponent},
      { path: "almuerzosycenas", component: DesayunosCenasComponent},
      { path: "pastas", component: PastasComponent},
      { path: "hamburguesas", component: HamburguesasComponent},
      { path: "ensaladas", component: EnsaladasComponent},
      { path: "orden", component: OrderComponent},
      { path: "factura", component: FacturaComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
   
    ]),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
      DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
