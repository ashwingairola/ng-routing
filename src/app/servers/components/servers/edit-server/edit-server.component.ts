import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TServerStatus } from 'src/app/models/server.model';

import { ServersService } from '../../../../services/servers.service';

@Component({
	selector: 'app-edit-server',
	templateUrl: './edit-server.component.html',
	styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
	constructor(private serversService: ServersService) {}

	server$ = this.serversService.selectedServer$;
	serverName?: string = '';
	serverStatus?: string = '';
	private _serverId?: number;
	private _destroy$ = new Subject<void>();

	ngOnInit() {
		this.server$.pipe(takeUntil(this._destroy$)).subscribe(server => {
			this._serverId = server?.id;
			this.serverName = server?.name;
			this.serverStatus = server?.status;
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
