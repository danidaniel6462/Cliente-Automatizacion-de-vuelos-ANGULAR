import { Autorizacion } from './autorizacion.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageDBService } from 'src/app/services/local-storage-db.service';

@Injectable()
export class ProxyService {

  public url: string = 'http://localhost:8087/api/';
  constructor(
    private http: HttpClient,
    private autorizacion: Autorizacion,
    public localStorage:LocalStorageDBService
  ) { }
  get(entidad: string) {
    return this.http.get(this.url + entidad, { headers: this.autorizacion.autorizacion() });
  }
  getId(entidad: string, id: number) {
    return this.http.get(this.url + entidad + "/" + id, { headers: this.autorizacion.autorizacion()});
  }
  post(entidad: string, objeto: object) {
    return this.http.post(this.url + entidad, objeto, { headers: this.autorizacion.autorizacion(), observe: 'response' });
  }
  put(entidad: string, id: number, objeto: object) {
    return this.http.put(this.url + entidad + "/" + id, objeto, { headers: this.autorizacion.autorizacion() });
  }
  delete(entidad: string, id: number) {
    return this.http.delete(this.url + entidad + "/" + id, { headers: this.autorizacion.autorizacion() });
  }
  postPublico(entidad: string, objeto: object) {
    return this.http.post(this.url + entidad, objeto);
  }
}