import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CompaniesComponent} from "./companies-component";


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    CompaniesComponent,
  ],
})
export class CompaniesModule {
}
