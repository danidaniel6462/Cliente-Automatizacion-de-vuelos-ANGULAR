import { UsuarioActivo } from 'src/app/models/usuarioActivo';
import { LocalStorageDBService } from 'src/app/services/local-storage-db.service';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { UsuarioToken } from '../models/usuarioToken';

@Injectable()
export class Autorizacion {

    constructor(
        private localStorage: LocalStorageDBService
    ) { }

    public autorizacion(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
            .set('Authorization', "Bearer " + this.obtenerUsuarioBibliotecarioActivo().token);
    }

    private obtenerUsuarioBibliotecarioActivo() : UsuarioToken{
        return this.localStorage.obtenerLocalStorage('USUARIOTOKEN');
    }

}