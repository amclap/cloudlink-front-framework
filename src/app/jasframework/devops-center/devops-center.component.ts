import { Component, OnInit } from '@angular/core';

import { DevopsCenter } from './shared/devops-center.model';
import { DevopsCenterService } from './shared/devops-center.service';

@Component({
	selector: 'devops-center',
	templateUrl: 'devops-center.component.html',
	providers: [DevopsCenterService]
})

export class DevopsCenterComponent implements OnInit {
	devopsCenter: DevopsCenter[] = [];

	constructor(private devopsCenterService: DevopsCenterService) { }

	ngOnInit() {
		this.devopsCenterService.getList().subscribe((res) => {
			this.devopsCenter = res;
		});
	}
}