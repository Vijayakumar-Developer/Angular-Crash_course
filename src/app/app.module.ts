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
import { ButttonComponent } from './shared/buttton/buttton.component';
import { RatingComponent } from './shared/rating/rating.component';
import { CardComponent } from './shared/card/card.component';
import { CourseFooterComponent } from './shared/card/course-footer/course-footer.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';
import { TestComponent } from './test/test.component';
import { FeedbackCardComponent } from './shared/card/feedback-card/feedback-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SubscribeFormReactiveComponent } from './shared/subscribe-form-reactive/subscribe-form-reactive.component';
import { SubscribeFormComponent } from './shared/subscribe-form/subscribe-form.component';
import { VideoPopupComponent } from './shared/video-popup/video-popup.component';
import { AppStoreComponent } from './home/app-store/app-store.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { ClientsComponent } from './home/clients/clients.component';
import { CoursesComponent } from './home/courses/courses.component';
import { FeedbacksComponent } from './home/feedbacks/feedbacks.component';
import { HeroComponent } from './home/hero/hero.component';
import { HowItWorkComponent } from './home/how-it-work/how-it-work.component';
import { JointUsComponent } from './home/joint-us/joint-us.component';





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
    EmailComponent,
    ButttonComponent,
    RatingComponent,
    CardComponent,
    CourseFooterComponent,
    BlogFooterComponent,
    TestComponent,
    FeedbackCardComponent,
    FooterComponent,
    HeadingComponent,
    SliderComponent,
    SubscribeFormReactiveComponent,
    SubscribeFormComponent,
    VideoPopupComponent,
    AppStoreComponent,
    BlogsComponent,
    ClientsComponent,
    CoursesComponent,
    FeedbacksComponent,
    HeroComponent,
    HowItWorkComponent,
    JointUsComponent
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
