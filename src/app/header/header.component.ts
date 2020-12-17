import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storageService: StorageService,public usersService: UsersService) { }

  ngOnInit(): void {
  }

  logout() {
    // remove user from local storage
    this.storageService.localDeleteByKey("token");
  }
}
