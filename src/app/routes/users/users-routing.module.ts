import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent,
		children: [{ path: ':id', component: UserComponent }]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {}
