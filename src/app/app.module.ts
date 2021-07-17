import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServersService } from './routes/servers/services/servers.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, PageNotFoundComponent, ErrorPageComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [ServersService],
	bootstrap: [AppComponent]
})
export class AppModule {}
