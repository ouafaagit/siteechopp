import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SiteclientComponent} from "./siteclient.component";
import {AboutComponent} from "../about/about.component";
import {DevisComponent} from "../devis/devis.component";
import {ContactComponent} from "../contact/contact.component";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";
import {HomeComponent} from "../home/home.component";
import {NavcategorieComponent} from "../navcategorie/navcategorie.component";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

const routes = [{
  path: 'ecommerce',
  component: SiteclientComponent
},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'about', component: AboutComponent },]

@NgModule({
  declarations: [

    SiteclientComponent,
    HomeComponent,
    DevisComponent,
    ContactComponent,
    AboutComponent,
    NavcategorieComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [

    RouterModule.forChild(routes)
  ]

})
export class SiteclientModule {
}
