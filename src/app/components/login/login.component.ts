import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { ProxyLogin } from 'src/app/acceso/proxy-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();

  constructor(private proxy: ProxyLogin) { }

  ngOnInit() {}

  public onSubmit() {
    console.log(this.login);
    this.proxy.login(this.login);
  }
}
