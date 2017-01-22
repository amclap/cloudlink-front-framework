import { Component, OnInit } from '@angular/core';

import { OperationCenter } from './shared/operation-center.model';
import { OperationCenterService } from './shared/operation-center.service';

@Component({
	selector: 'operation-center',
	templateUrl: 'operation-center.component.html',
	providers: [OperationCenterService]
})

export class OperationCenterComponent implements OnInit {
	operationCenter: OperationCenter[] = [];

	constructor(private operationCenterService: OperationCenterService) { }

	ngOnInit() {
		this.operationCenterService.getList().subscribe((res) => {
			this.operationCenter = res;
		});
	}
}