import { Routes } from '@angular/router';
import { HomestartframeworkComponent } from './homestartframework/homestartframework.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:"", redirectTo:"HOME", pathMatch:"full"},
    {path:"HOME",component:HomestartframeworkComponent, title:"HOME"},
    {path:"ABOUT",component:AboutComponent, title:"ABOUT"},
      {path:'PORTFOLIO',component:PortfolioComponent, title:"PORTFOLIO"},
      {path:'CONTACT',component:ContactComponent, title:"CONTACT"},
      {path:"**",component:NotfoundComponent,title:"404"}
      

];
