import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth"
import { auth } from 'firebase';
import {map} from "rxjs/operators"
import { isNullOrUndefined } from 'util';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AFauth: AngularFireAuth,private route:Router ){}

  canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

return this.AFauth.authState.pipe(map(auth=>{

  if(isNullOrUndefined(auth)){
    this.route.navigate(['/login']);
    return false;

  }else{  return true;}
  
  //console.log(auth);
   //return false;

}))



}


  
  
}
