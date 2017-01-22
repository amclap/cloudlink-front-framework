import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { Dictionary } from './shared/dictionary.model';
// import { DictionaryService } from './shared/dictionary.service';

@Component({
	selector: 'jas-dictionary',
	encapsulation: ViewEncapsulation.None,
	template: require('./dictionary.component.html'),
	// styles: [require('./dashboard.scss')],
	// providers: [DictionaryService]
})

export class DictionaryComponent implements OnInit {
	// dictionary: Dictionary[] = [];
	// private dictionaryService: DictionaryService
	constructor() { }
	ngOnInit() {
		// this.dictionaryService.getList().subscribe((res) => {
		// 	this.dictionary = res;
		// });
	}
}