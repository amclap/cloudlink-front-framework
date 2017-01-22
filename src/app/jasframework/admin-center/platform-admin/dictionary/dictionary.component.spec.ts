import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { DictionaryComponent } from './dictionary.component';
import { DictionaryService } from './shared/dictionary.service';
import { Dictionary } from './shared/dictionary.model';

describe('a dictionary component', () => {
	let component: DictionaryComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: DictionaryService, useClass: MockDictionaryService },
				DictionaryComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DictionaryComponent], (DictionaryComponent) => {
		component = DictionaryComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original dictionary service
class MockDictionaryService extends DictionaryService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
