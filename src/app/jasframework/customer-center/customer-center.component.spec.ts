import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { CustomerCenterComponent } from './customer-center.component';
import { CustomerCenterService } from './shared/customer-center.service';
import { CustomerCenter } from './shared/customer-center.model';

describe('a customer-center component', () => {
	let component: CustomerCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: CustomerCenterService, useClass: MockCustomerCenterService },
				CustomerCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CustomerCenterComponent], (CustomerCenterComponent) => {
		component = CustomerCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original customer-center service
class MockCustomerCenterService extends CustomerCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
