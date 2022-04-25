import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "src/app/core/models/client";
import { environment } from "src/environments/environment";

@Injectable()
export class ClientService {
  private readonly clientPath: string = "/client";

  constructor(private _http: HttpClient) {}

  getAllClient(): Observable<Client[]> {
    return this._http.get<Client[]>(
      `${environment.apiBaseUrl}${this.clientPath}`
    );
  }
}
