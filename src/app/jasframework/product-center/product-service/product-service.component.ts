import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProductService } from './shared/product-service.model';
// import { ProductServiceService } from './shared/product-service.service';

@Component({
	selector: 'jas-product-service',
	encapsulation: ViewEncapsulation.None,
	template: require('./product-service.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [ProductServiceService]
})

export class ProductServiceComponent implements OnInit {
	// productService: ProductService[] = [];

	constructor() { }

	ngOnInit() {
		// this.productServiceService.getList().subscribe((res) => {
		// 	this.productService = res;
		// });
	}
}