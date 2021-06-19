import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './services/servers.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent, HomeComponent, UsersComponent, UserComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [ServersService],
	bootstrap: [AppComponent]
})
export class AppModule {}
