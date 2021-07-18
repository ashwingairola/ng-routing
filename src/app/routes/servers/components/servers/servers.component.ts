import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { IServer } from '../../../../models/server.model';
import { ServersService } from '../../services/servers.service';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit, OnDestroy {
	servers$: Observable<IServer[]>;
	private _destroy$ = new Subject<void>();

	constructor(private serversService: ServersService) {
		this.servers$ = this.serversService.servers$;
	}

	ngOnInit() {}

	ngOnDestroy() {
		this._destroy$.next();
	}
}
