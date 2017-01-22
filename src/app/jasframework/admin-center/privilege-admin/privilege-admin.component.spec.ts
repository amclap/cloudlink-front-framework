import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PrivilegeAdminComponent } from './privilege-admin.component';
import { PrivilegeAdminService } from './shared/privilege-admin.service';
import { PrivilegeAdmin } from './shared/privilege-admin.model';

describe('a privilege-admin component', () => {
	let component: PrivilegeAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: PrivilegeAdminService, useClass: MockPrivilegeAdminService },
				PrivilegeAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PrivilegeAdminComponent], (PrivilegeAdminComponent) => {
		component = PrivilegeAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original privilege-admin service
class MockPrivilegeAdminService extends PrivilegeAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
