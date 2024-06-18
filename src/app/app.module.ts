import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { EmailComponent } from './shared/email/email.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCourseComponent,
    BlogComponent,
    ContactComponent,
    PagesComponent,
    MenuComponent,
    AuthLinksComponent,
    SocialLinksComponent,
    PhoneComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
