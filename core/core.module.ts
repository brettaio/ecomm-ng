import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ShopProductDetailComponent } from "./shop-product-detail/shop-product-detail.component";
import { AccountMembersComponent } from "./account-members/account-members.component";
import { AccountMessagesComponent } from "./account-messages/account-messages.component";
import { AccountPaymentsComponent } from "./account-payments/account-payments.component";
import { AccountProfileComponent } from "./account-profile/account-profile.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { AccountWorksComponent } from "./account-works/account-works.component";
import { AuthCoverLoginComponent } from "./auth-cover-login/auth-cover-login.component";
import { AuthCoverRePasswordComponent } from "./auth-cover-re-password/auth-cover-re-password.component";
import { AuthCoverSignupComponent } from "./auth-cover-signup/auth-cover-signup.component";
import { AuthLoginThreeComponent } from "./auth-login-three/auth-login-three.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthRePasswordThreeComponent } from "./auth-re-password-three/auth-re-password-three.component";
import { AuthRePasswordComponent } from "./auth-re-password/auth-re-password.component";
import { AuthSignupThreeComponent } from "./auth-signup-three/auth-signup-three.component";
import { AuthSignupComponent } from "./auth-signup/auth-signup.component";
import { ChangelogComponent } from "./changelog/changelog.component";
import { ComponentsComponent } from "./components/components.component";
import { DocumentationComponent } from "./documentation/documentation.component";
import { EmailAlertComponent } from "./email-alert/email-alert.component";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";
import { EmailInvoiceComponent } from "./email-invoice/email-invoice.component";
import { EmailPasswordResetComponent } from "./email-password-reset/email-password-reset.component";
import { ForumsCommentsComponent } from "./forums-comments/forums-comments.component";
import { ForumsTopicComponent } from "./forums-topic/forums-topic.component";
import { ForumsComponent } from "./forums/forums.component";
import { HelpcenterFaqsComponent } from "./helpcenter-faqs/helpcenter-faqs.component";
import { HelpcenterGuidesComponent } from "./helpcenter-guides/helpcenter-guides.component";
import { HelpcenterOverviewComponent } from "./helpcenter-overview/helpcenter-overview.component";
import { HelpcenterSupportRequestComponent } from "./helpcenter-support-request/helpcenter-support-request.component";
import { IndexAgencyComponent } from "./index-agency/index-agency.component";
import { IndexAppsComponent } from "./index-apps/index-apps.component";
import { IndexBlockchainComponent } from "./index-blockchain/index-blockchain.component";
import { IndexBlogComponent } from "./index-blog/index-blog.component";
import { IndexBusinessComponent } from "./index-business/index-business.component";
import { IndexCarRidingComponent } from "./index-car-riding/index-car-riding.component";
import { IndexClassicAppComponent } from "./index-classic-app/index-classic-app.component";
import { IndexClassicSaasComponent } from "./index-classic-saas/index-classic-saas.component";
import { IndexConstructionComponent } from "./index-construction/index-construction.component";
import { IndexCorporateComponent } from "./index-corporate/index-corporate.component";
import { IndexCourseComponent } from "./index-course/index-course.component";
import { IndexCoworkingComponent } from "./index-coworking/index-coworking.component";
import { IndexCryptoComponent } from "./index-crypto/index-crypto.component";
import { IndexCustomerComponent } from "./index-customer/index-customer.component";
import { IndexDeveloperComponent } from "./index-developer/index-developer.component";
import { IndexDigitalAgencyComponent } from "./index-digital-agency/index-digital-agency.component";
import { IndexEbookComponent } from "./index-ebook/index-ebook.component";
import { IndexEmailInboxComponent } from "./index-email-inbox/index-email-inbox.component";
import { IndexEnterpriseComponent } from "./index-enterprise/index-enterprise.component";
import { IndexEventComponent } from "./index-event/index-event.component";
import { IndexFinanceComponent } from "./index-finance/index-finance.component";
import { IndexFreelancerComponent } from "./index-freelancer/index-freelancer.component";
import { IndexHostingComponent } from "./index-hosting/index-hosting.component";
import { IndexHotelComponent } from "./index-hotel/index-hotel.component";
import { IndexInsuranceComponent } from "./index-insurance/index-insurance.component";
import { IndexIntegrationComponent } from "./index-integration/index-integration.component";
import { IndexItSolutionTwoComponent } from "./index-it-solution-two/index-it-solution-two.component";
import { IndexItSolutionComponent } from "./index-it-solution/index-it-solution.component";
import { IndexJobComponent } from "./index-job/index-job.component";
import { IndexLandingFourComponent } from "./index-landing-four/index-landing-four.component";
import { IndexLandingOneComponent } from "./index-landing-one/index-landing-one.component";
import { IndexLandingThreeComponent } from "./index-landing-three/index-landing-three.component";
import { IndexLandingTwoComponent } from "./index-landing-two/index-landing-two.component";
import { IndexMarketingComponent } from "./index-marketing/index-marketing.component";
import { IndexModernBusinessComponent } from "./index-modern-business/index-modern-business.component";
import { IndexOnlineLearningComponent } from "./index-online-learning/index-online-learning.component";
import { IndexPaymentsComponent } from "./index-payments/index-payments.component";
import { IndexPersonalComponent } from "./index-personal/index-personal.component";
import { IndexPortfolioComponent } from "./index-portfolio/index-portfolio.component";
import { IndexRealEstateComponent } from "./index-real-estate/index-real-estate.component";
import { IndexSaasComponent } from "./index-saas/index-saas.component";
import { IndexSeoAgencyComponent } from "./index-seo-agency/index-seo-agency.component";
import { IndexServicesComponent } from "./index-services/index-services.component";
import { IndexShopComponent } from "./index-shop/index-shop.component";
import { IndexSingleProductComponent } from "./index-single-product/index-single-product.component";
import { IndexSocialMarketingComponent } from "./index-social-marketing/index-social-marketing.component";
import { IndexSoftwareComponent } from "./index-software/index-software.component";
import { IndexStudioComponent } from "./index-studio/index-studio.component";
import { IndexTaskManagementComponent } from "./index-task-management/index-task-management.component";
import { IndexTravelComponent } from "./index-travel/index-travel.component";
import { IndexVideocallComponent } from "./index-videocall/index-videocall.component";
import { LoginComponent } from "./login/login.component";
import { PageAboutusTwoComponent } from "./page-aboutus-two/page-aboutus-two.component";
import { PageBlogDetailTwoComponent } from "./page-blog-detail-two/page-blog-detail-two.component";
import { PageBlogGridComponent } from "./page-blog-grid/page-blog-grid.component";
import { PageBlogListComponent } from "./page-blog-list/page-blog-list.component";
import { PageBlogSidebarComponent } from "./page-blog-sidebar/page-blog-sidebar.component";
import { PageCaseDetailComponent } from "./page-case-detail/page-case-detail.component";
import { PageContactDetailComponent } from "./page-contact-detail/page-contact-detail.component";
import { PageContactOneComponent } from "./page-contact-one/page-contact-one.component";
import { PageContactThreeComponent } from "./page-contact-three/page-contact-three.component";
import { PageContactTwoComponent } from "./page-contact-two/page-contact-two.component";
import { PageComingsoon2Component } from "./page-comingsoon2/page-comingsoon2.component";
import { PageErrorComponent } from "./page-error/page-error.component";
import { PageHistoryComponent } from "./page-history/page-history.component";
import { PageInvoiceComponent } from "./page-invoice/page-invoice.component";
import { PageJobApplyComponent } from "./page-job-apply/page-job-apply.component";
import { PageJobCandidateListComponent } from "./page-job-candidate-list/page-job-candidate-list.component";
import { PageJobCompanyListComponent } from "./page-job-company-list/page-job-company-list.component";
import { PageJobDetailComponent } from "./page-job-detail/page-job-detail.component";
import { PageJobsSidebarComponent } from "./page-jobs-sidebar/page-jobs-sidebar.component";
import { PageMaintenanceComponent } from "./page-maintenance/page-maintenance.component";
import { PagePricingComponent } from "./page-pricing/page-pricing.component";
import { PagePrivacyComponent } from "./page-privacy/page-privacy.component";
import { PageServicesComponent } from "./page-services/page-services.component";
import { PageTeamComponent } from "./page-team/page-team.component";
import { PageTermsComponent } from "./page-terms/page-terms.component";
import { PageThankyouComponent } from "./page-thankyou/page-thankyou.component";
import { PageWorkClassicComponent } from "./page-work-classic/page-work-classic.component";
import { PageWorkDetailComponent } from "./page-work-detail/page-work-detail.component";
import { PageWorkGridComponent } from "./page-work-grid/page-work-grid.component";
import { PageWorkMasonryComponent } from "./page-work-masonry/page-work-masonry.component";
import { PageWorkModernComponent } from "./page-work-modern/page-work-modern.component";
import { PortfolioClassicFourComponent } from "./portfolio-classic-four/portfolio-classic-four.component";
import { PortfolioClassicSixComponent } from "./portfolio-classic-six/portfolio-classic-six.component";
import { PortfolioClassicThreeComponent } from "./portfolio-classic-three/portfolio-classic-three.component";
import { PortfolioClassicTwoComponent } from "./portfolio-classic-two/portfolio-classic-two.component";
import { PortfolioDetailOneComponent } from "./portfolio-detail-one/portfolio-detail-one.component";
import { PortfolioDetailTwoComponent } from "./portfolio-detail-two/portfolio-detail-two.component";
import { PortfolioGridFiveComponent } from "./portfolio-grid-five/portfolio-grid-five.component";
import { PortfolioGridFourComponent } from "./portfolio-grid-four/portfolio-grid-four.component";
import { PortfolioGridSixComponent } from "./portfolio-grid-six/portfolio-grid-six.component";
import { PortfolioGridThreeComponent } from "./portfolio-grid-three/portfolio-grid-three.component";
import { PortfolioGridTwoComponent } from "./portfolio-grid-two/portfolio-grid-two.component";
import { PortfolioMasonryFiveComponent } from "./portfolio-masonry-five/portfolio-masonry-five.component";
import { PortfolioMasonryFourComponent } from "./portfolio-masonry-four/portfolio-masonry-four.component";
import { PortfolioMasonrySixComponent } from "./portfolio-masonry-six/portfolio-masonry-six.component";
import { PortfolioMasonryThreeComponent } from "./portfolio-masonry-three/portfolio-masonry-three.component";
import { PortfolioMasonryTwoComponent } from "./portfolio-masonry-two/portfolio-masonry-two.component";
import { PortfolioModernFourComponent } from "./portfolio-modern-four/portfolio-modern-four.component";
import { PortfolioModernSixComponent } from "./portfolio-modern-six/portfolio-modern-six.component";
import { PortfolioModernThreeComponent } from "./portfolio-modern-three/portfolio-modern-three.component";
import { PortfolioModernTwoComponent } from "./portfolio-modern-two/portfolio-modern-two.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { ShopMyaccountComponent } from "./shop-myaccount/shop-myaccount.component";
import { ShopProductsComponent } from "./shop-products/shop-products.component";

@NgModule({
  imports: [CommonModule, CoreRoutingModule, NgbModule, CarouselModule],
  declarations: [
    AccountMembersComponent,
    AccountMessagesComponent,
    AccountPaymentsComponent,
    AccountProfileComponent,
    AccountSettingComponent,
    AccountWorksComponent,
    AuthCoverLoginComponent,
    AuthCoverRePasswordComponent,
    AuthCoverSignupComponent,
    AuthLoginComponent,
    AuthLoginThreeComponent,
    AuthRePasswordComponent,
    AuthRePasswordThreeComponent,
    AuthSignupComponent,
    AuthSignupThreeComponent,
    ChangelogComponent,
    ComponentsComponent,
    DocumentationComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    ForumsComponent,
    ForumsCommentsComponent,
    ForumsTopicComponent,
    HelpcenterFaqsComponent,
    HelpcenterGuidesComponent,
    HelpcenterOverviewComponent,
    HelpcenterSupportRequestComponent,
    IndexAgencyComponent,
    IndexAppsComponent,
    IndexBlockchainComponent,
    IndexBlogComponent,
    IndexBusinessComponent,
    IndexCarRidingComponent,
    IndexClassicAppComponent,
    IndexClassicSaasComponent,
    IndexConstructionComponent,
    IndexCorporateComponent,
    IndexCourseComponent,
    IndexCoworkingComponent,
    IndexCryptoComponent,
    IndexCustomerComponent,
    IndexDeveloperComponent,
    IndexDigitalAgencyComponent,
    IndexEbookComponent,
    IndexEmailInboxComponent,
    IndexEnterpriseComponent,
    IndexEventComponent,
    IndexFinanceComponent,
    IndexFreelancerComponent,
    IndexHostingComponent,
    IndexHotelComponent,
    IndexInsuranceComponent,
    IndexIntegrationComponent,
    IndexItSolutionComponent,
    IndexItSolutionTwoComponent,
    IndexJobComponent,
    IndexLandingFourComponent,
    IndexLandingOneComponent,
    IndexLandingThreeComponent,
    IndexLandingTwoComponent,
    IndexMarketingComponent,
    IndexModernBusinessComponent,
    IndexOnlineLearningComponent,
    IndexPaymentsComponent,
    IndexPersonalComponent,
    IndexPortfolioComponent,
    IndexRealEstateComponent,
    IndexSaasComponent,
    IndexSeoAgencyComponent,
    IndexServicesComponent,
    IndexShopComponent,
    IndexSingleProductComponent,
    IndexSocialMarketingComponent,
    IndexSoftwareComponent,
    IndexStudioComponent,
    IndexTaskManagementComponent,
    IndexTravelComponent,
    IndexVideocallComponent,
    LoginComponent,
    PageTermsComponent,
    PageAboutusTwoComponent,
    PageBlogDetailTwoComponent,
    PageBlogDetailTwoComponent,
    PageBlogGridComponent,
    PageBlogListComponent,
    PageBlogSidebarComponent,
    PageCaseDetailComponent,
    PagePricingComponent,
    PageComingsoon2Component,
    PageContactDetailComponent,
    PageContactOneComponent,
    PageContactThreeComponent,
    PageContactTwoComponent,
    PageErrorComponent,
    PageHistoryComponent,
    PageInvoiceComponent,
    PageJobApplyComponent,
    PageJobCandidateListComponent,
    PageJobCompanyListComponent,
    PageJobCompanyListComponent,
    PageJobDetailComponent,
    PageJobsSidebarComponent,
    PageMaintenanceComponent,
    PagePricingComponent,
    PagePrivacyComponent,
    PageServicesComponent,
    PageTeamComponent,
    PageTermsComponent,
    PageThankyouComponent,
    PageWorkClassicComponent,
    PageWorkDetailComponent,
    PageWorkGridComponent,
    PageWorkMasonryComponent,
    PageWorkModernComponent,
    PortfolioClassicFourComponent,
    PortfolioClassicSixComponent,
    PortfolioClassicThreeComponent,
    PortfolioClassicTwoComponent,
    PortfolioDetailOneComponent,
    PortfolioDetailOneComponent,
    PortfolioDetailTwoComponent,
    PortfolioGridFiveComponent,
    PortfolioGridFourComponent,
    PortfolioGridSixComponent,
    PortfolioGridThreeComponent,
    PortfolioGridTwoComponent,
    PortfolioMasonryFiveComponent,
    PortfolioMasonryFourComponent,
    PortfolioMasonrySixComponent,
    PortfolioMasonryThreeComponent,
    PortfolioMasonryTwoComponent,
    PortfolioModernFourComponent,
    PortfolioModernSixComponent,
    PortfolioModernThreeComponent,
    PortfolioModernTwoComponent,
    ShopCartComponent,
    ShopMyaccountComponent,
    ShopCartComponent,
    ShopMyaccountComponent,
    ShopProductDetailComponent,
    ShopProductsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
