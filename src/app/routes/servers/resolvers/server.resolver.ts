import { Injectable } from '@angular/core';
import {
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IServer } from '../../../models/server.model';
import { ServersService } from '../services/servers.service';

@Injectable()
export class ServerResolver implements Resolve<IServer | null> {
	constructor(private serversService: ServersService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot
	): Observable<IServer | null> | Promise<IServer | null> | IServer | null {
		const id = route.paramMap.get('id');
		const serverId = id ? +id : null;
		return this.serversService.getServer(serverId).pipe(
			tap(server => {
				console.log(server);
			})
		);
	}
}
