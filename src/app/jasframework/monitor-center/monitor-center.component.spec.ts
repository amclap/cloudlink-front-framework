import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { MonitorCenterComponent } from './monitor-center.component';
import { MonitorCenterService } from './shared/monitor-center.service';
import { MonitorCenter } from './shared/monitor-center.model';

describe('a monitor-center component', () => {
	let component: MonitorCenterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: MonitorCenterService, useClass: MockMonitorCenterService },
				MonitorCenterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MonitorCenterComponent], (MonitorCenterComponent) => {
		component = MonitorCenterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original monitor-center service
class MockMonitorCenterService extends MonitorCenterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
