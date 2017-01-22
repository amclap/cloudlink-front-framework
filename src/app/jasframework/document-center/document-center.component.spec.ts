import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { DocumentCenterComponent } from './document-center.component';
import { DocumentCenterService } from './shared/document-center.service';
import { DocumentCenter } from './shared/document-center.model';

describe('a document-center component', () => {
	let component: DocumentCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: DocumentCenterService, useClass: MockDocumentCenterService },
				DocumentCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DocumentCenterComponent], (DocumentCenterComponent) => {
		component = DocumentCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original document-center service
class MockDocumentCenterService extends DocumentCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
