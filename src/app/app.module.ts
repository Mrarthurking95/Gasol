import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/servicios/menu.service';
import { TanquearComponent } from './tanquear/tanquear.component';
import { TanquearService } from './tanquear/servicios/tanquear.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/servicios/login.service';
import { BuscadorComponent } from './buscador/buscador.component';
import { PagarComponent } from './pagar/pagar.component';
import { SaldodisComponent } from './saldodis/saldodis.component';
import { TipogasComponent } from './tipogas/tipogas.component';
import { TransexitComponent } from './transexit/transexit.component';
import { HistotransComponent } from './histotrans/histotrans.component';

const appRoutes: Routes = [
{path:'tanquear',component: TanquearComponent},

];
@NgModule({
  imports:      [ BrowserModule, FormsModule,   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent, HelloComponent, MenuComponent, TanquearComponent, LoginComponent, BuscadorComponent, PagarComponent, SaldodisComponent, TipogasComponent, TransexitComponent, HistotransComponent],
  bootstrap:    [ AppComponent ],
  providers: [MenuService, TanquearService, LoginService]
})
export class AppModule { }
