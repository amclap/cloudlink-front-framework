import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { OrgAdmin } from './shared/org-admin.model';
// import { OrgAdminService } from './shared/org-admin.service';

@Component({
	selector: 'jas-org-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./org-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [OrgAdminService]
})

export class OrgAdminComponent implements OnInit {
	// orgAdmin: OrgAdmin[] = [];
	//private orgAdminService: OrgAdminService
	constructor() { }

	ngOnInit() {
		// this.orgAdminService.getList().subscribe((res) => {
		// 	this.orgAdmin = res;
		// });
	}
}