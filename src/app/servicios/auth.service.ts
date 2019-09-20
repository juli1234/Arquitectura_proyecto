import { Injectable } from '@angular/core';

import  {AngularFireAuth} from "@angular/fire/auth";
import { promise } from 'protractor';
import {Router} from "@angular/router"
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFireAuth:AngularFireAuth, private router: Router) { }

  login(email:string, password:string){

    return new Promise((resolve, reject) =>{

      this.AFireAuth.auth.signInWithEmailAndPassword(email, password).then(user=>{

        resolve(user)
        
        
         }).catch(err=>reject(err));
        
    });
 

  
}

logout(){

  this.AFireAuth.auth.signOut().then (() =>{

this.router.navigate(['/login']); 

  } )
}
}