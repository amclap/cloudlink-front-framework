import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProductCenterComponent } from './product-center.component';
import { ProductCenterService } from './shared/product-center.service';
import { ProductCenter } from './shared/product-center.model';

describe('a product-center component', () => {
	let component: ProductCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ProductCenterService, useClass: MockProductCenterService },
				ProductCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductCenterComponent], (ProductCenterComponent) => {
		component = ProductCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original product-center service
class MockProductCenterService extends ProductCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
