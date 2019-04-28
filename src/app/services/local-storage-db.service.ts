import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDBService {

  constructor() { }

  public obtenerLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key));
  }

  public enviarLocalStorage(key: string, dato: any){
    localStorage.setItem(key, JSON.stringify(dato));
  }

  public eliminarDatoLocalStorage(key: string){
    localStorage.removeItem(key);
  }

  public limpiarLocalStorage(){
    localStorage.clear();
  }
}
