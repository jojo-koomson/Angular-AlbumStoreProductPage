import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	id:number;
	artistName:string;
	albumName:string;

	private products: Product[];


  constructor(private _productService: ProductService) { }

  ngOnInit() {
  	 this._productService.getProduct().subscribe(response => this.albumInfo = response);

  }

}
