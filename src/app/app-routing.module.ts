import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] = [
	{ path: 'users', component: UsersComponent },
	{ path: 'users/:id', component: UsersComponent },
	{ path: 'servers', component: ServersComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
