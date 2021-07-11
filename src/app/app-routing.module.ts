import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServersModule } from './routes/servers/servers.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersModule } from './routes/users/users.module';

const routes: Route[] = [
	{ path: 'users', loadChildren: () => UsersModule },
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
