import { Component, OnInit, ɵConsole } from '@angular/core';
import { Boleto } from 'src/app/models/boleto';
import { ProxyService } from 'src/app/acceso/proxy.service';
import * as moment from 'moment'

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent implements OnInit {

  public boletoPost: Boleto = new Boleto();
  public fechaDatePicker;
  public flagAlert = false;
  public mensajeForm = "Éxito! Su solicitud de viaje se ha enviado correctamente";


  constructor(private proxy: ProxyService) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.boletoPost.fechaViaje = new Date(this.fechaDatePicker.year, this.fechaDatePicker.month, this.fechaDatePicker.day);
    this.boletoPost.fechaSolicitud = new Date();
    this.boletoPost.horaSolicitud = moment(Date.now()).format("HH:mm");
    this.boletoPost.estado = "NUEVO";

    this.proxy.postPublico('boleto', this.boletoPost).subscribe(
      result => {
        console.log('Post realizado correctamente', result);
        this.boletoPost = new Boleto();
        this.flagAlert = true;
        setTimeout(() => {
          this.mensajeForm = "Éxito! Su solicitud de viaje se ha enviado correctamente";
          this.flagAlert = false;
        }, 2000);
      },
      error => {
        setTimeout(() => {
          this.mensajeForm = "No hemos podido realizar tu requermiento, lo sentimos";
          this.flagAlert = false;
        }, 2000);
      }
    );
  }

}
