import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '../auth.service'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(private _service:AuthService) { }

  ngOnInit() {
      this._service.checkCredentials();
  }
logout() {
        this._service.logout();
    }
}
