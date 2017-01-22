import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AdminCenterComponent } from './admin-center.component';
import { AdminCenterService } from './shared/admin-center.service';
import { AdminCenter } from './shared/admin-center.model';

describe('a admin-center component', () => {
	let component: AdminCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: AdminCenterService, useClass: MockAdminCenterService },
				AdminCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AdminCenterComponent], (AdminCenterComponent) => {
		component = AdminCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original admin-center service
class MockAdminCenterService extends AdminCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
