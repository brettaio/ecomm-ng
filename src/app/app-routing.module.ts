import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexOnepageComponent } from "./index-onepage/index-onepage.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  { path: "index-onepage", component: IndexOnepageComponent },
  // Lazy-loaded core module
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
