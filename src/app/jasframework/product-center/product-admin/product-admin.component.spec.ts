import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProductAdminComponent } from './product-admin.component';
import { ProductAdminService } from './shared/product-admin.service';
import { ProductAdmin } from './shared/product-admin.model';

describe('a product-admin component', () => {
	let component: ProductAdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ProductAdminService, useClass: MockProductAdminService },
				ProductAdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductAdminComponent], (ProductAdminComponent) => {
		component = ProductAdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original product-admin service
class MockProductAdminService extends ProductAdminService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
