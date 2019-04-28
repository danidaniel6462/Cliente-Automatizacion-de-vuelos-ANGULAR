export class UsuarioToken {
    token: string;
    username: string;
    
    constructor(username: string, token: string) {
        this.username = username;
        this.token = token;
    }
}