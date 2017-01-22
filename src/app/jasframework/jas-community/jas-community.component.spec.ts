import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { JasCommunityComponent } from './jas-community.component';
import { JasCommunityService } from './shared/jas-community.service';
import { JasCommunity } from './shared/jas-community.model';

describe('a jas-community component', () => {
	let component: JasCommunityComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: JasCommunityService, useClass: MockJasCommunityService },
				JasCommunityComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([JasCommunityComponent], (JasCommunityComponent) => {
		component = JasCommunityComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original jas-community service
class MockJasCommunityService extends JasCommunityService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
