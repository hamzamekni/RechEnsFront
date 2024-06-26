import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeoAgencyComponent } from './components/pages/seo-agency/seo-agency.component';
import { AiStartupComponent } from './components/pages/ai-startup/ai-startup.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NavbarStyleFourComponent } from './components/common/navbar-style-four/navbar-style-four.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { CaseStudyComponent } from './components/pages/case-study/case-study.component';
import { CaseStudyDetailsComponent } from './components/pages/case-study-details/case-study-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneComponent, NgxDropzoneModule } from 'ngx-dropzone';
import { AdressComponent } from './components/pages/adress/adress.component';
import { EtudiantComponent } from './components/pages/etudiant/etudiant.component';
import { MatiereComponent } from './components/pages/matiere/matiere.component';
import { NiveauEtudeComponent } from './components/pages/niveau-etude/niveau-etude.component';
import { PaiementComponent } from './components/pages/paiement/paiement.component';
import { RecommendationComponent } from './components/pages/recommendation/recommendation.component';
import { RegionComponent } from './components/pages/region/region.component';
import { SupportCourComponent } from './components/pages/support-cour/support-cour.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { UserComponent } from './components/pages/user/user.component';
import { VilleComponent } from './components/pages/ville/ville.component';
import { CookieService } from 'ngx-cookie-service';
import { UpdateAdressComponent } from './components/update/update-adress/update-adress/update-adress.component';
import { UpdateDemandeDeCourComponent } from './components/update/update-demandeDeCour/update-demande-de-cour/update-demande-de-cour.component';
import { UpdateTeacherComponent } from './components/update/update-teacher/update-teacher.component';
import { UpdateMatiereComponent } from './components/update/update-matiere/update-matiere.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { DemandeDeCourComponent } from './components/pages/demande-de-cour/demande-de-cour.component';

@NgModule({
  declarations: [
    AppComponent,
    SeoAgencyComponent,
    AiStartupComponent,
    MachineLearningComponent,
    PreloaderComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    FooterStyleTwoComponent,
    NavbarStyleThreeComponent,
    AboutComponent,
    NavbarStyleFourComponent,
    AdressComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    CaseStudyComponent,
    CaseStudyDetailsComponent,
    ErrorComponent,
    SignInComponent,
    SignUpComponent,
    EtudiantComponent,
    MatiereComponent,
    NiveauEtudeComponent,
    PaiementComponent,
    RecommendationComponent,
    RegionComponent,
    SupportCourComponent,
    TeacherComponent,
    UserComponent,
    VilleComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ComingSoonComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    BlogDetailsComponent,
    BlogComponent,
    UpdateAdressComponent,
    UpdateDemandeDeCourComponent,
    UpdateTeacherComponent,
    UpdateMatiereComponent,
    ProfileComponent,
    DemandeDeCourComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
