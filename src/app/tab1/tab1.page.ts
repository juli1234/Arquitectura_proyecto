import { Component } from '@angular/core';
import {AuthService} from "../servicios/auth.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public authservices:AuthService) {}

  Onlogout(){  
this.authservices.logout();  


  }

}
