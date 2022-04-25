import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { ClientRoutingModule } from "./client-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ClientComponent } from "./client.component";
import { ClientListComponent } from "./pages/client-list/client-list.component";
import { ClientDetailsComponent } from "./pages/client-details/client-details.component";
import { ClientFormComponent } from "./components/client-form/client-form.component";
import { ClientService } from "./services/client.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ClientFormComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [ClientService],
})
export class ClientModule {}
