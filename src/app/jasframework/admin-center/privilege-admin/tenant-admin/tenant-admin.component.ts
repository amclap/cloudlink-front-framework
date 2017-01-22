import { Component, OnInit } from '@angular/core';

// import { TenantAdmin } from './shared/tenant-admin.model';
// import { TenantAdminService } from './shared/tenant-admin.service';

@Component({
	selector: 'jas-tenant-admin',
	templateUrl: 'tenant-admin.component.html',
	// providers: [TenantAdminService]
})

export class TenantAdminComponent implements OnInit {
	// tenantAdmin: TenantAdmin[] = [];
	//private tenantAdminService: TenantAdminService
	constructor() { }

	ngOnInit() {
		// this.tenantAdminService.getList().subscribe((res) => {
		// 	this.tenantAdmin = res;
		// });
	}
}