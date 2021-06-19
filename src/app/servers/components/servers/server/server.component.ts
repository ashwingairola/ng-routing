import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IServer } from 'src/app/models/server.model';
import { ServersService } from '../../../../services/servers.service';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent {
	server$: Observable<IServer | null>;

	constructor(private serversService: ServersService) {
		this.server$ = this.serversService.selectedServer$;
	}
}
