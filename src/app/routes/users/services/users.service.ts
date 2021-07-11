import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from 'src/app/models/user.model';

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
				console.log(id);
				if (!id) {
					return null;
				}

				const user = users.find(user => user.id === id);
				console.log(user);

				if (user) {
					return { ...user };
				}

				return null;
			})
		);
	}
}
