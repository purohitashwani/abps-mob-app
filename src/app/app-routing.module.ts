import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash/splash.module').then( m => m.SplashModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-setting/profile-setting.module').then( m => m.ProfileSettingModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackModule)
  },
  /// new 
  {
    path: 'apply-details',
    loadChildren: () => import('./pages/apply/apply-details/apply-details.module').then( m => m.ApplyDetailsModule)
  },  {
    path: 'appliy-list',
    loadChildren: () => import('./pages/apply/apply-list/apply-list.module').then( m => m.ApplyListModule)
  },  {
    path: 'art-details',
    loadChildren: () => import('./pages/art/art-details/art-details.module').then( m => m.ArtDetailsModule)
  },  {
    path: 'art-list',
    loadChildren: () => import('./pages/art/art-list/art-list.module').then( m => m.ArtListModule)
  },  {
    path: 'celebrity-details',
    loadChildren: () => import('./pages/celebrity/celebrity-details/celebrity-details.module').then( m => m.CelebrityDetailsModule)
  },  {
    path: 'celebrity-list',
    loadChildren: () => import('./pages/celebrity/celebrity-list/celebrity-list.module').then( m => m.CelebrityListModule)
  },  {
    path: 'devotional-details',
    loadChildren: () => import('./pages/devotional/devotional-details/devotional-details.module').then( m => m.DevotionalDetailsModule)
  },  {
    path: 'devotional-list',
    loadChildren: () => import('./pages/devotional/devotional-list/devotional-list.module').then( m => m.DevotionalListModule)
  },  {
    path: 'donation-details',
    loadChildren: () => import('./pages/donation/donation-details/donation-details.module').then( m => m.DonationDetailsModule)
  },  {
    path: 'donation-list',
    loadChildren: () => import('./pages/donation/donation-list/donation-list.module').then( m => m.DonationListModule)
  },  {
    path: 'education-details',
    loadChildren: () => import('./pages/education/education-details/education-details.module').then( m => m.EducationDetailsModule)
  },  {
    path: 'education-list',
    loadChildren: () => import('./pages/education/education-list/education-list.module').then( m => m.EducationListModule)
  },  {
    path: 'elections-details',
    loadChildren: () => import('./pages/elections/elections-details/elections-details.module').then( m => m.ElectionsDetailsModule)
  },  {
    path: 'elections-list',
    loadChildren: () => import('./pages/elections/elections-list/elections-list.module').then( m => m.ElectionsListModule)
  },  {
    path: 'events-details',
    loadChildren: () => import('./pages/events/events-details/events-details.module').then( m => m.EventsDetailsModule)
  },  {
    path: 'events-list',
    loadChildren: () => import('./pages/events/events-list/events-list.module').then( m => m.EventsListModule)
  },  {
    path: 'health-details',
    loadChildren: () => import('./pages/health/health-details/health-details.module').then( m => m.HealthDetailsModule)
  },  {
    path: 'health-list',
    loadChildren: () => import('./pages/health/health-list/health-list.module').then( m => m.HealthListModule)
  },  {
    path: 'jobs-details',
    loadChildren: () => import('./pages/jobs/jobs-details/jobs-details.module').then( m => m.JobsDetailsModule)
  },  {
    path: 'jobs-list',
    loadChildren: () => import('./pages/jobs/jobs-list/jobs-list.module').then( m => m.JobsListModule)
  },  {
    path: 'matrimony-details',
    loadChildren: () => import('./pages/matrimony/matrimony-details/matrimony-details.module').then( m => m.MatrimonyDetailsModule)
  },  {
    path: 'matrimony-list',
    loadChildren: () => import('./pages/matrimony/matrimony-list/matrimony-list.module').then( m => m.MatrimonyListModule)
  },  {
    path: 'members-details',
    loadChildren: () => import('./pages/members/members-details/members-details.module').then( m => m.MembersDetailsModule)
  },  {
    path: 'members-list',
    loadChildren: () => import('./pages/members/members-list/members-list.module').then( m => m.MembersListModule)
  },  {
    path: 'news-details',
    loadChildren: () => import('./pages/news/news-details/news-details.module').then( m => m.NewsDetailsModule)
  },  {
    path: 'news-list',
    loadChildren: () => import('./pages/news/news-list/news-list.module').then( m => m.NewsListModule)
  },  {
    path: 'nri-details',
    loadChildren: () => import('./pages/nri/nri-details/nri-details.module').then( m => m.NriDetailsModule)
  },  {
    path: 'nri-list',
    loadChildren: () => import('./pages/nri/nri-list/nri-list.module').then( m => m.NriListModule)
  },  {
    path: 'org-details',
    loadChildren: () => import('./pages/org/org-details/org-details.module').then( m => m.OrgDetailsModule)
  },  {
    path: 'org-list',
    loadChildren: () => import('./pages/org/org-list/org-list.module').then( m => m.OrgListModule)
  },  {
    path: 'psb-details',
    loadChildren: () => import('./pages/psb/psb-details/psb-details.module').then( m => m.PsbDetailsModule)
  },  {
    path: 'psb-list',
    loadChildren: () => import('./pages/psb/psb-list/psb-list.module').then( m => m.PsbListModule)
  },  {
    path: 'quizes-details',
    loadChildren: () => import('./pages/quizes/quizes-details/quizes-details.module').then( m => m.QuizesDetailsModule)
  },  {
    path: 'quizes-list',
    loadChildren: () => import('./pages/quizes/quizes-list/quizes-list.module').then( m => m.QuizesListModule)
  },  {
    path: 'sports-details',
    loadChildren: () => import('./pages/sports/sports-details/sports-details.module').then( m => m.SportsDetailsModule)
  },  {
    path: 'sports-list',
    loadChildren: () => import('./pages/sports/sports-list/sports-list.module').then( m => m.SportsListModule)
  },

  {
    path: 'work-in-progress',
    loadChildren: () => import('./pages/work-in-progress/work-in-progress.module').then( m => m.WorkInProgressModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}