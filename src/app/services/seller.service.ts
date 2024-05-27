
import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; 
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  //The isSellerLoggedIn property is a BehaviorSubject which is appropriate for representing 
  //the login state that can be observed by other components or services, including the guard.
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router,private authService: AuthService) { }
  userSignUp(data:SignUp){
    this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.authService.setSellerLoggedIn(true);
        this.router.navigate(['/sellerhome'])
      }
    })
  } 
  reloadSeller(){
    if(localStorage.getItem('seller')){

      console.log('Reloading seller...'); // Debug statemen
      this.authService.setSellerLoggedIn(true);
      this.router.navigate(['/sellerhome']).then(() => {
        console.log('Navigation to sellerhome successful'); // Debug statement
      }).catch(err => {
        console.error('Navigation to sellerhome failed', err); // Debug statement
      });
     
    }
  }
  userLogin(data:login){
   this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result);
    if(result && result.body && result.body.length===1){
      this.isLoginError.emit(false)
      localStorage.setItem('seller',JSON.stringify(result.body[0]))
      this.authService.setSellerLoggedIn(true);
      this.router.navigate(['sellerhome']).then(() => {
        console.log('Navigation to sellerhome successful'); // Debug statement
      }).catch(err => {
        console.error('Navigation to sellerhome failed', err); // Debug statement
      });
     
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }
}
  