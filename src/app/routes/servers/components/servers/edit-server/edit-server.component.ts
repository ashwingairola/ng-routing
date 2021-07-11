import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TServerStatus } from 'src/app/models/server.model';

import { ServersService } from '../../../services/servers.service';

@Component({
	selector: 'app-edit-server',
	templateUrl: './edit-server.component.html',
	styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
	constructor(
		private serversService: ServersService,
		private route: ActivatedRoute
	) {}

	server$ = this.serversService.selectedServer$;
	serverName?: string = '';
	serverStatus?: string = '';
	allowEdit = false;

	private _serverId?: number;
	private _destroy$ = new Subject<void>();

	ngOnInit() {
		this.server$.pipe(takeUntil(this._destroy$)).subscribe(server => {
			this._serverId = server?.id;
			this.serverName = server?.name;
			this.serverStatus = server?.status;
		});

		this.route.queryParamMap
			.pipe(takeUntil(this._destroy$))
			.subscribe(queryParams => {
				const allowEdit = queryParams.get('allowEdit');
				this.allowEdit = allowEdit === '1' ? true : false;
			});
	}

	ngOnDestroy() {
		this._destroy$.next();
	}

	onUpdateServer() {
		if (this._serverId && this.serverName && this.serverStatus) {
			this.serversService.updateServer(this._serverId, {
				name: this.serverName,
				status: this.serverStatus as TServerStatus
			});
		}
	}
}
