import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UsersService } from "../services/users.service";
import { UserApi } from "../models/usersapi";
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result = '';
  username = '';
  password = '';

  constructor(
    private router: Router,
    private usersService: UsersService,
    private storageService: StorageService
  ) { }
  
ir(){
  this.router.navigate(['/mapa']);
  return true;
}

  ngOnInit(): void {
  }


  addition() {
    let myresult = 'token here !!!';

    var mydata = new UserApi;
    

    if (this.username == "" || this.password == "") {

      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {

      mydata.username = this.username;
      mydata.password = this.password;
      
      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {
          this.router.navigate(['/mapa']);
          this.storageService.setLocal("token", data.accessToken);
          this.result = data.accessToken;
          //alert(data.accessToken);

        })

    }

    this.result = myresult;
  }

}
