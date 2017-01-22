import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { MenuAdminComponent } from './menu-admin.component';
import { MenuAdminService } from './shared/menu-admin.service';
import { MenuAdmin } from './shared/menu-admin.model';

describe('a menu-admin component', () => {
	let component: MenuAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: MenuAdminService, useClass: MockMenuAdminService },
				MenuAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MenuAdminComponent], (MenuAdminComponent) => {
		component = MenuAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original menu-admin service
class MockMenuAdminService extends MenuAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
