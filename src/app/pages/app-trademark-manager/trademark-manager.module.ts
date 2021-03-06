import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {TrademarkManagerComponent} from "./trademark-manager-component";
import {BsDatepickerModule} from "ngx-bootstrap";
import {AngularFontAwesomeModule} from "angular-font-awesome";


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    TrademarkManagerComponent
  ],
})
export class TrademarkManagerModule {
}
