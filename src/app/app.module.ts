import { SidebarComponent } from './Dashboard/admin-dash/sidebar/sidebar.component';
import { authInterceptorProviders } from './Services/auth.Interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './LoginSignup/signup/signup.component';
import { ExamLoginComponent } from './LoginSignup/exam-login/exam-login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './Components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UserDashComponent } from './Dashboard/user-dash/user-dash.component';
import { AdminDashComponent } from './Dashboard/admin-dash/admin-dash.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { WellcomeComponent } from './Dashboard/admin-dash/wellcome/wellcome.component';
import { MatTableModule } from '@angular/material/table';
import { CategoriesComponent } from './Dashboard/admin-dash/categories/categories.component';
import { AddCategoriesComponent } from './Dashboard/admin-dash/add-categories/add-categories.component';
import { QuestionComponent } from './Dashboard/admin-dash/question/question.component';
import { AddQuestionComponent } from './Dashboard/admin-dash/add-question/add-question.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './Dashboard/admin-dash/update-quiz/update-quiz.component';
import { ViewQuizComponent } from './Dashboard/admin-dash/view-quiz/view-quiz.component';
import { AddQuizComponent } from './Dashboard/admin-dash/add-quiz/add-quiz.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatGridListModule } from '@angular/material/grid-list';
import { UpdateQuestionsComponent } from './Dashboard/admin-dash/update-questions/update-questions.component';
import { UserSideBarComponent } from './Dashboard/user-dash/user-side-bar/user-side-bar.component';
import { UserHomeComponent } from './Dashboard/user-dash/user-home/user-home.component';
import { InstuctionsQuizComponent } from './Dashboard/user-dash/instuctions-quiz/instuctions-quiz.component';
import { QuizStartComponent } from './Dashboard/user-dash/quiz-start/quiz-start.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxUiLoaderModule ,NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { ExamHistoryofUserComponent } from './Dashboard/user-dash/exam-historyof-user/exam-historyof-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewSingalQuizComponent } from './Dashboard/user-dash/view-singal-quiz/view-singal-quiz.component';
import { UsersExamHistoryComponent } from './Dashboard/admin-dash/users-exam-history/users-exam-history.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavListComponent } from './Components/nav-bar/side-nav-list/side-nav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExamAboutUsComponent } from './Components/exam-about-us/exam-about-us.component';













@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ExamLoginComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    UserDashComponent,
    AdminDashComponent,
    ProfileComponent,
    SidebarComponent,
    WellcomeComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    QuestionComponent,
    AddQuestionComponent,
    UpdateQuizComponent,
    ViewQuizComponent,
    AddQuizComponent,
    UpdateQuestionsComponent,
    UserSideBarComponent,
    UserHomeComponent,
    InstuctionsQuizComponent,
    QuizStartComponent,
    ExamHistoryofUserComponent,
    ViewSingalQuizComponent,
    UsersExamHistoryComponent,
    SideNavListComponent,
    ExamAboutUsComponent,
    
  
   
    
  
    
   





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatGridListModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground :true,
    }),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTableModule,
    FlexLayoutModule
    
   
    
    


  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
