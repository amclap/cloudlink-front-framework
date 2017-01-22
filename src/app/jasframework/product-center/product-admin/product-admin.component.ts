import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { ProductAdmin } from './shared/product-admin.model';
// import { ProductAdminService } from './shared/product-admin.service';

@Component({
	selector: 'jas-product-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./product-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [ProductAdminService]
})

export class ProductAdminComponent implements OnInit {
	// productAdmin: ProductAdmin[] = [];
	//private productAdminService: ProductAdminService
	constructor() { }

	ngOnInit() {
		// this.productAdminService.getList().subscribe((res) => {
		// 	this.productAdmin = res;
		// });
	}
}