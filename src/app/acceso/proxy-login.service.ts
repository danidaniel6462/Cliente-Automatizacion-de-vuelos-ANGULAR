import { Router } from '@angular/router';
import { UsuarioActivo } from '../models/usuarioActivo';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";
import { LocalStorageDBService } from '../services/local-storage-db.service';
import { Login } from 'src/app/models/login';
import { UsuarioToken } from '../models/usuarioToken';

/**
 * Proxy para realizar el REST dentro de la aplicación
 */

const jwt = new JwtHelperService();

@Injectable()
export class ProxyLogin {

    public baseUrl: string = 'http://localhost:8087';

    /**
     * Constructor 
     * @param http objeto para realizar las llamadas GET, POST, PUT, DELETE
     */
    constructor(
        private http: HttpClient,
        private localStorage: LocalStorageDBService,
        private router: Router
    ) {
        console.log('Inicio conexión Proxy Logín!!!!!!!');
    }

    private guardarUsuarioToken(credenciales: Login, token: string){
        let usuarioActivo: UsuarioToken = new UsuarioToken(credenciales.username, token);
        this.localStorage.enviarLocalStorage('USUARIOTOKEN', usuarioActivo);
    }

    public login(credenciales: Login) {
        console.log(this.baseUrl + "/login", ' de login');
        return this.http.post(this.baseUrl + "/login", credenciales, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json'),
                observe: 'response'
        }).subscribe(
            result => {
                this.guardarUsuarioToken(credenciales, result.headers.get('Authorization'));
                this.obtenerUsuarioRegistrado();
            },
            error => {
                console.error(error, 'no se pudo realizar la autenticación');
                alert('error de credenciales, revise la información enviada. :3')
               // this.guardarTokenAutorizacion(error.error.text);
              //  this.obtenerClaims(error.error.text);
            }
        );
    }

    private obtenerUsuarioRegistrado(){
        var usuarioToken = (this.localStorage.obtenerLocalStorage('USUARIOTOKEN') as UsuarioToken);
        let rutaUsuarioPorUsername = "/api/usuario/obtenerPorUsername?username=" + usuarioToken.username;
        return this.http.get(this.baseUrl + rutaUsuarioPorUsername, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', "Bearer " + usuarioToken.token),
                observe: 'response'
        }).subscribe(
            result => {
                this.guardarUsuarioActivo(result);
                this.iniciarSesion();
            },
            error => {
                console.error(error, 'no se pudo realizar la autenticación');
                alert('error de credenciales, revise la información enviada. :3')
               // this.guardarTokenAutorizacion(error.error.text);
              //  this.obtenerClaims(error.error.text);
            }
        );
    }

    private guardarUsuarioActivo(user){
        let usuarioActivo: UsuarioActivo = new UsuarioActivo(user.id, user.nombres, user.apellidos, user.username, user.correo);
        this.localStorage.enviarLocalStorage('USUARIOACTIVO', usuarioActivo);
    }
    /**
     * @deprecated método que se eliminar posteriormente, cuando se cree el método de usuarioActivo(), ahí se guardará el usuario y el token
     * @param token token obtenido del servicio Login
     */
    public guardarTokenAutorizacion(token: string) {
        this.localStorage.enviarLocalStorage('TOKEN', token);
    }

    private iniciarSesion(){
        this.router.navigate(['/Boleto']);
    }

    private obtenerClaims(res: Response) {
        let token = res.toString();
        //var claims = jwt.decodeToken(token);
        //console.log('claims TOKEN: ', claims);
        this.guardarTokenAutorizacion(token);
    }

    public logout() {
        this.localStorage.limpiarLocalStorage();
        this.router.navigate(['/']);
    }



}