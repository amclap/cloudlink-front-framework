import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { FunctionPrivilege } from './shared/function-privilege.model';
// import { FunctionPrivilegeService } from './shared/function-privilege.service';

@Component({
	selector: 'jas-function-privilege',
	encapsulation: ViewEncapsulation.None,
	template: require('./function-privilege.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [FunctionPrivilegeService]
})

export class FunctionPrivilegeComponent implements OnInit {
	// functionPrivilege: FunctionPrivilege[] = [];
	// private functionPrivilegeService: FunctionPrivilegeService
	constructor() { }

	ngOnInit() {
		// this.functionPrivilegeService.getList().subscribe((res) => {
		// 	this.functionPrivilege = res;
		// });
	}
}