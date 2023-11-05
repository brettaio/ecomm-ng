import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexOnepageComponent } from "../shared/index-onepage/index-onepage.component";
import { IndexComponent } from "../shared/index/index.component";
import { DataRecoveryAbbotsfordComponent } from "./data-recovery-abbotsford/data-recovery-abbotsford.component";
import { DataRecoveryArmstrongComponent } from "./data-recovery-armstrong/data-recovery-armstrong.component";
import { DataRecoveryBurnabyComponent } from "./data-recovery-burnaby/data-recovery-burnaby.component";
import { DataRecoveryCampbellRiverComponent } from "./data-recovery-campbell-river/data-recovery-campbell-river.component";
import { DataRecoveryCastlegarComponent } from "./data-recovery-castlegar/data-recovery-castlegar.component";
import { DataRecoveryChilliwackComponent } from "./data-recovery-chilliwack/data-recovery-chilliwack.component";
import { DataRecoveryColwoodComponent } from "./data-recovery-colwood/data-recovery-colwood.component";
import { DataRecoveryCoquitlamComponent } from "./data-recovery-coquitlam/data-recovery-coquitlam.component";
import { DataRecoveryCourtenayComponent } from "./data-recovery-courtenay/data-recovery-courtenay.component";
import { DataRecoveryCranbrookComponent } from "./data-recovery-cranbrook/data-recovery-cranbrook.component";
import { DataRecoveryDawsonCreekComponent } from "./data-recovery-dawson-creek/data-recovery-dawson-creek.component";
import { DataRecoveryDeltaComponent } from "./data-recovery-delta/data-recovery-delta.component";
import { DataRecoveryDuncanComponent } from "./data-recovery-duncan/data-recovery-duncan.component";
import { DataRecoveryEnderbyComponent } from "./data-recovery-enderby/data-recovery-enderby.component";
import { DataRecoveryFernieComponent } from "./data-recovery-fernie/data-recovery-fernie.component";
import { DataRecoveryFortStJohnComponent } from "./data-recovery-fort-st-john/data-recovery-fort-st-john.component";
import { DataRecoveryGrandForksComponent } from "./data-recovery-grand-forks/data-recovery-grand-forks.component";
import { DataRecoveryGreenwoodComponent } from "./data-recovery-greenwood/data-recovery-greenwood.component";
import { DataRecoveryKamloopsComponent } from "./data-recovery-kamloops/data-recovery-kamloops.component";
import { DataRecoveryKelownaComponent } from "./data-recovery-kelowna/data-recovery-kelowna.component";
import { DataRecoveryKimberleyComponent } from "./data-recovery-kimberley/data-recovery-kimberley.component";
import { DataRecoveryLangfordComponent } from "./data-recovery-langford/data-recovery-langford.component";
import { DataRecoveryLangleyComponent } from "./data-recovery-langley/data-recovery-langley.component";
import { DataRecoveryMapleRidgeComponent } from "./data-recovery-maple-ridge/data-recovery-maple-ridge.component";
import { DataRecoveryMerrittComponent } from "./data-recovery-merritt/data-recovery-merritt.component";
import { DataRecoveryMissionComponent } from "./data-recovery-mission/data-recovery-mission.component";
import { DataRecoveryNanaimoComponent } from "./data-recovery-nanaimo/data-recovery-nanaimo.component";
import { DataRecoveryNelsonComponent } from "./data-recovery-nelson/data-recovery-nelson.component";
import { DataRecoveryNewWestminsterComponent } from "./data-recovery-new-westminster/data-recovery-new-westminster.component";
import { DataRecoveryNorthVancouverComponent } from "./data-recovery-north-vancouver/data-recovery-north-vancouver.component";
import { DataRecoveryParksvilleComponent } from "./data-recovery-parksville/data-recovery-parksville.component";
import { DataRecoveryPentictonComponent } from "./data-recovery-penticton/data-recovery-penticton.component";
import { DataRecoveryPittMeadowsComponent } from "./data-recovery-pitt-meadows/data-recovery-pitt-meadows.component";
import { DataRecoveryPortAlberniComponent } from "./data-recovery-port-alberni/data-recovery-port-alberni.component";
import { DataRecoveryPortCoquitlamComponent } from "./data-recovery-port-coquitlam/data-recovery-port-coquitlam.component";
import { DataRecoveryPortMoodyComponent } from "./data-recovery-port-moody/data-recovery-port-moody.component";
import { DataRecoveryPowellRiverComponent } from "./data-recovery-powell-river/data-recovery-powell-river.component";
import { DataRecoveryPrinceGeorgeComponent } from "./data-recovery-prince-george/data-recovery-prince-george.component";
import { DataRecoveryPrinceRupertComponent } from "./data-recovery-prince-rupert/data-recovery-prince-rupert.component";
import { DataRecoveryQuesnelComponent } from "./data-recovery-quesnel/data-recovery-quesnel.component";
import { DataRecoveryRevelstokeComponent } from "./data-recovery-revelstoke/data-recovery-revelstoke.component";
import { DataRecoveryRichmondComponent } from "./data-recovery-richmond/data-recovery-richmond.component";
import { DataRecoveryRosslandComponent } from "./data-recovery-rossland/data-recovery-rossland.component";
import { DataRecoverySalmonArmComponent } from "./data-recovery-salmon-arm/data-recovery-salmon-arm.component";
import { DataRecoverySurreyComponent } from "./data-recovery-surrey/data-recovery-surrey.component";
import { DataRecoveryTerraceComponent } from "./data-recovery-terrace/data-recovery-terrace.component";
import { DataRecoveryTrailComponent } from "./data-recovery-trail/data-recovery-trail.component";
import { DataRecoveryVancouverComponent } from "./data-recovery-vancouver/data-recovery-vancouver.component";
import { DataRecoveryVernonComponent } from "./data-recovery-vernon/data-recovery-vernon.component";
import { DataRecoveryVictoriaComponent } from "./data-recovery-victoria/data-recovery-victoria.component";
import { DataRecoveryWestKelownaComponent } from "./data-recovery-west-kelowna/data-recovery-west-kelowna.component";
import { DataRecoveryWhiteRockComponent } from "./data-recovery-white-rock/data-recovery-white-rock.component";
import { DataRecoveryWilliamsLakeComponent } from "./data-recovery-williams-lake/data-recovery-williams-lake.component";

const routes: Routes = [
  {
    path: "data-recovery-abbotsford",
    component: DataRecoveryAbbotsfordComponent,
  },
  {
    path: "data-recovery-armstrong",
    component: DataRecoveryArmstrongComponent,
  },
  { path: "data-recovery-burnaby", component: DataRecoveryBurnabyComponent },
  {
    path: "data-recovery-campbell-river",
    component: DataRecoveryCampbellRiverComponent,
  },
  {
    path: "data-recovery-castlegar",
    component: DataRecoveryCastlegarComponent,
  },
  {
    path: "data-recovery-chilliwack",
    component: DataRecoveryChilliwackComponent,
  },
  { path: "data-recovery-colwood", component: DataRecoveryColwoodComponent },
  {
    path: "data-recovery-coquitlam",
    component: DataRecoveryCoquitlamComponent,
  },
  {
    path: "data-recovery-courtenay",
    component: DataRecoveryCourtenayComponent,
  },
  {
    path: "data-recovery-cranbrook",
    component: DataRecoveryCranbrookComponent,
  },
  {
    path: "data-recovery-dawson-creek",
    component: DataRecoveryDawsonCreekComponent,
  },
  { path: "data-recovery-delta", component: DataRecoveryDeltaComponent },
  { path: "data-recovery-duncan", component: DataRecoveryDuncanComponent },
  { path: "data-recovery-enderby", component: DataRecoveryEnderbyComponent },
  { path: "data-recovery-fernie", component: DataRecoveryFernieComponent },
  {
    path: "data-recovery-fort-st-john",
    component: DataRecoveryFortStJohnComponent,
  },
  {
    path: "data-recovery-grand-forks",
    component: DataRecoveryGrandForksComponent,
  },
  {
    path: "data-recovery-greenwood",
    component: DataRecoveryGreenwoodComponent,
  },
  { path: "data-recovery-kamloops", component: DataRecoveryKamloopsComponent },
  { path: "data-recovery-kelowna", component: DataRecoveryKelownaComponent },
  {
    path: "data-recovery-kimberley",
    component: DataRecoveryKimberleyComponent,
  },
  { path: "data-recovery-langford", component: DataRecoveryLangfordComponent },
  { path: "data-recovery-langley", component: DataRecoveryLangleyComponent },
  {
    path: "data-recovery-maple-ridge",
    component: DataRecoveryMapleRidgeComponent,
  },
  { path: "data-recovery-merritt", component: DataRecoveryMerrittComponent },
  { path: "data-recovery-mission", component: DataRecoveryMissionComponent },
  { path: "data-recovery-nanaimo", component: DataRecoveryNanaimoComponent },
  { path: "data-recovery-nelson", component: DataRecoveryNelsonComponent },
  {
    path: "data-recovery-new-westminster",
    component: DataRecoveryNewWestminsterComponent,
  },
  {
    path: "data-recovery-north-vancouver",
    component: DataRecoveryNorthVancouverComponent,
  },
  {
    path: "data-recovery-parksville",
    component: DataRecoveryParksvilleComponent,
  },
  {
    path: "data-recovery-penticton",
    component: DataRecoveryPentictonComponent,
  },
  {
    path: "data-recovery-pitt-meadows",
    component: DataRecoveryPittMeadowsComponent,
  },
  {
    path: "data-recovery-port-alberni",
    component: DataRecoveryPortAlberniComponent,
  },
  {
    path: "data-recovery-port-coquitlam",
    component: DataRecoveryPortCoquitlamComponent,
  },
  {
    path: "data-recovery-port-moody",
    component: DataRecoveryPortMoodyComponent,
  },
  {
    path: "data-recovery-powell-river",
    component: DataRecoveryPowellRiverComponent,
  },
  {
    path: "data-recovery-prince-george",
    component: DataRecoveryPrinceGeorgeComponent,
  },
  {
    path: "data-recovery-prince-rupert",
    component: DataRecoveryPrinceRupertComponent,
  },
  { path: "data-recovery-quesnel", component: DataRecoveryQuesnelComponent },
  {
    path: "data-recovery-revelstoke",
    component: DataRecoveryRevelstokeComponent,
  },
  { path: "data-recovery-richmond", component: DataRecoveryRichmondComponent },
  { path: "data-recovery-rossland", component: DataRecoveryRosslandComponent },
  {
    path: "data-recovery-salmon-arm",
    component: DataRecoverySalmonArmComponent,
  },
  { path: "data-recovery-surrey", component: DataRecoverySurreyComponent },
  { path: "data-recovery-terrace", component: DataRecoveryTerraceComponent },
  { path: "data-recovery-trail", component: DataRecoveryTrailComponent },
  {
    path: "data-recovery-vancouver",
    component: DataRecoveryVancouverComponent,
  },
  { path: "data-recovery-vernon", component: DataRecoveryVernonComponent },
  { path: "data-recovery-victoria", component: DataRecoveryVictoriaComponent },
  {
    path: "data-recovery-west-kelowna",
    component: DataRecoveryWestKelownaComponent,
  },
  {
    path: "data-recovery-white-rock",
    component: DataRecoveryWhiteRockComponent,
  },
  {
    path: "data-recovery-williams-lake",
    component: DataRecoveryWilliamsLakeComponent,
  },
  // ... any other routes you need to add
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacklinksRoutingModule {}
