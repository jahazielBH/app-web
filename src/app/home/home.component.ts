import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private ruta: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
     // id: this.token.getId()
    };
    this.ruta.navigate(['/']);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
