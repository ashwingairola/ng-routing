import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IUser } from '../../../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private usersService: UsersService
	) {}

	users$: Observable<IUser[]> = this.usersService.users$;

	ngOnInit() {}
}
