import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { DevopsCenterComponent } from './devops-center.component';
import { DevopsCenterService } from './shared/devops-center.service';
import { DevopsCenter } from './shared/devops-center.model';

describe('a devops-center component', () => {
	let component: DevopsCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: DevopsCenterService, useClass: MockDevopsCenterService },
				DevopsCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DevopsCenterComponent], (DevopsCenterComponent) => {
		component = DevopsCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original devops-center service
class MockDevopsCenterService extends DevopsCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
