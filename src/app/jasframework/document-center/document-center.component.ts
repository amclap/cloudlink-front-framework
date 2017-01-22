import { Component, OnInit } from '@angular/core';

import { DocumentCenter } from './shared/document-center.model';
import { DocumentCenterService } from './shared/document-center.service';

@Component({
	selector: 'document-center',
	templateUrl: 'document-center.component.html',
	providers: [DocumentCenterService]
})

export class DocumentCenterComponent implements OnInit {
	documentCenter: DocumentCenter[] = [];

	constructor(private documentCenterService: DocumentCenterService) { }

	ngOnInit() {
		this.documentCenterService.getList().subscribe((res) => {
			this.documentCenter = res;
		});
	}
}