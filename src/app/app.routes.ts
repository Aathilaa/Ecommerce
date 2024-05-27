import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SellerAddComponent } from './seller-add/seller-add.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'product', component:ProductComponent},
    {path:'contact',component:ContactComponent},
    {path:'signin',component:SigninComponent},
    {path:'sellerhome',component:SellerhomeComponent,
        canActivate:[AuthGuard]
    },{
        path:'**',component:HomeComponent //wildcard routing   
    },
    {path:'seller-add',component:SellerAddComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
