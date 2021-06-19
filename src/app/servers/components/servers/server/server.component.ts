import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';

import { IServer } from 'src/app/models/server.model';
import { ServersService } from '../../../../services/servers.service';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
	server$: Observable<IServer | null>;
	private _destroy$ = new Subject<void>();

	constructor(
		private serversService: ServersService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.router.events
			.pipe(
				takeUntil(this._destroy$),
				filter((e): e is NavigationEnd => e instanceof NavigationEnd),
				map(() => this.route.firstChild),
				switchMap(childRoute => {
					if (!childRoute) {
						return of(null);
					}

					const params = childRoute.snapshot.paramMap;
					const id = params.get('id');
					const serverId = id ? +id : null;

					return of(serverId);
				})
			)
			.subscribe(serverId => {
				this.serversService.selectServer(serverId);
			});

		this.server$ = this.serversService.selectedServer$;
	}

	ngOnInit() {}

	ngOnDestroy() {
		this._destroy$.next();
	}
}
