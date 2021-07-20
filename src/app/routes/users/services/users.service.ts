import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from '../../../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private _users$ = new BehaviorSubject<IUser[]>([
		{ id: 1, name: 'Max' },
		{ id: 2, name: 'Anna' },
		{ id: 3, name: 'Chris' }
	]);

	readonly users$ = this._users$
		.asObservable()
		.pipe(map(users => users.slice()));

	constructor() {}

	findUser(id: number | null): Observable<IUser | null> {
		return this._users$.pipe(
			map(users => {
				if (!id) {
					return null;
				}

				const user = users.find(user => user.id === id);

				if (user) {
					return { ...user };
				}

				return null;
			})
		);
	}
}
