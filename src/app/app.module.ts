import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TemplateComponent } from './template/template.component';
import { CabeceraComponent, FooterComponent } from './shared';
import { IndexComponent } from './components/index/index.component';
import { BoletosComponent } from './components/boletos/boletos.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { ProxyService } from './acceso/proxy.service';
import { Autorizacion } from './acceso/autorizacion.service';
import { ProxyLogin } from './acceso/proxy-login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    CabeceraComponent,
    FooterComponent,
    IndexComponent,
    BoletosComponent,
    ReservarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDatepickerModule,
    MDBBootstrapModule.forRoot()  ],
  providers: [ProxyService, ProxyLogin, Autorizacion],
  bootstrap: [AppComponent]
})
export class AppModule { }
