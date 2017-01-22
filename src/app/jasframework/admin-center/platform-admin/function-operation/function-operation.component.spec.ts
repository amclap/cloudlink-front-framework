import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { FunctionOperationComponent } from './function-operation.component';
import { FunctionOperationService } from './shared/function-operation.service';
import { FunctionOperation } from './shared/function-operation.model';

describe('a function-operation component', () => {
	let component: FunctionOperationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: FunctionOperationService, useClass: MockFunctionOperationService },
				FunctionOperationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FunctionOperationComponent], (FunctionOperationComponent) => {
		component = FunctionOperationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original function-operation service
class MockFunctionOperationService extends FunctionOperationService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
