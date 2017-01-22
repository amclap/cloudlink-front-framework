import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SystemAdminComponent } from './system-admin.component';
import { SystemAdminService } from './shared/system-admin.service';
import { SystemAdmin } from './shared/system-admin.model';

describe('a system-admin component', () => {
	let component: SystemAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: SystemAdminService, useClass: MockSystemAdminService },
				SystemAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SystemAdminComponent], (SystemAdminComponent) => {
		component = SystemAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original system-admin service
class MockSystemAdminService extends SystemAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
