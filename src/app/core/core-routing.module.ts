import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthCoverLoginComponent } from "./auth-cover-login/auth-cover-login.component";
import { AuthCoverRePasswordComponent } from "./auth-cover-re-password/auth-cover-re-password.component";
import { AuthCoverSignupComponent } from "./auth-cover-signup/auth-cover-signup.component";
import { AuthLoginThreeComponent } from "./auth-login-three/auth-login-three.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthRePasswordThreeComponent } from "./auth-re-password-three/auth-re-password-three.component";
import { AuthRePasswordComponent } from "./auth-re-password/auth-re-password.component";
import { AuthSignupThreeComponent } from "./auth-signup-three/auth-signup-three.component";
import { AuthSignupComponent } from "./auth-signup/auth-signup.component";
import { AccountMembersComponent } from "./account-members/account-members.component";
import { AccountMessagesComponent } from "./account-messages/account-messages.component";
import { AccountPaymentsComponent } from "./account-payments/account-payments.component";
import { AccountProfileComponent } from "./account-profile/account-profile.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { AccountWorksComponent } from "./account-works/account-works.component";
import { ForumsCommentsComponent } from "./forums-comments/forums-comments.component";
import { ForumsTopicComponent } from "./forums-topic/forums-topic.component";
import { ForumsComponent } from "./forums/forums.component";
import { HelpcenterFaqsComponent } from "./helpcenter-faqs/helpcenter-faqs.component";
import { HelpcenterGuidesComponent } from "./helpcenter-guides/helpcenter-guides.component";
import { HelpcenterOverviewComponent } from "./helpcenter-overview/helpcenter-overview.component";
import { HelpcenterSupportRequestComponent } from "./helpcenter-support-request/helpcenter-support-request.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { ShopCheckoutsComponent } from "./shop-checkouts/shop-checkouts.component";
import { ShopMyaccountComponent } from "./shop-myaccount/shop-myaccount.component";
import { ShopProductDetailComponent } from "./shop-product-detail/shop-product-detail.component";
import { ShopProductsComponent } from "./shop-products/shop-products.component";
import { ShopListsComponent } from "./shop-lists/shop-lists.component";
import { EmailAlertComponent } from "./email-alert/email-alert.component";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";
import { EmailInvoiceComponent } from "./email-invoice/email-invoice.component";
import { EmailPasswordResetComponent } from "./email-password-reset/email-password-reset.component";
import { PortfolioModernTwoComponent } from "./portfolio-modern-two/portfolio-modern-two.component";
import { PortfolioModernThreeComponent } from "./portfolio-modern-three/portfolio-modern-three.component";
import { PortfolioModernFourComponent } from "./portfolio-modern-four/portfolio-modern-four.component";
import { PortfolioModernFiveComponent } from "./portfolio-modern-five/portfolio-modern-five.component";
import { PortfolioModernSixComponent } from "./portfolio-modern-six/portfolio-modern-six.component";
import { PortfolioClassicTwoComponent } from "./portfolio-classic-two/portfolio-classic-two.component";
import { PortfolioClassicThreeComponent } from "./portfolio-classic-three/portfolio-classic-three.component";
import { PortfolioClassicFourComponent } from "./portfolio-classic-four/portfolio-classic-four.component";
import { PortfolioClassicFiveComponent } from "./portfolio-classic-five/portfolio-classic-five.component";
import { PortfolioClassicSixComponent } from "./portfolio-classic-six/portfolio-classic-six.component";
import { PortfolioGridTwoComponent } from "./portfolio-grid-two/portfolio-grid-two.component";
import { PortfolioGridThreeComponent } from "./portfolio-grid-three/portfolio-grid-three.component";
import { PortfolioGridFourComponent } from "./portfolio-grid-four/portfolio-grid-four.component";
import { PortfolioGridFiveComponent } from "./portfolio-grid-five/portfolio-grid-five.component";
import { PortfolioGridSixComponent } from "./portfolio-grid-six/portfolio-grid-six.component";
import { PortfolioMasonryTwoComponent } from "./portfolio-masonry-two/portfolio-masonry-two.component";
import { PortfolioMasonryThreeComponent } from "./portfolio-masonry-three/portfolio-masonry-three.component";
import { PortfolioMasonryFourComponent } from "./portfolio-masonry-four/portfolio-masonry-four.component";
import { PortfolioMasonryFiveComponent } from "./portfolio-masonry-five/portfolio-masonry-five.component";
import { PortfolioMasonrySixComponent } from "./portfolio-masonry-six/portfolio-masonry-six.component";
import { PortfolioDetailOneComponent } from "./portfolio-detail-one/portfolio-detail-one.component";
import { PortfolioDetailTwoComponent } from "./portfolio-detail-two/portfolio-detail-two.component";
import { PortfolioDetailThreeComponent } from "./portfolio-detail-three/portfolio-detail-three.component";
import { PortfolioDetailFourComponent } from "./portfolio-detail-four/portfolio-detail-four.component";

import { IndexAgencyComponent } from "./index-agency/index-agency.component";
import { IndexAppsComponent } from "./index-apps/index-apps.component";
import { IndexBlogComponent } from "./index-blog/index-blog.component";
import { IndexBusinessComponent } from "./index-business/index-business.component";
import { IndexCarRidingComponent } from "./index-car-riding/index-car-riding.component";
import { IndexClassicAppComponent } from "./index-classic-app/index-classic-app.component";
import { IndexClassicSaasComponent } from "./index-classic-saas/index-classic-saas.component";
import { IndexCorporateComponent } from "./index-corporate/index-corporate.component";
import { IndexCourseComponent } from "./index-course/index-course.component";
import { IndexCoworkingComponent } from "./index-coworking/index-coworking.component";
import { IndexCryptoComponent } from "./index-crypto/index-crypto.component";
import { IndexCustomerComponent } from "./index-customer/index-customer.component";
import { IndexDigitalAgencyComponent } from "./index-digital-agency/index-digital-agency.component";
import { IndexEbookComponent } from "./index-ebook/index-ebook.component";
import { IndexEmailInboxComponent } from "./index-email-inbox/index-email-inbox.component";
import { IndexEnterpriseComponent } from "./index-enterprise/index-enterprise.component";
import { IndexEventComponent } from "./index-event/index-event.component";
import { IndexHostingComponent } from "./index-hosting/index-hosting.component";
import { IndexHotelComponent } from "./index-hotel/index-hotel.component";
import { IndexConstructionComponent } from "./index-construction/index-construction.component";
import { IndexRealEstateComponent } from "./index-real-estate/index-real-estate.component";
import { IndexDeveloperComponent } from "./index-developer/index-developer.component";
import { IndexSeoAgencyComponent } from "./index-seo-agency/index-seo-agency.component";
import { IndexHospitalComponent } from "./index-hospital/index-hospital.component";
import { IndexFinanceComponent } from "./index-finance/index-finance.component";
import { IndexVideocallComponent } from "./index-videocall/index-videocall.component";
import { IndexItSolutionTwoComponent } from "./index-it-solution-two/index-it-solution-two.component";
import { IndexFreelancerComponent } from "./index-freelancer/index-freelancer.component";
import { IndexBlockchainComponent } from "./index-blockchain/index-blockchain.component";
import { IndexCryptoTwoComponent } from "./index-crypto-two/index-crypto-two.component";
import { IndexIntegrationComponent } from "./index-integration/index-integration.component";
import { IndexInsuranceComponent } from "./index-insurance/index-insurance.component";
import { IndexItSolutionComponent } from "./index-it-solution/index-it-solution.component";
import { IndexJobComponent } from "./index-job/index-job.component";
import { IndexLandingOneComponent } from "./index-landing-one/index-landing-one.component";
import { IndexLandingThreeComponent } from "./index-landing-three/index-landing-three.component";
import { IndexLandingTwoComponent } from "./index-landing-two/index-landing-two.component";
import { IndexLandingFourComponent } from "./index-landing-four/index-landing-four.component";
import { IndexMarketingComponent } from "./index-marketing/index-marketing.component";
import { IndexModernBusinessComponent } from "./index-modern-business/index-modern-business.component";
import { IndexOnlineLearningComponent } from "./index-online-learning/index-online-learning.component";
import { IndexPaymentsComponent } from "./index-payments/index-payments.component";
import { IndexPersonalComponent } from "./index-personal/index-personal.component";
import { IndexPortfolioComponent } from "./index-portfolio/index-portfolio.component";
import { IndexSaasComponent } from "./index-saas/index-saas.component";
import { IndexServicesComponent } from "./index-services/index-services.component";
import { IndexShopComponent } from "./index-shop/index-shop.component";
import { IndexSingleProductComponent } from "./index-single-product/index-single-product.component";
import { IndexSocialMarketingComponent } from "./index-social-marketing/index-social-marketing.component";
import { IndexSoftwareComponent } from "./index-software/index-software.component";
import { IndexStudioComponent } from "./index-studio/index-studio.component";
import { IndexTaskManagementComponent } from "./index-task-management/index-task-management.component";
import { IndexTravelComponent } from "./index-travel/index-travel.component";
import { PageAboutusComponent } from "./page-aboutus/page-aboutus.component";
import { PageAboutusTwoComponent } from "./page-aboutus-two/page-aboutus-two.component";
import { PageBlogDetailComponent } from "./page-blog-detail/page-blog-detail.component";
import { PageBlogGridComponent } from "./page-blog-grid/page-blog-grid.component";
import { PageBlogListComponent } from "./page-blog-list/page-blog-list.component";
import { PageBlogListSidebarComponent } from "./page-blog-list-sidebar/page-blog-list-sidebar.component";
import { PageBlogSidebarComponent } from "./page-blog-sidebar/page-blog-sidebar.component";
import { PageCaseDetailComponent } from "./page-case-detail/page-case-detail.component";
import { PageComingsoonComponent } from "./page-comingsoon/page-comingsoon.component";
import { PageComingsoon2Component } from "./page-comingsoon2/page-comingsoon2.component";
import { PageContactDetailComponent } from "./page-contact-detail/page-contact-detail.component";
import { PageContactOneComponent } from "./page-contact-one/page-contact-one.component";
import { PageContactThreeComponent } from "./page-contact-three/page-contact-three.component";
import { PageContactTwoComponent } from "./page-contact-two/page-contact-two.component";
import { PageErrorComponent } from "./page-error/page-error.component";
import { PageHistoryComponent } from "./page-history/page-history.component";
import { PageInvoiceComponent } from "./page-invoice/page-invoice.component";
import { PageJobApplyComponent } from "./page-job-apply/page-job-apply.component";
import { PageJobCandidateComponent } from "./page-job-candidate/page-job-candidate.component";
import { PageJobCompanyComponent } from "./page-job-company/page-job-company.component";
import { PageJobDetailComponent } from "./page-job-detail/page-job-detail.component";
import { PageJobsComponent } from "./page-jobs/page-jobs.component";
import { PageJobsSidebarComponent } from "./page-jobs-sidebar/page-jobs-sidebar.component";
import { PageMaintenanceComponent } from "./page-maintenance/page-maintenance.component";
import { PagePricingComponent } from "./page-pricing/page-pricing.component";
import { PagePrivacyComponent } from "./page-privacy/page-privacy.component";
import { PageServicesComponent } from "./page-services/page-services.component";
import { PageTeamComponent } from "./page-team/page-team.component";
import { PageTermsComponent } from "./page-terms/page-terms.component";
import { PageWorkClassicComponent } from "./page-work-classic/page-work-classic.component";
import { PageWorkDetailComponent } from "./page-work-detail/page-work-detail.component";
import { PageWorkGridComponent } from "./page-work-grid/page-work-grid.component";
import { PageWorkMasonryComponent } from "./page-work-masonry/page-work-masonry.component";
import { PageWorkModernComponent } from "./page-work-modern/page-work-modern.component";
import { PageJobCompanyListComponent } from "./page-job-company-list/page-job-company-list.component";
import { PageBlogDetailTwoComponent } from "./page-blog-detail-two/page-blog-detail-two.component";
import { PageCasesComponent } from "./page-cases/page-cases.component";
import { PageJobCandidateListComponent } from "./page-job-candidate-list/page-job-candidate-list.component";
import { PageThankyouComponent } from "./page-thankyou/page-thankyou.component";

import { ChangelogComponent } from "./changelog/changelog.component";
import { ComponentsComponent } from "./components/components.component";
import { DocumentationComponent } from "./documentation/documentation.component";

const routes: Routes = [
  { path: "changelog", component: ChangelogComponent },
  { path: "components", component: ComponentsComponent },
  { path: "documentation", component: DocumentationComponent },
  { path: "index-agency", component: IndexAgencyComponent },
  { path: "index-apps", component: IndexAppsComponent },
  { path: "index-blog", component: IndexBlogComponent },
  { path: "index-business", component: IndexBusinessComponent },
  { path: "index-car-riding", component: IndexCarRidingComponent },
  { path: "index-classic-app", component: IndexClassicAppComponent },
  { path: "index-classic-saas", component: IndexClassicSaasComponent },
  { path: "index-corporate", component: IndexCorporateComponent },
  { path: "index-course", component: IndexCourseComponent },
  { path: "index-coworking", component: IndexCoworkingComponent },
  { path: "index-crypto", component: IndexCryptoComponent },
  { path: "index-customer", component: IndexCustomerComponent },
  { path: "index-digital-agency", component: IndexDigitalAgencyComponent },
  { path: "index-ebook", component: IndexEbookComponent },
  { path: "index-email-inbox", component: IndexEmailInboxComponent },
  { path: "index-enterprise", component: IndexEnterpriseComponent },
  { path: "index-event", component: IndexEventComponent },
  { path: "index-hosting", component: IndexHostingComponent },
  { path: "index-hotel", component: IndexHotelComponent },
  { path: "index-construction", component: IndexConstructionComponent },
  { path: "index-real-estate", component: IndexRealEstateComponent },
  { path: "index-developer", component: IndexDeveloperComponent },
  { path: "index-seo-agency", component: IndexSeoAgencyComponent },
  { path: "index-hospital", component: IndexHospitalComponent },
  { path: "index-finance", component: IndexFinanceComponent },
  { path: "index-videocall", component: IndexVideocallComponent },
  { path: "index-it-solution-two", component: IndexItSolutionTwoComponent },
  { path: "index-freelancer", component: IndexFreelancerComponent },
  { path: "index-blockchain", component: IndexBlockchainComponent },
  { path: "index-crypto-two", component: IndexCryptoTwoComponent },
  { path: "index-integration", component: IndexIntegrationComponent },
  { path: "index-insurance", component: IndexInsuranceComponent },
  { path: "index-it-solution", component: IndexItSolutionComponent },
  { path: "index-job", component: IndexJobComponent },
  { path: "index-landing-one", component: IndexLandingOneComponent },
  { path: "index-landing-three", component: IndexLandingThreeComponent },
  { path: "index-landing-two", component: IndexLandingTwoComponent },
  { path: "index-landing-four", component: IndexLandingFourComponent },
  { path: "index-marketing", component: IndexMarketingComponent },
  { path: "index-modern-business", component: IndexModernBusinessComponent },
  { path: "index-online-learning", component: IndexOnlineLearningComponent },
  { path: "index-payments", component: IndexPaymentsComponent },
  { path: "index-personal", component: IndexPersonalComponent },
  { path: "index-portfolio", component: IndexPortfolioComponent },
  { path: "index-saas", component: IndexSaasComponent },
  { path: "index-services", component: IndexServicesComponent },
  { path: "index-shop", component: IndexShopComponent },
  { path: "index-single-product", component: IndexSingleProductComponent },
  { path: "index-social-marketing", component: IndexSocialMarketingComponent },
  { path: "index-software", component: IndexSoftwareComponent },
  { path: "index-studio", component: IndexStudioComponent },
  { path: "index-task-management", component: IndexTaskManagementComponent },
  { path: "index-travel", component: IndexTravelComponent },
  { path: "page-aboutus", component: PageAboutusComponent },
  { path: "page-aboutus-two", component: PageAboutusTwoComponent },
  { path: "page-blog-detail", component: PageBlogDetailComponent },
  { path: "page-blog-grid", component: PageBlogGridComponent },
  { path: "page-blog-list", component: PageBlogListComponent },
  { path: "page-blog-list-sidebar", component: PageBlogListSidebarComponent },
  { path: "page-blog-sidebar", component: PageBlogSidebarComponent },
  { path: "page-case-detail", component: PageCaseDetailComponent },
  { path: "page-cases", component: PageCasesComponent },
  { path: "page-contact-detail", component: PageContactDetailComponent },
  { path: "page-contact-one", component: PageContactOneComponent },
  { path: "page-contact-three", component: PageContactThreeComponent },
  { path: "page-contact-two", component: PageContactTwoComponent },
  { path: "page-history", component: PageHistoryComponent },
  { path: "page-invoice", component: PageInvoiceComponent },
  { path: "page-job-apply", component: PageJobApplyComponent },
  { path: "page-job-candidate", component: PageJobCandidateComponent },
  { path: "page-job-company", component: PageJobCompanyComponent },
  { path: "page-job-detail", component: PageJobDetailComponent },
  { path: "page-jobs", component: PageJobsComponent },
  { path: "page-job-company-list", component: PageJobCompanyListComponent },
  { path: "page-job-candidate-list", component: PageJobCandidateListComponent },
  { path: "page-jobs-sidebar", component: PageJobsSidebarComponent },
  { path: "page-pricing", component: PagePricingComponent },
  { path: "page-privacy", component: PagePrivacyComponent },
  { path: "page-services", component: PageServicesComponent },
  { path: "page-team", component: PageTeamComponent },
  { path: "page-terms", component: PageTermsComponent },
  { path: "page-work-classic", component: PageWorkClassicComponent },
  { path: "page-work-detail", component: PageWorkDetailComponent },
  { path: "page-work-grid", component: PageWorkGridComponent },
  { path: "page-work-masonry", component: PageWorkMasonryComponent },
  { path: "page-work-modern", component: PageWorkModernComponent },
  { path: "page-blog-detail-two", component: PageBlogDetailTwoComponent },
  { path: "page-comingsoon", component: PageComingsoonComponent },
  { path: "page-comingsoon-two", component: PageComingsoon2Component },
  { path: "page-error", component: PageErrorComponent },
  { path: "page-thankyou", component: PageThankyouComponent },
  { path: "page-maintenance", component: PageMaintenanceComponent },
  { path: "changelog", component: ChangelogComponent },
  { path: "components", component: ComponentsComponent },
  { path: "documentation", component: DocumentationComponent },
  { path: "index-agency", component: IndexAgencyComponent },
  { path: "index-apps", component: IndexAppsComponent },
  { path: "index-blog", component: IndexBlogComponent },
  { path: "index-business", component: IndexBusinessComponent },
  { path: "index-car-riding", component: IndexCarRidingComponent },
  { path: "index-classic-app", component: IndexClassicAppComponent },
  { path: "index-classic-saas", component: IndexClassicSaasComponent },
  { path: "index-corporate", component: IndexCorporateComponent },
  { path: "index-course", component: IndexCourseComponent },
  { path: "index-coworking", component: IndexCoworkingComponent },
  { path: "index-crypto", component: IndexCryptoComponent },
  { path: "index-customer", component: IndexCustomerComponent },
  { path: "index-digital-agency", component: IndexDigitalAgencyComponent },
  { path: "index-ebook", component: IndexEbookComponent },
  { path: "index-email-inbox", component: IndexEmailInboxComponent },
  { path: "index-enterprise", component: IndexEnterpriseComponent },
  { path: "index-event", component: IndexEventComponent },
  { path: "index-hosting", component: IndexHostingComponent },
  { path: "index-hotel", component: IndexHotelComponent },
  { path: "index-construction", component: IndexConstructionComponent },
  { path: "index-real-estate", component: IndexRealEstateComponent },
  { path: "index-developer", component: IndexDeveloperComponent },
  { path: "index-seo-agency", component: IndexSeoAgencyComponent },
  { path: "index-hospital", component: IndexHospitalComponent },
  { path: "index-finance", component: IndexFinanceComponent },
  { path: "index-videocall", component: IndexVideocallComponent },
  { path: "index-it-solution-two", component: IndexItSolutionTwoComponent },
  { path: "index-freelancer", component: IndexFreelancerComponent },
  { path: "index-blockchain", component: IndexBlockchainComponent },
  { path: "index-crypto-two", component: IndexCryptoTwoComponent },
  { path: "index-integration", component: IndexIntegrationComponent },
  { path: "index-insurance", component: IndexInsuranceComponent },
  { path: "index-it-solution", component: IndexItSolutionComponent },
  { path: "index-job", component: IndexJobComponent },
  { path: "index-landing-one", component: IndexLandingOneComponent },
  { path: "index-landing-three", component: IndexLandingThreeComponent },
  { path: "index-landing-two", component: IndexLandingTwoComponent },
  { path: "index-landing-four", component: IndexLandingFourComponent },
  { path: "index-marketing", component: IndexMarketingComponent },
  {
    path: "index-modern-business",
    component: IndexModernBusinessComponent,
  },

  {
    path: "index-online-learning",
    component: IndexOnlineLearningComponent,
  },
  { path: "index-payments", component: IndexPaymentsComponent },
  { path: "index-personal", component: IndexPersonalComponent },
  { path: "index-portfolio", component: IndexPortfolioComponent },
  { path: "index-saas", component: IndexSaasComponent },
  { path: "index-services", component: IndexServicesComponent },
  { path: "index-shop", component: IndexShopComponent },
  { path: "index-single-product", component: IndexSingleProductComponent },
  {
    path: "index-social-marketing",
    component: IndexSocialMarketingComponent,
  },
  { path: "index-software", component: IndexSoftwareComponent },
  { path: "index-studio", component: IndexStudioComponent },
  {
    path: "index-task-management",
    component: IndexTaskManagementComponent,
  },
  { path: "index-travel", component: IndexTravelComponent },
  { path: "page-aboutus", component: PageAboutusComponent },
  { path: "page-aboutus-two", component: PageAboutusTwoComponent },
  { path: "page-blog-detail", component: PageBlogDetailComponent },
  { path: "page-blog-grid", component: PageBlogGridComponent },
  { path: "page-blog-list", component: PageBlogListComponent },
  {
    path: "page-blog-list-sidebar",
    component: PageBlogListSidebarComponent,
  },
  { path: "page-blog-sidebar", component: PageBlogSidebarComponent },
  { path: "page-case-detail", component: PageCaseDetailComponent },
  { path: "page-cases", component: PageCasesComponent },
  { path: "page-contact-detail", component: PageContactDetailComponent },
  { path: "page-contact-one", component: PageContactOneComponent },
  { path: "page-contact-three", component: PageContactThreeComponent },
  { path: "page-contact-two", component: PageContactTwoComponent },
  { path: "page-history", component: PageHistoryComponent },
  { path: "page-invoice", component: PageInvoiceComponent },
  { path: "page-job-apply", component: PageJobApplyComponent },
  { path: "page-job-candidate", component: PageJobCandidateComponent },
  { path: "page-job-company", component: PageJobCompanyComponent },
  { path: "page-job-detail", component: PageJobDetailComponent },
  { path: "page-jobs", component: PageJobsComponent },
  { path: "page-job-company-list", component: PageJobCompanyListComponent },
  {
    path: "page-job-candidate-list",
    component: PageJobCandidateListComponent,
  },
  { path: "page-jobs-sidebar", component: PageJobsSidebarComponent },
  { path: "page-pricing", component: PagePricingComponent },
  { path: "page-privacy", component: PagePrivacyComponent },
  { path: "page-services", component: PageServicesComponent },
  { path: "page-team", component: PageTeamComponent },
  { path: "page-terms", component: PageTermsComponent },
  { path: "page-work-classic", component: PageWorkClassicComponent },
  { path: "page-work-detail", component: PageWorkDetailComponent },
  { path: "page-work-grid", component: PageWorkGridComponent },
  { path: "page-work-masonry", component: PageWorkMasonryComponent },
  { path: "page-work-modern", component: PageWorkModernComponent },
  { path: "page-blog-detail-two", component: PageBlogDetailTwoComponent },
  { path: "page-comingsoon", component: PageComingsoonComponent },
  { path: "page-comingsoon2", component: PageComingsoon2Component },
  { path: "page-error", component: PageErrorComponent },
  { path: "page-thankyou", component: PageThankyouComponent },
  { path: "page-maintenance", component: PageMaintenanceComponent },
  { path: "account-messages", component: AccountMessagesComponent },
  { path: "account-members", component: AccountMembersComponent },
  { path: "account-payments", component: AccountPaymentsComponent },
  { path: "account-profile", component: AccountProfileComponent },
  { path: "account-setting", component: AccountSettingComponent },
  { path: "account-works", component: AccountWorksComponent },
  { path: "forums", component: ForumsComponent },
  { path: "forums-comments", component: ForumsCommentsComponent },
  { path: "forums-topic", component: ForumsTopicComponent },
  { path: "helpcenter-faqs", component: HelpcenterFaqsComponent },
  { path: "helpcenter-guides", component: HelpcenterGuidesComponent },
  { path: "helpcenter-overview", component: HelpcenterOverviewComponent },
  {
    path: "helpcenter-support-request",
    component: HelpcenterSupportRequestComponent,
  },
  { path: "shop-cart", component: ShopCartComponent },
  { path: "shop-checkouts", component: ShopCheckoutsComponent },
  { path: "shop-myaccount", component: ShopMyaccountComponent },
  { path: "shop-product-detail", component: ShopProductDetailComponent },
  { path: "shop-products", component: ShopProductsComponent },
  { path: "shop-lists", component: ShopListsComponent },
  // { path: "widget", component: WidgetComponent },
  { path: "portfolio-modern-two", component: PortfolioModernTwoComponent },
  { path: "portfolio-modern-three", component: PortfolioModernThreeComponent },
  { path: "portfolio-modern-four", component: PortfolioModernFourComponent },
  { path: "portfolio-modern-five", component: PortfolioModernFiveComponent },
  { path: "portfolio-modern-six", component: PortfolioModernSixComponent },
  { path: "portfolio-classic-two", component: PortfolioClassicTwoComponent },
  {
    path: "portfolio-classic-three",
    component: PortfolioClassicThreeComponent,
  },
  { path: "portfolio-classic-four", component: PortfolioClassicFourComponent },
  { path: "portfolio-classic-five", component: PortfolioClassicFiveComponent },
  { path: "portfolio-classic-six", component: PortfolioClassicSixComponent },
  { path: "portfolio-grid-two", component: PortfolioGridTwoComponent },
  { path: "portfolio-grid-three", component: PortfolioGridThreeComponent },
  { path: "portfolio-grid-four", component: PortfolioGridFourComponent },
  { path: "portfolio-grid-five", component: PortfolioGridFiveComponent },
  { path: "portfolio-grid-six", component: PortfolioGridSixComponent },
  { path: "portfolio-masonry-two", component: PortfolioMasonryTwoComponent },
  {
    path: "portfolio-masonry-three",
    component: PortfolioMasonryThreeComponent,
  },
  { path: "portfolio-masonry-four", component: PortfolioMasonryFourComponent },
  { path: "portfolio-masonry-five", component: PortfolioMasonryFiveComponent },
  { path: "portfolio-masonry-six", component: PortfolioMasonrySixComponent },
  { path: "portfolio-detail-one", component: PortfolioDetailOneComponent },
  { path: "portfolio-detail-two", component: PortfolioDetailTwoComponent },
  { path: "portfolio-detail-three", component: PortfolioDetailThreeComponent },
  { path: "portfolio-detail-four", component: PortfolioDetailFourComponent },
  { path: "auth-login", component: AuthLoginComponent },
  { path: "auth-cover-login", component: AuthCoverLoginComponent },
  { path: "auth-cover-re-password", component: AuthCoverRePasswordComponent },
  { path: "auth-cover-signup", component: AuthCoverSignupComponent },
  { path: "auth-login-three", component: AuthLoginThreeComponent },
  { path: "auth-re-password", component: AuthRePasswordComponent },
  { path: "auth-re-password-three", component: AuthRePasswordThreeComponent },
  { path: "auth-signup", component: AuthSignupComponent },
  { path: "auth-signup-three", component: AuthSignupThreeComponent },
  { path: "email-alert", component: EmailAlertComponent },
  { path: "email-confirmation", component: EmailConfirmationComponent },
  { path: "email-invoice", component: EmailInvoiceComponent },
  { path: "email-password-reset", component: EmailPasswordResetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
