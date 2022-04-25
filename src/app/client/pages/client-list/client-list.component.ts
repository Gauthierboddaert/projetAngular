import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "src/app/core/models/client";
import { ClientService } from "../../services/client.service";

export interface Clients {
  firstName: string;
  lastName: string;

  email: string;
}

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
  providers: [ClientService],
})
export class ClientListComponent implements OnInit {
  constructor(private _clientService: ClientService) {}
  clients$: Observable<Client[]>;
  displayedColumns: string[] = ["id", "lastName", "firstName", "email"];
  dataSource: Observable<Client[]>;

  ngOnInit(): void {
    this.clients$ = this._clientService.getAllClient();
    this.dataSource = this.clients$;
  }
}
