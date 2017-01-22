import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
	selector: 'platform-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./platform-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [ProductCenterService]

})

export class PlatformAdminComponent implements OnInit {


	constructor() { }

	ngOnInit() {

	}
}