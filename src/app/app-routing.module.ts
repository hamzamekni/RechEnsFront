import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeoAgencyComponent } from './components/pages/seo-agency/seo-agency.component';
import { AiStartupComponent } from './components/pages/ai-startup/ai-startup.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { AboutComponent } from './components/pages/about/about.component';
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
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AuthGuard } from './AuthGuard';
import { AdressComponent } from './components/pages/adress/adress.component';
import { RegionComponent } from './components/pages/region/region.component';
import { VilleComponent } from './components/pages/ville/ville.component';
import { UserComponent } from './components/pages/user/user.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { SupportCourComponent } from './components/pages/support-cour/support-cour.component';
import { RecommendationComponent } from './components/pages/recommendation/recommendation.component';
import { PaiementComponent } from './components/pages/paiement/paiement.component';
import { NiveauEtudeComponent } from './components/pages/niveau-etude/niveau-etude.component';
import { MatiereComponent } from './components/pages/matiere/matiere.component';
import { EtudiantComponent } from './components/pages/etudiant/etudiant.component';

const routes: Routes = [
    {path: '', component: SignInComponent},
    {path: 'app-seo-agency', component: SeoAgencyComponent, canActivate: [AuthGuard]},
    {path: 'ai-startup', component: AiStartupComponent},
    {path: 'machine-learning', component: MachineLearningComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    
    {path: 'case-study', component: CaseStudyComponent},
    {path: 'app-adress', component: AdressComponent},
    {path: 'app-region', component: RegionComponent},
    {path: 'app-ville', component: VilleComponent},
    {path: 'app-user', component: UserComponent},
    {path: 'app-teacher', component: TeacherComponent},
    {path: 'app-support-cour', component: SupportCourComponent},
    {path: 'app-recommendation', component: RecommendationComponent},
    {path: 'app-paiement', component: PaiementComponent},
    {path: 'app-niveau-etude', component: NiveauEtudeComponent},
    {path: 'app-matiere', component: MatiereComponent},
    {path: 'app-etudiant', component: EtudiantComponent},

    {path: 'case-study-details', component: CaseStudyDetailsComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    

    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }