import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IServer } from '../../../../../models/server.model';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	server$?: Observable<IServer | null>;

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.server$ = this.route.data.pipe(
			map(data => {
				console.log(data);
				return data.server as IServer | null;
			})
		);
	}

	onEdit() {
		this.router.navigate(['edit'], {
			relativeTo: this.route,
			queryParamsHandling: 'preserve'
		});
	}
}
