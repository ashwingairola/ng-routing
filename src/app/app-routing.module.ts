import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServersModule } from './routes/servers/servers.module';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Route[] = [
	{
		path: 'users',
		component: UsersComponent,
		children: [{ path: ':id', component: UserComponent }]
	},
	{ path: 'servers', loadChildren: () => ServersModule },
	{ path: '', component: HomeComponent },
	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
