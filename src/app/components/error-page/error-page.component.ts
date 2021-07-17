import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
	errorMessage$?: Observable<string>;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.errorMessage$ = this.route.data.pipe(map(data => data['message']));
	}
}
