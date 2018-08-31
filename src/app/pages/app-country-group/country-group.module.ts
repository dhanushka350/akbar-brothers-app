import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {ThemeModule} from '../../@theme/theme.module';
import {CountryGroupComponent} from "./country-group.component";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    CountryGroupComponent,
  ],
})
export class CountryGroupModule {
}
