import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "./shared/shared.module";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SwitcherComponent } from "./shared/switcher/switcher.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

//import { NgxTypedJsModule } from "ngx-typed-js";
//import { NgxYoutubePlayerModule } from "ngx-youtube-player";
//import { FlatpickrModule } from "angularx-flatpickr";
//import { CountToModule } from "angular-count-to";
//import { NgxMasonryModule } from "ngx-masonry";
//import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
//change to ngx-page-scroll
//import { LightboxModule } from "ngx-lightbox";
//import { CoreModule } from "./core/core.module";

import { BacklinksModule } from "./backlinks/backlinks.module";

@NgModule({
  declarations: [AppComponent, SwitcherComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    NgbDropdownModule,
    NgbNavModule,
    RouterModule,
    FormsModule,
    SharedModule,
    BacklinksModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  exports: [CarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
