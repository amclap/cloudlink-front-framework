import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dictionary } from './dictionary.model';

@Injectable()
export class DictionaryService {

	constructor(private http: Http) { }

	getList(): Observable<Dictionary[]> {
		return this.http.get('/api/list').map(res => res.json() as Dictionary[]);
	}
}