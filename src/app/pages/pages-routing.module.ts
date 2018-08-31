import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {CountryListComponent} from './app-country-list/country-list.component';
import {CountryGroupComponent} from "./app-country-group/country-group.component";
import {TrademarkClassesComponent} from "./app-trademark-classes/trademark-classes-component";
import {TrademarkTypeComponent} from "./app-trademark-type/trademark-type-component";
import {CompaniesComponent} from "./app-companies/companies-component";
import {TrademarkManagerComponent} from "./app-trademark-manager/trademark-manager-component";
import {DuplicateLogoDetectorComponent} from "./app-duplicate-logo-detector/duplicate-logo-detector-component";
import {ObjectionManagerComponent} from "./app-objection-manager/objection-manager-component";
import {MapComponent} from "./app-maps/map-component";
import {TrademarkSearchComponent} from "./app-trademark-search/trademark-search-component";
import {ObjectionSearchComponent} from "./app-objection-search/objection-search-component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'country-lists',
    component: CountryListComponent,
  }, {
    path: 'country-groups',
    component: CountryGroupComponent,
  },
    {
      path: 'trademark-classes',
      component: TrademarkClassesComponent,
    },
    {
      path: 'trademark-types',
      component: TrademarkTypeComponent,
    },
    {
      path: 'companies/agents',
      component: CompaniesComponent,
    },
    {
      path: 'trademark-manager',
      component: TrademarkManagerComponent,
    },
    {
      path: 'logo-detector',
      component: DuplicateLogoDetectorComponent,
    },
    {
      path: 'objection_manager',
      component: ObjectionManagerComponent,
    },
    {
      path: 'trademark_search',
      component: TrademarkSearchComponent,
    },
    {
      path: 'objection_search',
      component: ObjectionSearchComponent,
    },
    {
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
