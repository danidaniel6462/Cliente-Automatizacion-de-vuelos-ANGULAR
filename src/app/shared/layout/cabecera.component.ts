import { LocalStorageDBService } from 'src/app/services/local-storage-db.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  public nombreUsuario: string;

  ngOnInit() {

    if(this.localStorageServicio.obtenerLocalStorage('USUARIOACTIVO') != undefined){
      this.nombreUsuario = JSON.parse(JSON.stringify(this.localStorageServicio.obtenerLocalStorage('USUARIOACTIVO'))).nombre;
    }

  }

  constructor(changeDetectorRef: ChangeDetectorRef,
    private localStorageServicio: LocalStorageDBService
  ) {
    
  }
}
