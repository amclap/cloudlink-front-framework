import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
	selector: 'jas-personal-center',
	encapsulation: ViewEncapsulation.None,
	template: require('./personal-center.component.html')
	
})

export class PersonalCenterComponent implements OnInit {

	constructor() { }
	ngOnInit() {
	}
}