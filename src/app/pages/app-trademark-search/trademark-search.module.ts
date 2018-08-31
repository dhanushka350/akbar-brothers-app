import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {TrademarkSearchComponent} from "./trademark-search-component";
import {BsDatepickerModule} from "ngx-bootstrap";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {NgDateRangePickerModule} from "ng-daterangepicker";


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    NgDateRangePickerModule,
  ],
  declarations: [
    TrademarkSearchComponent,
  ],
})
export class TrademarkSearchModule {
}
