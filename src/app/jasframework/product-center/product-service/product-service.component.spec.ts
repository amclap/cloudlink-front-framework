import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProductServiceComponent } from './product-service.component';
import { ProductServiceService } from './shared/product-service.service';
import { ProductService } from './shared/product-service.model';

describe('a product-service component', () => {
	let component: ProductServiceComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ProductServiceService, useClass: MockProductServiceService },
				ProductServiceComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductServiceComponent], (ProductServiceComponent) => {
		component = ProductServiceComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original product-service service
class MockProductServiceService extends ProductServiceService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
