import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { EnterpriseAdmin } from './shared/enterprise-admin.model';
// import { EnterpriseAdminService } from './shared/enterprise-admin.service';

@Component({
	selector: 'jas-enterprise-admin',
	encapsulation: ViewEncapsulation.None,
	template: require('./enterprise-admin.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [EnterpriseAdminService]
})

export class EnterpriseAdminComponent implements OnInit {
	// enterpriseAdmin: EnterpriseAdmin[] = [];
	//private enterpriseAdminService: EnterpriseAdminService
	constructor() { }

	ngOnInit() {
		// this.enterpriseAdminService.getList().subscribe((res) => {
		// 	this.enterpriseAdmin = res;
		// });
	}
}