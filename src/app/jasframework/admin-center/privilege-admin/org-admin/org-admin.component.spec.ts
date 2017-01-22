import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { OrgAdminComponent } from './org-admin.component';
import { OrgAdminService } from './shared/org-admin.service';
import { OrgAdmin } from './shared/org-admin.model';

describe('a org-admin component', () => {
	let component: OrgAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: OrgAdminService, useClass: MockOrgAdminService },
				OrgAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([OrgAdminComponent], (OrgAdminComponent) => {
		component = OrgAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original org-admin service
class MockOrgAdminService extends OrgAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
