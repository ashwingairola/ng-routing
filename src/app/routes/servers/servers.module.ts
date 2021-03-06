import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/servers/server/server.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { ServerResolver } from './resolvers/server.resolver';

@NgModule({
	declarations: [ServersComponent, ServerComponent, EditServerComponent],
	imports: [CommonModule, FormsModule, ServersRoutingModule],
	providers: [ServerResolver]
})
export class ServersModule {}
