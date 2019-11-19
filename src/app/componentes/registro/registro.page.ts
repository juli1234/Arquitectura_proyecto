import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { auth } from 'firebase';
import  {AngularFireAuth} from "@angular/fire/auth";
import { AuthService } from "../../servicios/auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public  email : string;
  public  name : string;
  public password : string;

  constructor(private AFireAuth:AuthService, private router: Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.AFireAuth.register(this.email, this.password,this.name).then( auth => {
      this.router.navigate(['tabs/tab1'])
      console.log(auth)
    }).catch(err => console.log(err))
  }

  
}
