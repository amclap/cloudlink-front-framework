import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PersonalCenter } from './personal-center.model';

@Injectable()
export class PersonalCenterService {

	constructor(private http: Http) { }

	getList(): Observable<PersonalCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as PersonalCenter[]);
	}
}