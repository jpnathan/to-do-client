import { Component, OnInit } from '@angular/core';
import { IUser } from '../contracts';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public user: IUser;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('_auth_content'));
  }

  public logout() {
    localStorage.removeItem('_auth_token');
    localStorage.removeItem('_auth_content');
  }

}
