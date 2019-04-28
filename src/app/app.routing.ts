import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateComponent } from 'src/app/template/template.component';
import { IndexComponent } from './components/index/index.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { BoletosComponent } from './components/boletos/boletos.component';

const routes: Routes = [
  { path: '', redirectTo: 'Index', pathMatch: 'full' },
  { path: 'Home', component: AppComponent },
  { path: 'Index', component: IndexComponent },
  { path: 'Reservar', component: ReservarComponent },
  { path: 'Ingresar', component: LoginComponent },
  { path: 'Boleto', component: BoletosComponent },
  {
    path: 'compania', component: TemplateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
