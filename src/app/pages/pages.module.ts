import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {CountryListModule} from './app-country-list/country-list.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {CountryGroupModule} from "./app-country-group/country-group.module";
import {TrademarkClassesModule} from "./app-trademark-classes/trademark-classes.module";
import {TrademarkTypeModule} from "./app-trademark-type/trademark-type.module";
import {CompaniesModule} from "./app-companies/companies.module";
import {TrademarkManagerModule} from "./app-trademark-manager/trademark-manager.module";
import {BsDatepickerModule} from "ngx-bootstrap";
import {DuplicateLogoDetectorModule} from "./app-duplicate-logo-detector/duplicate-logo-detector.module";
import {ObjectionManagerModule} from "./app-objection-manager/objection-manager.module";
import {MapModule} from "./app-maps/map.module";
import {TrademarkSearchModule} from "./app-trademark-search/trademark-search.module";
import {ObjectionSearchModule} from "./app-objection-search/objection-search.module";


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    CountryListModule,
    CountryGroupModule,
    TrademarkClassesModule,
    TrademarkTypeModule,
    CompaniesModule,
    TrademarkManagerModule,
    MiscellaneousModule,
    BsDatepickerModule,
    DuplicateLogoDetectorModule,
    ObjectionManagerModule,
    MapModule,
    TrademarkSearchModule,
    ObjectionSearchModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
