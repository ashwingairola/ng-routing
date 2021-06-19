import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { IServer } from '../../../models/server.model';
import { ServersService } from '../../../services/servers.service';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnDestroy {
	servers$: Observable<IServer[]>;
	private _destroy$ = new Subject<void>();

	constructor(
		private serversService: ServersService,
		private router: Router,
		private route: ActivatedRoute
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

		this.servers$ = this.serversService.servers$;
	}

	ngOnInit() {}

	ngOnDestroy() {
		this._destroy$.next();
	}

	onReload() {
		// this.router.navigate(['servers'], { relativeTo: this.route });
		this.router.navigate([''], { relativeTo: this.route });
	}
}
