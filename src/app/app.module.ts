import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LightboxModule } from "ngx-lightbox";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { NgxTypedJsModule } from "ngx-typed-js";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { FlatpickrModule } from "angularx-flatpickr";
import { CountToModule } from "angular-count-to";
import { NgxMasonryModule } from "ngx-masonry";

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { MasterPageComponent } from "./master-page/master-page.component";
import { IndexComponent } from "./index/index.component";
import { IndexOnepageComponent } from "./index-onepage/index-onepage.component";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SwitcherComponent } from "./shared/switcher/switcher.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: "horizontal",
  slidesPerView: "auto",
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterPageComponent,
    IndexComponent,
    IndexOnepageComponent,
    SwitcherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: "legacy" }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule,
    CoreModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  exports: [FeatherModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
