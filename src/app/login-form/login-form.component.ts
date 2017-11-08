import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '../auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    
     public user = new User('','');
    public errorMsg = '';

  constructor( private _service:AuthService) { }

  ngOnInit() {
      this._service.checkCredentials();
  }

login() {
   
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}
