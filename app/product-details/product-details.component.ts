import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:string
  constructor(public url: ActivatedRoute) {
    this.product = this.url.snapshot.paramMap.get('product');
   }

  ngOnInit() {
  }

}
