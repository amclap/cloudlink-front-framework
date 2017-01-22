import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MenuAdmin } from './menu-admin.model';

@Injectable()
export class MenuAdminService {

	constructor(private http: Http) { }

	getList(): Observable<MenuAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as MenuAdmin[]);
	}
}