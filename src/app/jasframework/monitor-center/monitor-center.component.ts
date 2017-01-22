import { Component, OnInit } from '@angular/core';

import { MonitorCenter } from './shared/monitor-center.model';
import { MonitorCenterService } from './shared/monitor-center.service';

@Component({
	selector: 'monitor-center',
	templateUrl: 'monitor-center.component.html',
	providers: [MonitorCenterService]
})

export class MonitorCenterComponent implements OnInit {
	monitorCenter: MonitorCenter[] = [];

	constructor(private monitorCenterService: MonitorCenterService) { }

	ngOnInit() {
		this.monitorCenterService.getList().subscribe((res) => {
			this.monitorCenter = res;
		});
	}
}