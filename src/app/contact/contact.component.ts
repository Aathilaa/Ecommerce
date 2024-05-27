import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: String='';
  email: string='';
  address: string='';
constructor(private router:Router){}
onSubmit(){
alert('Message send Successfully')
this.router.navigate(['/home'])
}
}
