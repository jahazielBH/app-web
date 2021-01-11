import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-web';
  roles: string[];
  authority: string;
  
  constructor(public tokenStorage: TokenStorageService) { }
 
  ngOnInit() {
    if (this.tokenStorage.isUserLoggedIn()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
        }
        this.authority = 'user';
      });
    }
  }
}
