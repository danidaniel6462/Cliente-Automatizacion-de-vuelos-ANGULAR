export class UsuarioActivo {
    id: number;
    nombre: string;
    token: string;
    apellido: string;
    username: string;
    correo: string;
    
    constructor(id: number, nombre: string, apellido: string, username: string, correo: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.username = username;
    }
}