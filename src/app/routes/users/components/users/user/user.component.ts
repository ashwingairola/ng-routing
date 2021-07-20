import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IUser } from '../../../../../models/user.model';
import { UsersService } from '../../../services/users.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private usersService: UsersService
	) {}

	user$: Observable<IUser | null> = this.route.paramMap.pipe(
		switchMap(params => {
			const userId = params.get('id');
			const id = userId ? +userId : null;
			return this.usersService.findUser(id);
		})
	);

	ngOnInit() {}
}
