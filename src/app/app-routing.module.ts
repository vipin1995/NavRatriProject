import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LastYearInfoComponent } from './last-year-info/last-year-info.component';

const routes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'lastYearInfo', component: LastYearInfoComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
