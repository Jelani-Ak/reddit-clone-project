import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './modules/home/pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './modules/home/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './modules/home/pages/registration-page/registration-page.component';
import { CreatePostPageComponent } from './modules/home/pages/create-post-page/create-post-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'submit', component: CreatePostPageComponent },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
