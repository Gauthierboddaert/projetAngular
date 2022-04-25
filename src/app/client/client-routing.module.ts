import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../core/components/not-found/not-found.component";
import { ClientDetailsComponent } from "./pages/client-details/client-details.component";
import { ClientListComponent } from "./pages/client-list/client-list.component";
import { ClientComponent } from "./client.component";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        component: ClientListComponent,
      },
      {
        path: ":id",
        component: ClientDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
