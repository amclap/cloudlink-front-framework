import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Password } from './password.model';

@Injectable()
export class PasswordService {

	constructor(private http: Http) { }

	getList(): Observable<Password[]> {
		return this.http.get('/api/list').map(res => res.json() as Password[]);
	}
}