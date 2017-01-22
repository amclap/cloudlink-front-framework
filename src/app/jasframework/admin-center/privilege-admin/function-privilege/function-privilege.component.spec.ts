import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { FunctionPrivilegeComponent } from './function-privilege.component';
import { FunctionPrivilegeService } from './shared/function-privilege.service';
import { FunctionPrivilege } from './shared/function-privilege.model';

describe('a function-privilege component', () => {
	let component: FunctionPrivilegeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: FunctionPrivilegeService, useClass: MockFunctionPrivilegeService },
				FunctionPrivilegeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FunctionPrivilegeComponent], (FunctionPrivilegeComponent) => {
		component = FunctionPrivilegeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original function-privilege service
class MockFunctionPrivilegeService extends FunctionPrivilegeService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
