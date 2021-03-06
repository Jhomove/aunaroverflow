import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen.component';
import { QUESTION_ROUTES } from './question/question.routing';

const routes: Routes = [
  { path: '', component: QuestionListComponent, pathMatch: 'full'},
  { path: 'signin', component: SigninScreenComponent},
  { path: 'signup', component: SignupScreenComponent},
  { path: 'questions', children: QUESTION_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
