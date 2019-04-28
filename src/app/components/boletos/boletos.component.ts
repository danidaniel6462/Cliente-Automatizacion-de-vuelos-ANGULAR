import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProxyService } from 'src/app/acceso/proxy.service';
import { Router } from '@angular/router';
import { LocalStorageDBService } from 'src/app/services/local-storage-db.service';
import { Boleto } from 'src/app/models/boleto';
import * as moment from 'moment'
import { UsuarioActivo } from 'src/app/models/usuarioActivo';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.scss']
})
export class BoletosComponent implements OnInit {

  constructor(private proxy: ProxyService, private router: Router, private localStorage: LocalStorageDBService) { }

  public listaBoletos: any = new Array<Boleto>();
  public listaBoletosFiltrados: any = new Array<Boleto>();
  public estadoCambiante = "NUEVO";
  public estadosParaFiltro = [ 
    {clave: "NUEVO", valor: "NUEVO" },
    {clave: "RESERVADO", valor: "RESERVADO" }
  ]

  ngOnInit() {
    this.todos();
  }

  public todos() {
    this.proxy.get("boleto").subscribe(res => {
      this.listaBoletos = res;
      this.listaBoletosFiltrados = this.listaBoletos.filter(b => b.estado == this.estadoCambiante);
    });
  }

  public actualizarListaBoletosFiltrado(datoSelectCambio){
    this.estadoCambiante = datoSelectCambio;
    this.listaBoletosFiltrados = this.listaBoletos.filter(b => b.estado == this.estadoCambiante);
  }

  public reservarBoletoViaje(boleto: Boleto){
    boleto.fechaReserva = new Date();
    boleto.horaReservado = moment(Date.now()).format("HH:mm");
    boleto.estado = "RESERVADO";
    //boleto.usuarioActualizaId = (this.localStorage.obtenerLocalStorage("USUARIOACTIVO") as UsuarioActivo).id;
    this.proxy.post("boleto/actualizarBoletoObtenerLista", boleto).subscribe(res => {
      this.listaBoletos = res.body;
      this.listaBoletosFiltrados = this.listaBoletos.filter(b => b.estado == this.estadoCambiante);
      console.log("this.listaBoletosFiltrados ", this.listaBoletosFiltrados);
    });
  }
}
