import { Component } from '@angular/core';
import { Role, User } from './models';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }

  get isAdmin() {
      return this.user && this.user.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }
}
