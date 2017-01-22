import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { FunctionOperation } from './shared/function-operation.model';
// import { FunctionOperationService } from './shared/function-operation.service';

@Component({
	selector: 'jas-function-operation',
	encapsulation: ViewEncapsulation.None,
	template: require('./function-operation.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [FunctionOperationService]
})

export class FunctionOperationComponent implements OnInit {
	// functionOperation: FunctionOperation[] = [];
	//private functionOperationService: FunctionOperationService
	constructor() { }

	ngOnInit() {
		// this.functionOperationService.getList().subscribe((res) => {
		// 	this.functionOperation = res;
		// });
	}
}