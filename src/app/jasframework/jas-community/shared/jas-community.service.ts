import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { JasCommunity } from './jas-community.model';

@Injectable()
export class JasCommunityService {

	constructor(private http: Http) { }

	getList(): Observable<JasCommunity[]> {
		return this.http.get('/api/list').map(res => res.json() as JasCommunity[]);
	}
}