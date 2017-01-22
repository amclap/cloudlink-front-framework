import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { MenuAdmin } from './shared/menu-admin.model';
// import { MenuAdminService } from './shared/menu-admin.service';

@Component({
	selector: 'jas-menu-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./menu-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [MenuAdminService]
})

export class MenuAdminComponent implements OnInit {
	// menuAdmin: MenuAdmin[] = [];
	//private menuAdminService: MenuAdminService
	constructor() { }

	ngOnInit() {
		// this.menuAdminService.getList().subscribe((res) => {
		// 	this.menuAdmin = res;
		// });
	}
}