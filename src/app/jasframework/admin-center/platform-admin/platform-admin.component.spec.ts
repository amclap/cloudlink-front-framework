import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PlatformAdminComponent } from './platform-admin.component';
import { PlatformAdminService } from './shared/platform-admin.service';
import { PlatformAdmin } from './shared/platform-admin.model';

describe('a platform-admin component', () => {
	let component: PlatformAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: PlatformAdminService, useClass: MockPlatformAdminService },
				PlatformAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PlatformAdminComponent], (PlatformAdminComponent) => {
		component = PlatformAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original platform-admin service
class MockPlatformAdminService extends PlatformAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
