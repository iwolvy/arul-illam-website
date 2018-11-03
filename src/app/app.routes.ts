import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DonationPageComponent } from './pages/donation-page/donation-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JoinUsPageComponent } from './pages/join-us-page/join-us-page.component';
import { CrewListSliderComponent } from './components/crew-list-slider/crew-list-slider.component';

const routes: Routes = [
  { path: "about", component: AboutPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "sponsor", component: DonationPageComponent },
  { path: "gallery", component: GalleryPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "join-us", component: JoinUsPageComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "**", redirectTo: '/home', pathMatch: 'full' }
];

export const RoutedPages = [
  AboutPageComponent,
  ContactPageComponent,
  DonationPageComponent,
  GalleryPageComponent,
  HomePageComponent,
  JoinUsPageComponent
];

export const CustomComponents = [
  CrewListSliderComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
