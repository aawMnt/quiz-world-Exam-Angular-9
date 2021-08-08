import { ExamAboutUsComponent } from './Components/exam-about-us/exam-about-us.component';
import { ViewSingalQuizComponent } from './Dashboard/user-dash/view-singal-quiz/view-singal-quiz.component';
import { ExamHistoryofUserComponent } from './Dashboard/user-dash/exam-historyof-user/exam-historyof-user.component';
import { QuizStartComponent } from './Dashboard/user-dash/quiz-start/quiz-start.component';
import { InstuctionsQuizComponent } from './Dashboard/user-dash/instuctions-quiz/instuctions-quiz.component';
import { AddQuizComponent } from './Dashboard/admin-dash/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './Dashboard/admin-dash/view-quiz/view-quiz.component';
import { UpdateQuizComponent } from './Dashboard/admin-dash/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './Dashboard/admin-dash/add-question/add-question.component';
import { QuestionComponent } from './Dashboard/admin-dash/question/question.component';
import { AddCategoriesComponent } from './Dashboard/admin-dash/add-categories/add-categories.component';
import { CategoriesComponent } from './Dashboard/admin-dash/categories/categories.component';
import { WellcomeComponent } from './Dashboard/admin-dash/wellcome/wellcome.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UserGuardGuard } from './Guards/user-guard.guard';
import { UserDashComponent } from './Dashboard/user-dash/user-dash.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ExamLoginComponent } from './LoginSignup/exam-login/exam-login.component';
import { SignupComponent } from './LoginSignup/signup/signup.component';
import { AdminDashComponent } from './Dashboard/admin-dash/admin-dash.component';
import { AdminGuardGuard } from './Guards/admin-guard.guard';
import { UpdateQuestionsComponent } from './Dashboard/admin-dash/update-questions/update-questions.component';
import { UserHomeComponent } from './Dashboard/user-dash/user-home/user-home.component';
import { UsersExamHistoryComponent } from './Dashboard/admin-dash/users-exam-history/users-exam-history.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',

  },
  {
    path: 'signup', component: SignupComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: ExamLoginComponent, pathMatch: 'full'
  },
  {
   path:'about', component:ExamAboutUsComponent,pathMatch: 'full'
  },

  // **********************************************************user routes*********************************************************************
  {
    path: 'userDashboard', component: UserDashComponent,
    canActivate: [UserGuardGuard],

    children: [

      {
        path: ':id', component: UserHomeComponent,
      },
      {
        path: 'ins/:id', component: InstuctionsQuizComponent
      },
      {
        path:'view-quiz/:id/:title',component:ViewSingalQuizComponent
      },
    
      ]

  },
  {
    path: 'start/:id/:maxMarks/:title', component: QuizStartComponent, canActivate: [UserGuardGuard],
  },
  {
    path:'history/:id',component:ExamHistoryofUserComponent,canActivate: [UserGuardGuard]
  },
  

  // ********************************************************Admin route*************************************************************************************
  {
    path: 'adminDashboard', component: AdminDashComponent, canActivate: [AdminGuardGuard],
    children: [
      {
        path: '', component: WellcomeComponent,
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'categories', component: CategoriesComponent
      },
      {
        path: 'add-categories', component: AddCategoriesComponent
      },
      {
        path: 'view-quiz', component: ViewQuizComponent
      },
      {
        path: 'add-quiz', component: AddQuizComponent
      },
      {
        path: 'question/:id/:title', component: QuestionComponent
      },
      {
        path: 'add-question/:id/:title', component: AddQuestionComponent
      },
      {
        path: 'update-quiz/:id', component: UpdateQuizComponent
      },
      {
        path: 'update-question/:id/:quizid/:title', component: UpdateQuestionsComponent
      },
      {
        path:'usersHistory' , component:UsersExamHistoryComponent
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
