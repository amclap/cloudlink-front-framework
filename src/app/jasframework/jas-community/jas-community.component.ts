import { Component, OnInit } from '@angular/core';

import { JasCommunity } from './shared/jas-community.model';
import { JasCommunityService } from './shared/jas-community.service';

@Component({
	selector: 'jas-community',
	templateUrl: 'jas-community.component.html',
	providers: [JasCommunityService]
})

export class JasCommunityComponent implements OnInit {
	jasCommunity: JasCommunity[] = [];

	constructor(private jasCommunityService: JasCommunityService) { }

	ngOnInit() {
		this.jasCommunityService.getList().subscribe((res) => {
			this.jasCommunity = res;
		});
	}
}