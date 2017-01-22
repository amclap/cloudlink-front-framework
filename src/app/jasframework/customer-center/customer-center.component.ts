import { Component, OnInit } from '@angular/core';

import { CustomerCenter } from './shared/customer-center.model';
import { CustomerCenterService } from './shared/customer-center.service';

@Component({
	selector: 'customer-center',
	templateUrl: 'customer-center.component.html',
	providers: [CustomerCenterService]
})

export class CustomerCenterComponent implements OnInit {
	customerCenter: CustomerCenter[] = [];

	constructor(private customerCenterService: CustomerCenterService) { }

	ngOnInit() {
		this.customerCenterService.getList().subscribe((res) => {
			this.customerCenter = res;
		});
	}
}