import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IServer } from '../../../models/server.model';
import { ServersService } from '../../../services/servers.service';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	servers$: Observable<IServer[]>;

	constructor(
		private serversService: ServersService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.servers$ = this.serversService.servers$;
	}

	ngOnInit() {}

	onReload() {
		// this.router.navigate(['servers'], { relativeTo: this.route });
		this.router.navigate([''], { relativeTo: this.route });
	}
}
