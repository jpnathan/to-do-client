import { Component, OnInit } from '@angular/core';
import { IUser } from '../contracts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public user: IUser;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('_auth_token')) {
      this.router.navigate(['/login']);
      return false;
    }

    this.user = JSON.parse(localStorage.getItem('_auth_content'));
    this.router.navigate(['/projects']);
  }

  public logout() {
    localStorage.removeItem('_auth_token');
    localStorage.removeItem('_auth_content');
  }

}
