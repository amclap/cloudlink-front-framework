import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductAdmin } from './product-admin.model';

@Injectable()
export class ProductAdminService {

	constructor(private http: Http) { }

	getList(): Observable<ProductAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as ProductAdmin[]);
	}
}