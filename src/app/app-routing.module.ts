import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "clients", pathMatch: "full" },
  {
    path: "clients",
    loadChildren: () =>
      import("./client/client.module").then((e) => e.ClientModule),
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
