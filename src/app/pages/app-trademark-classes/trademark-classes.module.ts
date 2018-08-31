import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {TrademarkClassesComponent} from "./trademark-classes-component";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    TrademarkClassesComponent,
  ],
})
export class TrademarkClassesModule {
}
