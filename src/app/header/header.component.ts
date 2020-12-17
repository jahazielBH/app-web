import { Component, OnInit } from '@angular/core';
import { StorageService } from "../services/storage.service";
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    public storageService: StorageService) { }

  ngOnInit(): void {
  }

  logout() {
    // remove user from local storage
    this.storageService.localDeleteByKey("token");
    this.router.navigate(['']);
  }
}
