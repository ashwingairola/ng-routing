import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _loggedIn = new BehaviorSubject(false);

	loggedIn = this._loggedIn.asObservable();

	login() {
		this._loggedIn.next(true);
	}

	logout() {
		this._loggedIn.next(false);
	}
}
