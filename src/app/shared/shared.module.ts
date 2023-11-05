import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";
import { RouterModule } from "@angular/router";

import { ScrollspyDirective } from "./scrollspy.directive";

import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ClientsLogoComponent } from "./clients-logo/clients-logo.component";
import { ServicesComponent } from "./services/services.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FeaturesComponent } from "./features/features.component";
import { BlogComponent } from "./blog/blog.component";
import { CustomerTestmonialComponent } from "./customer-testmonial/customer-testmonial.component";
import { ReviewTestmonialComponent } from "./review-testmonial/review-testmonial.component";
import { SimplePricingComponent } from "./simple-pricing/simple-pricing.component";
import { MemberComponent } from "./member/member.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { IndexOnepageComponent } from "./index-onepage/index-onepage.component";
import { IndexComponent } from "./index/index.component";

@NgModule({
  declarations: [
    ScrollspyDirective,
    FooterComponent,
    HeaderComponent,
    TestimonialComponent,
    ClientsLogoComponent,
    ServicesComponent,
    PricingComponent,
    FeaturesComponent,
    BlogComponent,
    CustomerTestmonialComponent,
    ReviewTestmonialComponent,
    SimplePricingComponent,
    MemberComponent,
    IndexOnepageComponent,
    IndexComponent,
  ],
  imports: [CommonModule, CarouselModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    TestimonialComponent,
    ScrollspyDirective,
    ClientsLogoComponent,
    ServicesComponent,
    PricingComponent,
    FeaturesComponent,
    BlogComponent,
    CustomerTestmonialComponent,
    ReviewTestmonialComponent,
    SimplePricingComponent,
    MemberComponent,
    IndexOnepageComponent,
    IndexComponent,
  ],
})
export class SharedModule {}
