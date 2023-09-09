import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QuillModule } from 'ngx-quill'

import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginPageComponent } from './modules/home/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './modules/home/pages/not-found-page/not-found-page.component';
import { RegistrationPageComponent } from './modules/home/pages/registration-page/registration-page.component';
import { ProfileButtonComponent } from './core/components/profile-button/profile-button.component';
import { SearchButtonComponent } from './shared/components/buttons/search-button/search-button.component';
import { FollowedSubredditsButtonComponent } from './shared/components/buttons/followed-subreddits-button/followed-subreddits-button.component';
import { RedditPostComponent } from './shared/components/reddit-post/reddit-post.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutSwitchButtonComponent } from './core/components/layout-switch-button/layout-switch-button.component';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedditPostExtraFooterButtonsComponent } from './core/components/reddit-post-extra-footer-buttons/reddit-post-extra-footer-buttons.component';
import { CreatePostPageComponent } from './modules/home/pages/create-post-page/create-post-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuillEditorComponent } from './shared/quill-editor/quill-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    RegistrationPageComponent,
    ProfileButtonComponent,
    SearchButtonComponent,
    FollowedSubredditsButtonComponent,
    RedditPostComponent,
    LayoutSwitchButtonComponent,
    RedditPostExtraFooterButtonsComponent,
    CreatePostPageComponent,
    QuillEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    OverlayModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
