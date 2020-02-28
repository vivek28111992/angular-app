import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created'
	serverName = 'TestServerName'
	serverCreated = false

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true
		}, 2000)
	}

	ngOnInit() {

	}

	onCreateServer() {
		this.serverCreated = true
		this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
	}

	onUpdateServerName(event: any) {
		this.serverName = (<HTMLInputElement>event.target).value
	}

	serverId: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus
	}
}
