import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { OperationCenterComponent } from './operation-center.component';
import { OperationCenterService } from './shared/operation-center.service';
import { OperationCenter } from './shared/operation-center.model';

describe('a operation-center component', () => {
	let component: OperationCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: OperationCenterService, useClass: MockOperationCenterService },
				OperationCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([OperationCenterComponent], (OperationCenterComponent) => {
		component = OperationCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original operation-center service
class MockOperationCenterService extends OperationCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
