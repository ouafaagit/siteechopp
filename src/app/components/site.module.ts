import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {SiteclientModule} from "./siteclient/siteclient.module";
import {SiteclientComponent} from "./siteclient/siteclient.component";
import {SiteadminModule} from "./siteadmin/siteadmin.module";
import {SiteadminComponent} from "./siteadmin/siteadmin.component";


@NgModule({

  imports: [
    SiteclientModule,
    SiteadminModule
  ],



})
export class SiteModule { }
