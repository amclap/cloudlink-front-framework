import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PasswordComponent } from './password.component';
import { PasswordService } from './shared/password.service';
import { Password } from './shared/password.model';

describe('a password component', () => {
	let component: PasswordComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: PasswordService, useClass: MockPasswordService },
				PasswordComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PasswordComponent], (PasswordComponent) => {
		component = PasswordComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original password service
class MockPasswordService extends PasswordService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
