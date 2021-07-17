import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersModule } from './routes/users/users.module';

const routes: Route[] = [
	{ path: 'users', loadChildren: () => UsersModule },
	{
		path: 'servers',
		loadChildren: () =>
			import('./routes/servers/servers.module').then(m => m.ServersModule)
		// canActivateChild: [AuthGuard]
		// canActivate: [AuthGuard]
	},
	{ path: '', component: HomeComponent },
	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
