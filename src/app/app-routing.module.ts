import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./shared/index/index.component";
import { IndexOnepageComponent } from "./shared/index-onepage/index-onepage.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "single-page",
    component: IndexOnepageComponent,
  },
  {
    path: "services",
    loadChildren: () =>
      import("./backlinks/backlinks.module").then((m) => m.BacklinksModule),
  },
  // ... any other routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 0],
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
