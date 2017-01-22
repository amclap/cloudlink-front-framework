import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductCenter } from './product-center.model';

@Injectable()
export class ProductCenterService {

	constructor(private http: Http) { }

	getList(): Observable<ProductCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as ProductCenter[]);
	}
}