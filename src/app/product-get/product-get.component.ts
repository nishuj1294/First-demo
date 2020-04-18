import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: any
  constructor(private service:ProductsService) {
    // this.products = service.getProducts();
  }
  title = 'Angular Example';
  


    ngOnInit() {
      this.products = this.service.getProducts();
    }
  }

