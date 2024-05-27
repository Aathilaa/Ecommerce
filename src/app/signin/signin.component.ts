import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignUp ,login} from '../data-type';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers: [SellerService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  showLogin=false;
  authError:string='';
constructor(private seller:SellerService,private router:Router){}
ngOnInit() {
  console.log('SigninComponent initialized'); 
this.seller.reloadSeller()
}
  signUp(data:SignUp):void{
    console.log('SignUp data:', data);
  this.seller.userSignUp(data);
  console.log(data)
  };
  login(data: login): void {
    console.log('Login data:', data); // Debug statement
    //console.warn(data)
    this.authError="";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
this.authError="Email or Password is not correct";
console.warn(this.authError); // Debug statement
      }
    })
  }
  openLogin(){
    this.showLogin=true;
    console.log('Switched to login view'); // Debug statement
  }
  openSignUp(){
    this.showLogin=false
    console.log('Switched to sign-up view'); // Debug statement
  }
}

