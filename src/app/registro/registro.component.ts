import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { UserApiRe } from "../models/userapire";
import { Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  result = '';
  name ='';
  username = '';
  email = '';
  password = '';
 
  constructor(
    private router: Router,
    private usersService: UsersService,
  ) { }
 
  registrar() {
    let myresult = 'token here !!!';

    var mydata = new UserApiRe;
    

    if (this.username == "" || this.password == "" || this.name=="" || this.email=="") {
     
      alert('Datos requeridos');

    } else {
      this.router.navigate(['/landing-page']);
      mydata.name = this.name;
      mydata.username = this.username;
      mydata.password = this.password;
      mydata.email = this.email;
      mydata.role = [];
      mydata.role.push("user");
      
      return this.usersService.signup(mydata)
      
      .subscribe((data: any) => {
        
        this.result = 'Cuenta Creada con Exito';
        alert('Cuenta Creada con Exito');
      })

    }
    
    this.result = myresult;
  }

  ngOnInit(): void {
  }


}
