import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerService } from './services/seller.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SellerAddComponent,SellerhomeComponent,SigninComponent,HttpClientModule,CommonModule,FormsModule,HeaderComponent,ProductComponent,HomeComponent,ContactComponent,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [SellerService, AuthService,ProductService],
})
export class AppComponent {
  title = 'NostraS';
}
