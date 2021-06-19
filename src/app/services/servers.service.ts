import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IServer, TServerStatus } from '../models/server.model';

@Injectable({ providedIn: 'root' })
export class ServersService {
	private _servers$ = new BehaviorSubject<IServer[]>([
		{
			id: 1,
			name: 'Productionserver',
			status: 'online'
		},
		{
			id: 2,
			name: 'Testserver',
			status: 'offline'
		},
		{
			id: 3,
			name: 'Devserver',
			status: 'offline'
		}
	]);

	private _selectedServer$ = new BehaviorSubject<IServer | null>(null);

	readonly servers$ = this._servers$
		.asObservable()
		.pipe(map(servers => servers.slice()));

	readonly selectedServer$ = this._selectedServer$.asObservable().pipe(
		map(server => {
			if (server) {
				return { ...server };
			}
			return null;
		})
	);

	selectServer(id: number | null) {
		const servers = this._servers$.getValue();
		const server = servers.find(server => server.id === id) || null;

		this._selectedServer$.next(server);
	}

	updateServer(
		id: number,
		serverInfo: { name: string; status: TServerStatus }
	) {
		const servers = this._servers$.getValue();
		const server = servers.find(s => {
			return s.id === id;
		});

		if (server) {
			server.name = serverInfo.name;
			server.status = serverInfo.status;
			this._servers$.next(servers);
		}
	}
}
