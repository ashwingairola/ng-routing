import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IServer } from 'src/app/models/server.model';
import { ServersService } from '../../../services/servers.service';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent {
	server$: Observable<IServer | null>;

	constructor(
		private serversService: ServersService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.server$ = this.serversService.selectedServer$;
	}

	onEdit() {
		this.router.navigate(['edit'], { relativeTo: this.route });
	}
}
