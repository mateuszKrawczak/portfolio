import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/home/home.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { MainContentComponent } from './portfolio/main-content/main-content.component';
import { AboutMeComponent } from './portfolio/main-content/about-me/about-me.component';
import { TechnologiesComponent } from './portfolio/main-content/technologies/technologies.component';
import { ContactComponent } from './portfolio/main-content/contact/contact.component';
import { ProjectsComponent } from './portfolio/main-content/projects/projects.component';
import { WelcomeComponent } from './portfolio/main-content/welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    AboutMeComponent,
    TechnologiesComponent,
    ContactComponent,
    ProjectsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
