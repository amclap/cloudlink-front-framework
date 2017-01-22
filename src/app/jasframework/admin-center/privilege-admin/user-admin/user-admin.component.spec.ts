import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { UserAdminComponent } from './user-admin.component';
import { UserAdminService } from './shared/user-admin.service';
import { UserAdmin } from './shared/user-admin.model';

describe('a user-admin component', () => {
	let component: UserAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: UserAdminService, useClass: MockUserAdminService },
				UserAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserAdminComponent], (UserAdminComponent) => {
		component = UserAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original user-admin service
class MockUserAdminService extends UserAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
