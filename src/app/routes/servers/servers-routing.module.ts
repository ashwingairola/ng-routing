import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';

const routes: Routes = [
	{
		path: '',
		component: ServersComponent,
		children: [
			{ path: ':id', component: ServerComponent },
			{ path: ':id/edit', component: EditServerComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ServersRoutingModule {}
