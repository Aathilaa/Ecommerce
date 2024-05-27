import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seller-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers:[ProductService],
  templateUrl: './seller-add.component.html',
  styleUrl: './seller-add.component.css'
})
export class SellerAddComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductService) {}
  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}
