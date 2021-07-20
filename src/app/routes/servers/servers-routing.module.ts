import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CanDeactivateGuard } from '../../guards/can-deactivate.guard';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerResolver } from './resolvers/server.resolver';

const routes: Routes = [
	{
		path: '',
		component: ServersComponent,
		canActivateChild: [AuthGuard],
		children: [
			{
				path: ':id',
				component: ServerComponent,
				resolve: { server: ServerResolver }
				// data: { server: { id: 1, name: 'A server' } }
			},
			{
				path: ':id/edit',
				component: EditServerComponent,
				canDeactivate: [CanDeactivateGuard]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ServersRoutingModule {}
