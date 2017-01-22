import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { EnterpriseAdminComponent } from './enterprise-admin.component';
import { EnterpriseAdminService } from './shared/enterprise-admin.service';
import { EnterpriseAdmin } from './shared/enterprise-admin.model';

describe('a enterprise-admin component', () => {
	let component: EnterpriseAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: EnterpriseAdminService, useClass: MockEnterpriseAdminService },
				EnterpriseAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EnterpriseAdminComponent], (EnterpriseAdminComponent) => {
		component = EnterpriseAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original enterprise-admin service
class MockEnterpriseAdminService extends EnterpriseAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
