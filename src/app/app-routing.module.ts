import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexOnepageComponent } from "./index-onepage/index-onepage.component";
import { IndexComponent } from "./index/index.component";
import { MasterPageComponent } from "./master-page/master-page.component";
import { SwitcherComponent } from "./shared/switcher/switcher.component";

const routes: Routes = [
  {
    path: "",
    component: MasterPageComponent,
    children: [
      { path: "", component: IndexComponent },
      { path: "index-onepage", component: IndexOnepageComponent },
      { path: "#", component: SwitcherComponent },
      // Lazy-loaded core module
      {
        path: "core",
        loadChildren: () =>
          import("./core/core.module").then((m) => m.CoreModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
