import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TenantAdminComponent } from './tenant-admin.component';
import { TenantAdminService } from './shared/tenant-admin.service';
import { TenantAdmin } from './shared/tenant-admin.model';

describe('a tenant-admin component', () => {
	let component: TenantAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: TenantAdminService, useClass: MockTenantAdminService },
				TenantAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TenantAdminComponent], (TenantAdminComponent) => {
		component = TenantAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original tenant-admin service
class MockTenantAdminService extends TenantAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
