import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SiteadminComponent} from "./siteadmin.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {DashboardfComponent} from "../dashboardf/dashboardf.component";

const routes = [{
  path: 'ecommercedash',
  component: SiteadminComponent
},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-fournisseur', component: DashboardfComponent },
 ]


@NgModule({
  declarations: [
    SiteadminComponent,
    DashboardComponent,
    DashboardfComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ]

})
export class SiteadminModule {
}
