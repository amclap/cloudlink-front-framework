import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
	selector: 'jas-admin-center',
	encapsulation: ViewEncapsulation.None,
	template: require('./admin-center.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [ProductCenterService]
})
export class AdminCenterComponent implements OnInit {
	constructor() { }
	ngOnInit() {

	}
}