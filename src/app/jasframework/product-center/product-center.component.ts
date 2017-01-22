import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProductCenter } from './shared/product-center.model';
// import { ProductCenterService } from './shared/product-center.service';

@Component({
	selector: 'jas-product-center',
	encapsulation: ViewEncapsulation.None,
	// styles: [require('./dashboard.scss')],
	template: require('./product-center.component.html'),
	// providers: [ProductCenterService]
})

export class ProductCenterComponent implements OnInit {
	// productCenter: ProductCenter[] = [];

	constructor() { }

	ngOnInit() {
		// this.productCenterService.getList().subscribe((res) => {
		// 	this.productCenter = res;
		// });
	}
}