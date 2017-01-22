import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { RoleAdminComponent } from './role-admin.component';
import { RoleAdminService } from './shared/role-admin.service';
import { RoleAdmin } from './shared/role-admin.model';

describe('a role-admin component', () => {
	let component: RoleAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: RoleAdminService, useClass: MockRoleAdminService },
				RoleAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RoleAdminComponent], (RoleAdminComponent) => {
		component = RoleAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original role-admin service
class MockRoleAdminService extends RoleAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
